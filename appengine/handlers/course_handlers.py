from handlers import base_handler
import settings

### PAGES ###
class AndroidCoursePage(base_handler.BaseCoursePage):
  def get_course(self):
    return settings.ANDROID

class Csse120CoursePage(base_handler.BaseCoursePage):
  def get_course(self):
    return settings.CSSE120

class IosCoursePage(base_handler.BaseCoursePage):
  def get_course(self):
    return settings.IOS

class Me430CoursePage(base_handler.BaseCoursePage):
  def get_course(self):
    return settings.ME430

class WebCoursePage(base_handler.BaseCoursePage):
  def get_course(self):
    return settings.WEB

class NgfireCoursePage(base_handler.BaseCoursePage):
  def get_course(self):
    return settings.NGFIRE

