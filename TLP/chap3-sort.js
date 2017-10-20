

function sort(numbers){
   for (var i = 0; i < numbers.length; i++) {
     for (var j = i + 1; j < numbers.length; j++) {
       if(numbers[j]< numbers[i]){
         swap(numbers, i, j);
       }
     }
   }
   for (var i = 0; i < numbers.length; i++) {
     console.log(numbers[i] + ",");
   }

}

function swap(numbers, first, second) {
   var temp = numbers[first];
   numbers[first] = numbers[second];
   numbers[second] = temp;
}


var numbers = [5,1,3,6,2,4];
sort(numbers);


function findMode(modeNumbers) {

  var largestModeNumber = modeNumbers[0];
  var largestModeCount = 1;

  var modeCurrentNumber = modeNumbers[0];
  var modeCurrentCount = 1;

  var modePreviousNumber = modeNumbers[0];
  var modePrevCount = 1;

  for (var i = 1; i < modeNumbers.length; i++) {
     modeNumberCurrent = modeNumbers[i];
     if(modeNumberCurrent === modePreviousNumber){
        modeCurrentCount++;
     } else {
      modePrevCount = modeCurrentCount;
       modePreviousNumber = modeNumbers[i-1];
       if(modePrevCount > largestModeCount){
         largestModeCount  = modePrevCount;
         largestModeNumber = modeNumberCurrent;
       }

       modeCurrentCount = 0;
       modeCurrentCount++;
     }
  }

  console.log("Largest Mode Number:" + largestModeNumber);
  console.log("Largest Mode Number Count:" + largestModeCount);
}


var modeNumbers = [4, 7, 7, 9, 9, 9, 8, 3, 3, 3, 3, 10];
findMode(modeNumbers);
