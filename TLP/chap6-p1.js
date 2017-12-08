/**
 * Created by sellathurai_s on 11/18/17.
 */


// 6-1. Write a function to compute the sum of just the positive numbers in an array
// of integers. First, solve the problem using iteration. Then, using the technique
// shown in this chapter, convert your iterative function to a recursive function.

class PositiveNumber {
    constructor(number) {
        this._number = number;
        this._nextNumberRecord = null;
    }

    get newNumber() {
        return this._number;
    }

    set newNumber(newNumber){
        this._number = newNumber;
    }

    get nextNumberRecord() {
        return this._nextNumberRecord;
    }

    set nextNumberRecord(newNextNumberRecord){
        this._nextNumberRecord = newNextNumberRecord;
    }
}

class Numbers {

    constructor() {
        this._headNumberRecord = null;

    }

    addNumber(value){
        let positiveNumber = new PositiveNumber(value);
        positiveNumber.nextNumberRecord = this._headNumberRecord;
        this._headNumberRecord = positiveNumber;

    }

    computerSumIterative(){
        var head = this._headNumberRecord;
        var sum = 0;
        while(head !== null){
            if(head.newNumber > 0){
                sum += head.newNumber;
            }
            head = head.nextNumberRecord;
        }

        console.log("Sum is :" + sum);
    }

    computerSumRecursive(head){
        if(head === null){
            return 0;
        }

        return ( head.newNumber > 0 ? head.newNumber : 0 ) + this.computerSumRecursive(head.nextNumberRecord);
    }

    computeSum(){
        var recursiveSum = this.computerSumRecursive(this._headNumberRecord);
        console.log("Recursive Sum = " + recursiveSum);
    }
}

let numbers = new Numbers();

numbers.addNumber(5);
numbers.addNumber(2);
numbers.addNumber(3);
numbers.addNumber(-4);


numbers.computerSumIterative();
numbers.computeSum();
