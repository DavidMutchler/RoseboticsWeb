import endpoints
from google.appengine.ext import ndb
from protorpc import remote

from models.rosebotics_models import CourseProgress, MemberProgress, RoseboticsStudent, RoseboticsTeam, RoseboticsTeamMember,\
  Team, TrackProgress, UnitProgress, TeamVisibility, TotalTeamProgress,\
  TeamInvites, Teams, TeamInvite
from rosebotics_utils.progress_utils import get_total_progress_for_course


WEB_CLIENT_ID = "963009065087-2a5ccl5rhm4ghgm88li21fkjgsu5eua0.apps.googleusercontent.com"

@endpoints.api(name="teams", version="v1", description="ROSEbotics Team API",
               audiences=[WEB_CLIENT_ID],
               allowed_client_ids=[endpoints.API_EXPLORER_CLIENT_ID, WEB_CLIENT_ID])

class TeamApi(remote.Service):
  """ The Api for the Teams feature within ROSEbotics.org """

  @Team.method(user_required=True, name='insert', path='insert', http_method='POST')
  def insert_team(self, team):
    """ Creates or updates a team that you own """
    user_email = get_user_email()
    if team.team_key:
      old_team = team.team_key.get()
    else:
      old_team = None
    if old_team is not None:
      old_team.name = team.name
      old_team.put()
      old_members = RoseboticsTeamMember.query(ancestor=team.team_key)
      new_emails = []
      old_emails = [member.email for member in old_members]
      # if new email is NOT in old_members: add new email
      for member in team.members:
        new_emails.append(member.email)
        if member.email not in old_emails:
          member_key = get_member_key(team.team_key, member.email)
          new_member = RoseboticsTeamMember(key=member_key)
          new_member.email = member.email
          if new_member.email == user_email:
            new_member.visibility = TeamVisibility.ALL_MEMBERS
          new_member.put()
      # if old username is NOT in new_members remove old member
      for old_member in old_members:
        if old_member.email not in new_emails:
          old_member.key.delete()
    else:
      new_team = RoseboticsTeam(leader=user_email, name=team.name)
      team.team_key = new_team.put()
      emails = [member.email for member in team.members]
      for email in emails:
        student_email = email
        member_key = get_member_key(team.team_key, student_email)
        new_member = RoseboticsTeamMember(key=member_key)
        new_member.email = student_email
        if new_member.email == user_email:
          new_member.visibility = TeamVisibility.ALL_MEMBERS
        new_member.put()
    return team

  @Team.method(user_required=True, request_fields=('team_key',), name='delete',
                         path='delete/{team_key}', http_method='DELETE')
  def delete_team(self, team):
    """ Deletes a team that you own """
    user_email = get_user_email()
    team = team.team_key.get()
    if team.leader != user_email:
      raise endpoints.BadRequestException('You are not the leader of this team!')
      return
    members = RoseboticsTeamMember.query(ancestor=team.key)
    for member in members:
      member.key.delete()
    team.key.delete()
    return Team(name='deleted')

  @Teams.method(user_required=True, request_fields=(), name='list.all',
                path='list/all', http_method='GET')
  def get_teams(self, empty):
    """ Gets the teams that you are a member or leader of """
    user_email = get_user_email()
    response = Teams()
    query = RoseboticsTeamMember.query(RoseboticsTeamMember.email==user_email)
    teams = [key.parent().get() for key in query.iter(keys_only=True)]
    query = RoseboticsTeam.query(RoseboticsTeam.leader==user_email)
    teams += [team for team in query]
    teams = remove_model_duplicates(teams)
    response.teams = [to_team_from_rosebotics(team_key, get_members=False) for team_key in teams]
    return response

  @Teams.method(user_required=True, request_fields=(), name='list.leader',
                path='list/leader', http_method='GET')
  def get_leader_teams(self, empty):
    """ Gets all of the teams you are leader of """
    user_email = get_user_email()
    response = Teams()
    query = RoseboticsTeam.query(RoseboticsTeam.leader==user_email)
    response.teams = [to_team_from_rosebotics(team) for team in query]
    return response

  @TeamInvite.method(user_required=True, name='invites.respond',
                     path="invites", http_method='POST')
  def team_invite_response(self, invite):
    """ Basically an update member within a team """
    user_email = get_user_email()
    key = get_member_key(invite.team_key, user_email)
    member = key.get()
    member.visibility = invite.response
    if member.visibility != TeamVisibility.REJECT_INVITE:
      member.put()
    else:
      member.key.delete()
    return invite

  @TeamInvites.method(user_required=True, name='invites.list', request_fields=(),
                     path="invites", http_method='GET')
  def get_team_invites(self, empty):
    """ Get all of the invites to teams that you have """
    user_email = get_user_email()
    response = TeamInvites()
    query = RoseboticsTeamMember.query(RoseboticsTeamMember.email==user_email)
    for team_member in query:
      team = team_member.key.parent().get()
      invite = TeamInvite()
      team_leader = RoseboticsStudent.get_by_id(team.leader)
      invite.team_leader_name = team_leader.name
      invite.team_key = team.key
      invite.team_name = team.name
      invite.response = team_member.visibility
      response.invites.append(invite)
    return response

  @TotalTeamProgress.method(user_required=True, name='progress', request_fields=('team_key',),
                            path='progress/{team_key}', http_method='GET')
  def get_total_progress(self, team_progress):
    """ Gets total ROSEbotics progress for everyone in a team """
    user_email = get_user_email()
    rosebotics_team = team_progress.team_key.get()
    team_progress.name = rosebotics_team.name
    # change to filter by visibility?
    members = RoseboticsTeamMember.query(ancestor=team_progress.team_key)
    members_progress = []
    allowed_visibilies = [TeamVisibility.ALL_MEMBERS]
    if rosebotics_team.leader == user_email:
      allowed_visibilies.append(TeamVisibility.TEAM_LEADER)
    else:
      is_user_not_in_team = True
      for member in members:
        if member.email == user_email:
          is_user_not_in_team = False
          break
      if is_user_not_in_team:
        raise endpoints.BadRequestException("You are not allowed to view this team!")
    courses = ['Android', 'iOS', 'Web']
    for member in members:
      if member.visibility in allowed_visibilies or member.email == user_email:
        mp = MemberProgress()
        student = RoseboticsStudent.get_by_id(member.email)
        if student is None:
          continue
        mp.display_name = student.name
        mp.username = student.username
        for course in courses:
          progress = get_total_progress_for_course(member.email, course.lower())
          mp.course_progress.append(create_course_progress(course, progress))
        members_progress.append(mp)
    team_progress.members_progress = members_progress
    return team_progress

def create_course_progress(course_name, progress):
  course_progress = CourseProgress(name=course_name, progress=progress["course"])
  for track in progress["tracks"]:
    track_name = track['name']
    track_progress = create_track_progress(track_name, track)
    course_progress.track_progress.append(track_progress)
  return course_progress

def create_track_progress(track_name, progress):
  track_progress = TrackProgress(name=track_name, progress=progress["track"])
  units = progress["units"]
  extract_key = lambda pair:int(pair[0].split(":")[0])
  units = sorted(units.items(), key=extract_key)
  for title, unit_progress in units:
    unit_name = title.split(':')[1]
    unit = UnitProgress(name=unit_name, progress=unit_progress)
    track_progress.unit_progress.append(unit)
  return track_progress

def get_user_email():
  return endpoints.get_current_user().email().lower()

def get_member_key(team_key, email):
  return ndb.Key(RoseboticsTeamMember, email, parent=team_key)

def to_team_from_rosebotics(rosebotics_team, get_members=True):
  team = Team()
  team.name = rosebotics_team.name
  team.leader = rosebotics_team.leader
  team.team_key = rosebotics_team.key
  if get_members:
    members = RoseboticsTeamMember.query(ancestor=rosebotics_team.key)
    team.members = [member for member in members] # iterate through them to get them all
  return team

def remove_model_duplicates(seq):
  """ removes model duplicates by doing string comp on urlsafe of key """
  urlsafes = []
  checked = []
  for e in seq:
    if e is None:
      continue
    urlsafe = e.key.urlsafe()
    if urlsafe not in urlsafes:
      urlsafes.append(urlsafe)
      checked.append(e)
  return checked
