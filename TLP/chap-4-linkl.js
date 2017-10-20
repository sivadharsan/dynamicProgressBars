var head = null;

function Student(id, grade){
   this.id = id;
   this.grade = grade;
   var nextStudent;
}

function addStudent(id, grade){
	 var student = new Student(id, grade);
   student.nextStudent = head;
   head = student;
}

function removeStudent(id){

   if(head.id === id){
     head = head.nextStudent;
      print(head);
     return;
   }

   var currentStudent = head;

   while(currentStudent !== null){
     if(currentStudent.nextStudent.id === id){
       currentStudent.nextStudent = currentStudent.nextStudent.nextStudent;
       print(head);
       break;
     } else {
       currentStudent = currentStudent.nextStudent;
     }
   }
}

function printStudent(student){
  console.log("Student Id: "+ student.id);
  console.log("Student Grade: "+ student.grade);
  console.log("Next Student: "+ student.nextStudent);
}

function print(head) {
  while(head){
    printStudent(head);
    head = head.nextStudent;
  }
}

addStudent(1,1);
addStudent(2,2);
addStudent(3,3);
addStudent(4,4);
addStudent(5,5);
print(head);

console.log("------ removeStudent 2 ---------");
removeStudent(2);

console.log("------ removeStudent 1 ---------");
removeStudent(1);

console.log("------ removeStudent 5 ---------");
removeStudent(5);

// --------------------------
// Chapter 4: Excercise 4.2
// --------------------------

var someString = "Hello World!";

function substr(startPosition, length) {
  if (startPosition > someString.length){
    return "";
  }

  var actualLength = (length) > (someString.length - startPosition) ? someString.length - startPosition : (startPosition + length);
  var subString = "";

  for (var i = 0; i < actualLength; i++) {
    subString += someString[startPosition + i];
  }

  return subString;
}

console.log(substr(3,5));
console.log(substr(11,10));
console.log(substr(8,7));
console.log(substr(2,12));
console.log(substr(2,6));

// --------------------------
// Chapter 4: Excercise 4.3
// --------------------------
function substr(someString, startPosition, length) {
  if (startPosition > someString.length){
    return "";
  }

  var actualLength = (length) > (someString.length - startPosition) ? someString.length - startPosition : (startPosition + length);
  var subString = "";

  for (var i = 0; i < actualLength; i++) {
    subString += someString[startPosition + i];
  }

  return subString;
}
var originalString = "abcdabee";
function replaceString(source, target) {

  if(!source)
  	return originalString;

  if(source === target) {
  	return originalString;
  }

  var updatedString = "";
  var matchStart = 0;
  var matchString = "";
  for (var i = 0; i < originalString.length; i++) {
		var newChar = originalString[i];
    if(newChar === source[matchStart]){
    	matchStart++;
    } else {
      if(matchStart === source.length){
      	updatedString += target;
      } else {
       		if(matchStart === 0) {
          } else {
          	updatedString += substr(originalString, i - matchStart, matchStart);
          }
      }
      updatedString += newChar;
      matchStart = 0;
    }
  }

  return updatedString;
}
