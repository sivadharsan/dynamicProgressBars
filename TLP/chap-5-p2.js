/**
 * Created by sellathurai_s on 10/19/17.
 */

// TRACKING AN UNKNOWN
// QUANTITY OF STUDENT RECORDS
// In this problem, you will write a class with methods to store and manipulate a collection
// of student records. A student record contains a student number and a grade, both integers,
//     and a string for the student name. The following functions are to be implemented:
//     addRecord This method takes a student number, name, and grade and adds a
// new record with this data to the collection.
//     recordWithNumber This function takes a student number and retrieves the record
// with that student number from the collection.
//     removeRecord This function takes a student number and removes the record with
//     that student number from the collection.
//     The collection can be of any size. The addRecord operation is expected to be
// called frequently, so it must be implemented efficiently.

class StudentRecord{
    constructor(idNum, grade, name){
        this._id = idNum;
        this._name = name;
        this._grade = grade;
    }

    get grade() {
        return this._grade;
    }

    set grade(newGrade){
        this._grade = newGrade;
    }

    get id() {
        return this._id;
    }

    set id(newId){
        this._id = newId;
    }

    get name() {
        return this._name;
    }

    set name(newName){
        if(nameRegex.test(newName)) {
            this._name = newName;
        } else {

        }
    }
}

class StudentCollection {
    constructor(){

    }
    addRecord(studentRecord){

    }

    recordWithNumber(idNum){

    }
    removeRecord(idNum){

    }
}