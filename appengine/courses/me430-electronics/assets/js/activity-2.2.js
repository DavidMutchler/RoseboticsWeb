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
    '<b>1.</b> Decoupling capacitors always connect between power and ground.<br>',

    { questionType: 'multiple choice',
      choices: [['True', true, 'Correct!  They are pretty simple.'],
                ['False', false, 'Please try again.']]},

    '<br><br><b>2.</b> Although it wasn\'t covered in the video, my best guess is that the large electrolytic capacitors we use near motors are <b>directional</b> and <b>MUST</b> be connected in a certain direction.<br>',

    { questionType: 'multiple choice',
      choices: [['True', true, 'Correct!  They have a negative strip on one side that must go to ground.'],
                ['False', false, 'Please try again.']]},

    '<br><br><b>3.</b> Although it wasn\'t covered in the video, my best guess is that the small ceramic capacitors we use near the PIC are <b>directional</b> and <b>MUST</b> be connected in a certain direction.<br>',

    { questionType: 'multiple choice',
      choices: [['True', false, 'Please try again.'],
                ['False', true, 'Correct!  They are reversible and can be connected either way.']]},

    '<br><br><b>4.</b> I\'ve watched Old School and got the Vince Vaughn earmuffs reference.<br>',

    { questionType: 'multiple choice',
      choices: [['True', true, 'Love that movie.  As you get older you will stop finding movies like that funny so watch them now. :P'],
                ['False', false, 'You\'re missing out.  Go rent it on Netflix instead of finishing this lecture.  Obviously finish the lecture later. :)']]},

];
