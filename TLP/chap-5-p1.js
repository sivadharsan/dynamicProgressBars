// Design a class or set of classes for use in a program that maintains a class roster. For
// each student, store the student’s name, ID, and final grade score in the range 0–100.
// The program will allow student records to be added or removed; display the record of
// a particular student, identified by ID, with the grade displayed as a number and as a
// letter; and display the average score for the class.

    const nameRegex = new RegExp(/^[-'a-zA-Z\s]+$/);

    class StudentRecord {
        constructor(id, name, score) {
            this._id = id;
            this._name = name;
            this._score = score;
            this._nextStudentRecord = null;
        }

        get score() {
            return this._score;
        }

        set score(newScore){
            this._score = newScore;
        }

        get id() {
            return this._id;
        }

        set id(newId){
            this._id = newId;
        }

        get nextStudentRecord() {
            return this._nextStudentRecord;
        }

        set nextStudentRecord(newNextRecord){
            this._nextStudentRecord = newNextRecord;
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


    class ClassRoom {

        constructor() {
            this._headStudentRecord = null;

        }

        // The addRecord operation is expected to be called frequently, so it must be implemented efficiently.
        // Currently it add to the end of the linked list, for pef reasons we can add to the head..
        addStudent(id, name, score){
            let studentRecord = new StudentRecord(id, name, score);
            studentRecord.nextStudentRecord = this._headStudentRecord;
            this._headStudentRecord = studentRecord;


            // if(!this._headStudentRecord){
            //     this._headStudentRecord = studentRecord;
            // } else {
            //     var studentRecords = this._headStudentRecord;
            //     while(studentRecords.nextStudentRecord){
            //         studentRecords = studentRecords.nextStudentRecord;
            //     }
            //     studentRecords.nextStudentRecord = studentRecord;
            // }
        }

        getRankUpdated(score){
            const NUMBER_CATEGORIES = 11;
            const GRADE_LETTER = ["F", "D", "D+", "C-", "C", "C+", "B-", "B", "B+", "A-", "A"];
            const LOWEST_GRADE_SCORE = [0, 60, 67, 70, 73, 77, 80, 83, 87, 90, 93];
            let category = 0;
            while (category < NUMBER_CATEGORIES && LOWEST_GRADE_SCORE[category] <= score)
                category++;
            return GRADE_LETTER[category - 1];
        }

        removeStudent(id){
            var studentRecords = this._headStudentRecord;

            if(studentRecords.id === id){
                this._headStudentRecord =  this._headStudentRecord.nextStudentRecord;
                return;
            }

            while (studentRecords.nextStudentRecord) {
                if(studentRecords.nextStudentRecord.id === id){
                    studentRecords.nextStudentRecord = studentRecords.nextStudentRecord.nextStudentRecord;
                    studentRecords.nextStudentRecord =  null;
                    return;
                } else {
                    studentRecords = studentRecords.nextStudentRecord;
                }
            }

            console.log("Record with id:" + id + " not found for delete operation!")
        }

        displayStudent(id){
            var studentRecords = this._headStudentRecord;

            while (studentRecords) {
                if(studentRecords.id === id){
                    console.log("id=" + studentRecords.id + ", name=" + studentRecords.name + ", Rank=" + this.getRankUpdated(studentRecords.score));
                    return;
                } else {
                    studentRecords = studentRecords.nextStudentRecord;
                }
            }

            console.log("Record with id:" + id + " not found for display operation!")
        }

        displayStudents(){
            var studentRecords = this._headStudentRecord;

            while (studentRecords) {
                console.log("id=" + studentRecords.id + ", name=" + studentRecords.name + ", Rank=" + this.getRankUpdated(studentRecords.score));
                studentRecords = studentRecords.nextStudentRecord;
            }
        }

        deleteStudents(){
            var studentRecords = this._headStudentRecord;

            while (studentRecords) {
                this.removeStudent(studentRecords.id);
                studentRecords = studentRecords.nextStudentRecord;
            }
        }

        showAverageScore(){
            let averageScore = 0;
            var studentRecords = this._headStudentRecord;
            var classStrength = 0;
            while (studentRecords) {
                averageScore += studentRecords.score;
                studentRecords = studentRecords.nextStudentRecord;
                classStrength++;
            }

            console.log(averageScore / classStrength);
        }

        recordWithNumber(idNum){

        }
    }

    let classRoom = new ClassRoom();

    classRoom.addStudent(1,'Siva1', 75);
    classRoom.addStudent(2,'Siva2', 95);
    classRoom.addStudent(3,'Siva3', 65);
    classRoom.addStudent(4,'Siva4', 45);
    classRoom.addStudent(5,'Siva5', 35);

    classRoom.displayStudent(3);
    classRoom.showAverageScore();
    classRoom.removeStudent(5);
    classRoom.displayStudents();
    classRoom.deleteStudents();
    classRoom.displayStudents();