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

		'<b>1.</b> First up is a task (not a normal question)... See if you can make a second rung that uses I2 to control Q2 (very similar to the one we made together). Then test it with the simulator.<br>',

		{
			questionType : 'multiple choice',
			choices : [ [ 'Success!  No problem.  Pretty red rung when I click I2 in the Simulation area.', true, 'Well done!' ],
					[ 'Had trouble', false, 'No worries.  The next few videos will help.  Mark the other answer for now. :)' ] ]
		},

		'<br><br><b>2.</b> Name that tab!<br>',

		{
			questionType : 'multiple choice group',
			questionsList : [
					{
						questionHTML : '<b>a.</b> Area where you write your \'code\' (ladder logic)',
						choices : [ 'Project', 'Circuit Diagram', 'Simulation', 'Communication' ],
						correctIndex : 1
					},
					{
						questionHTML : '<b>b.</b> Area where you setup your input types then test your program',
						choices : [ 'Project', 'Circuit Diagram', 'Simulation', 'Communication' ],
						correctIndex : 2
					},
					{
						questionHTML : '<b>c.</b> Area where you spend about 5 seconds at the start of each program to select the PLC type.',
						choices : [ 'Project', 'Circuit Diagram', 'Simulation', 'Communication' ],
						correctIndex : 0
					}, {
						questionHTML : '<b>d.</b> Area you only need in lab to connect to a PLC',
						choices : [ 'Project', 'Circuit Diagram', 'Simulation', 'Communication' ],
						correctIndex : 3
					} ],
			allCorrectOutput : 'Well done!',
			someIncorrectOutput : 'Please try again. Hints: Each answer is used once.',
		},

];
