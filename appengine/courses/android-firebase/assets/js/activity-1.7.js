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
	"<b>1.</b> What methods are part of the ChildEventListener interface? (Choose all that apply.)",
	{
		questionType : "multiple choice group",
		questionsList : [
				{
					questionHTML : "",
					choices : [ "onChildAdded", "onChildChanged", "onChildRemoved", "onChildMoved", "onCancelled"],
					correctIndex : [0,1,2,3,4]
				}
				],
		allCorrectOutput : "Well done!",
		someIncorrectOutput : "Please ignore the previous feedback line. Then try again.",
	},
	"<br><br>",
	"<b>2.</b> What are two things that every data snapshot has? (Choose all that apply.)",
	{
		questionType : "multiple choice group",
		questionsList : [
				{
					questionHTML : "",
					choices : [ "key", "value", "photo"],
					correctIndex : [0,1]
				}
				],
		allCorrectOutput : "Well done!",
		someIncorrectOutput : "Please ignore the previous feedback line. Then try again.",
	},
	"<br><br>",
	"<b>3.</b> What info do I pass to dataSnapshot's getValue() method to cause it to deserialize the snapshot into a java object?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["The object's class", true, "Correct. " ],
				["The DataSnapshot.DESERIALIZE boolean flag", false, "Try again. Seems reasonable. But no." ],
		]
	},
	"<br><br>",
	"<b>4.</b> Firebase has offline capabilities that keep the data synced locally even when not connected to the backend.<br>",
	{
		questionType : "multiple choice",
		choices : [
				["True", true, "Correct. " ],
				["False", false, "Try again. In fact, this is why we are studying Firebase even before we study local storage (SQLite)" ],
		]
	},
];
