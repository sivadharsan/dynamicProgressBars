/**
 * Created by sellathurai_s on 11/20/17.
 * Write a function that is passed an array of integers and a “target” number
 and that returns the number of occurrences of the target in the array. Solve
 the problem first using iteration, then recursion.
 */

class Occurances{
    constructor(array, target){
        this._array = array;
        this._target = target;
    }

    countOccurances(){
        let count = 0;
        for( let i = 0; i < this._array.length; i++){
            if(this._array[i] === this._target){
                count++;
            }
        }

        return count;
    }

    recursiveCountOccurances(){

    }

    printCount(){
        console.log("no of occurances of " + this._target + " :" + this.countOccurances());

    }

}

var occurances = new Occurances(['e', 'a','b', 'c','d','e','f', 'e'], 'e');
occurances.printCount();
