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

'<b>1.</b> If you attempt to read a value from localStorage for the key <b>bob</b>, via localStorage.bob, but there is no value for the key bob, what gets returned?<br>',

{
  questionType : 'multiple choice',
  choices : [
      ['nothing', false, 'Please try again.' ],
      ['unknown', false, 'Please try again.' ],
      ['undefined', true, 'Correct!' ],
      ['null', false, 'Please try again.' ] ]
},


'<br><br><b>2.</b> localStorage is really only meant for simple storage not complex data structures.  Additionally there is a limitation about what can be stored.  What is that limitation?<br>',


{
  questionType : 'multiple choice',
  choices : [
      ['There is no limitation.', false, 'Please try again.' ],
      ['You can only store 512 KB of data total. (See <a target="_blank" href="http://stackoverflow.com/questions/2989284/what-is-the-max-size-of-localstorage-values">this stackoverflow question</a> if you want more info)', false, 'Please try again.' ],
      ['You can only store numbers (for example the number of rounds to finish the game)', false, 'Please try again.'],
      ['All values must be serialize and de-serialize to/from string values', true, 'Correct!'  ] ]
},



];