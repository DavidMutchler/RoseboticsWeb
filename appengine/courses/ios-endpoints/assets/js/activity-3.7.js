// Copyright 2012 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// Usage instructions: Create a single array variable named 'activity'. This
// represents explanatory text and one or more questions to present to the
// student. Each element in the array should itself be either
//
// -- a string containing a set of complete HTML elements. That is, if the
//    string contains an open HTML tag (such as <form>), it must also have the
//    corresponding close tag (such as </form>). You put the actual question
//    text in a string.
//
// -- a JavaScript object representing the answer information for a question.
//    That is, the object contains properties such as the type of question, a
//    regular expression indicating the correct answer, a string to show in
//    case of either correct or incorrect answers or to show when the student
//    asks for help. For more information on how to specify the object, please
//    see http://code.google.com/p/course-builder/wiki/CreateActivities.

var activity = [
    '<b>1.</b> In order to create the query object used in this video, we used a class method on GTLQueryMoviequotes.  What was the name of that method?<br>',

    {
      questionType : 'multiple choice',
      choices : [
          [ 'queryForMoviequoteList', true, 'Correct!  For the backend we made a list, insert, and delete API method.  This time we\'re using the *List* method.' ],
          [ 'queryForMoviequoteInsertWithObject:', false, 'Please try again.' ],
          [ 'queryForMoviequoteDeleteWithEntityKey:', false, 'Please try again.' ],
          [ 'queryForMoviequoteSomethingElse', false, 'Please try again. ' ] ]
    },


  '<br><br><b>2.</b> Under the hood the moviequotes.moviequote.list method uses what type of RESTful API method?  Here is an explaination of each:<br>',
  '<img width="90%" src="assets/img/restful_api_methods.png" alt="RESTful API Methods"><br>',
  '<i>Image from <a href="http://en.wikipedia.org/wiki/Representational_state_transfer">http://en.wikipedia.org/wiki/Representational_state_transfer</a></i><br>',
  { questionType: 'multiple choice',
    choices: [['GET', true, 'Correct!'],
              ['PUT', false, 'Please try again.'],
              ['POST', false, 'Please try again.'],
              ['DELETE', false, 'Please try again.']]},

    '<br><br>Here is an example GET request, click on this link: (it will open in a new tab)<br><a target="_blank" href="https://fisherds-movie-quotes.appspot.com/_ah/api/moviequotes/v1/moviequote/list?limit=30&order=-last_touch_date_time">https://fisherds-movie-quotes.appspot.com/_ah/api/moviequotes/v1/moviequote/list?limit=30&order=-last_touch_date_time</a><br>',
    'Can you see how you\'d change it to point to your backend?  Can you see how to change it to only get 2 quotes?<br><br>',
    '<b>3.</b> That exact GET request was used in this video by the iPhone Simulator to get the data.  It comes in as JSON data, but then each item is converted into an Objective-C object.<br>',

    {
      questionType : 'multiple choice group',
      questionsList : [
          {
            questionHTML : 'Based on the JSON data response (from the link above) what are the 5 fields present for each MovieQuote in the items array?',
            choices : [ 'items', 'kind', 'etag', 'quote', 'last_touch_date_time', 'movie', 'entityKey' ],
            correctIndex : [1,3,4,5,6]
          } ],
      allCorrectOutput : 'Well done!  You probably didn\'t expect the *kind* property because it is only used under the hood.  We use last_touch_date_touch for the sort order, quote and movie for display, and entityKey so we can edit or delete the quote later.',
      someIncorrectOutput : 'Please try again. Hints: items and etag are not in the array',
    },



    '<br><br><b>4.</b> We set the limit to give us 30 quotes.  If there were more than 30 quotes on the server and we wanted more than just the most recent 30 quotes how would we get them?<br>',

    {
      questionType : 'multiple choice',
      choices : [
          [ 'We can\'t get them.  30 is the max', false, 'Please try again.' ],
          [ 'Make a second query for Moviequotes setting the pageToken on that query object to the nextPageToken from this response.', true, 'Correct! A fair amount of code needed to make that happen smoothly and append the results so we did not do it here (keeping it simple).' ],
          [ '50 quotes is the most we could ever get', false, 'Please try again.' ],
          [ 'There can never be more than 30 quotes saved on the server.  So a non-issue', false, 'Please try again. ' ] ]
    },

    '<br><br><b>5.</b> If we had <b>not</b> set the limit to 30 would default limit size would we have gotten?<br>',

    {
      questionType : 'multiple choice',
      choices : [
          [ '0 (you must set a limit)', false, 'Please try again.' ],
          [ '10', true, 'Correct!  I think they picked 10 as the default just to make the point that you should make small fast queries, then come back for more if needed.' ],
          [ '50', false, 'Please try again.' ],
          [ 'We would have gotten ALL quotes', false, 'Please try again. ' ] ]
    },

];
