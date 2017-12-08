/**
 * Created by sellathurai_s on 11/19/17.
 */
class Parity{
    constructor(vitValue){
        this._bit = vitValue;
        this._nextBit = null;
    }

    get bit() {
        return this._bit;
    }

    set bit(newBit) {
        this._bit = newBit;
    }

    get nextBit() {
        return this._nextBit;
    }

    set nextBit(nextBit){
        this._nextBit = nextBit;
    }
}

class ParityChecker{
    constructor(){
        this._headBit = null;
    }

    addBits(bit){
        let bitRecord = new Parity(bit);
        bitRecord.nextBit = this._headBit;
        this._headBit = bitRecord;
    }

    getParity(){
        // var oddParity = (this._bitString[0] === 1);
        var oddParity = false;
        for( var i = 0; i < this._bitString.length; i++){
            var bit = this._bitString[i];
            if(oddParity && bit === '1'){
                oddParity = false;
            }
            else if(!oddParity && bit === '1'){
                oddParity = true;
            }
            else if(oddParity && bit === '0'){
                oddParity = true;
            }
            else if(!oddParity && bit === '0'){
                oddParity = false;
            }
        }

        console.log("String is odd parity:" + oddParity);
    }

    getParityRecursive(head){
        if(head === null){
            return false;
        }

        var bitStatus = this.getParityRecursive(head.nextBit);

         if(bitStatus && head.bit === '1'){
             return  false;
         }
         else if(!bitStatus && head.bit === '1'){
             return true;
         }
         else if(bitStatus && head.bit === '0'){
             return true;
         }
         else if(!bitStatus && head.bit === '0'){
             return false;
         }
    }

    getOddParity( ){
        return this.getParityRecursive(this._headBit);
    }

}

var parityChecker = new ParityChecker();
parityChecker.addBits('0');
parityChecker.addBits('1');
parityChecker.addBits('1');
parityChecker.addBits('0');
parityChecker.addBits('1');
parityChecker.addBits('0');
parityChecker.addBits('1');
console.log("String is odd parity:" + parityChecker.getOddParity());

// parityChecker.getParityRecursive();
// console.log("String is odd parity:" + parityChecker.getParityRecursive());
// var parityChecker1 = new ParityChecker("0101010");
// console.log("String is odd parity:" + parityChecker1.getParityRecursive());
//
// var parityChecker2 = new ParityChecker("0101010");
// console.log("String is odd parity:" + parityChecker2.getParityRecursive());
// var parityChecker3 = new ParityChecker("010101");
// console.log("String is odd parity:" + parityChecker3.getParityRecursive());