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

		'<b>1.</b> Convert <b>0b1110 0110</b> to decimal (as an 8 bit number)<br>',

		{
			questionType : 'multiple choice',
			choices : [ [ '230', false, 'Please try again.  The most significant bit is a 1 so it\'s negative.' ],
					[ '430', false, 'Please try again.' ],
					[ '-52', false, 'Please try again.' ],
					[ '-26', true, 'Correct!' ] ]
		},

		'<br><br><b>2.</b> Convert <b>0b1110 0110</b> to decimal (as a 16 bit number)<br>',

		{
			questionType : 'multiple choice',
			choices : [ [ '230', true, 'Correct!' ],
					[ '430', false, 'Please try again.' ],
					[ '-52', false, 'Please try again.' ],
					[ '-26', false, 'Please try again.  Note this time.  The most significant bit is a 0 so it\'s positive.' ] ]
		},

		'<br><br><b>3.</b> Convert <b>-42</b> to binary.<br>',

		{
			questionType : 'multiple choice',
			choices : [ [ '0b0010 1010', false, 'Please try again.' ],
					[ '0b1101 0110', true, 'Correct!' ],
					[ '0b1011 1111', false, 'Please try again.' ],
					[ '0b1100 0010', false, 'Please try again.' ] ]
		},

		'<br><br><b>4.</b> Google doesn\'t do 2\'s complement correctly for negative binary (just uses a - sign, lame!).  However one program CAN to do it right.  Although it uses 10 characters max (which is weird).  Guess which one, then go try this statement <b>=DEC2BIN</b>(-42)<br>',

		{
			questionType : 'multiple choice',
			choices : [ [ 'MATLAB', false, 'Please try again.' ],
					[ 'Excel', true, 'Correct!' ] ]
		},

];
