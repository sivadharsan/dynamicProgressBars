/**
 * Created by sellathurai_s on 11/28/17.
 */

var numbers = [87, -1, -1, 84, -1, 72];

console.log("------------- Before Sorting ---------------");
for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}

for(let i = 0; i < numbers.length; i++){
    if(numbers[i]  !== -1){
        for(let j = i + 1; j < numbers.length; j++){
            if(numbers[j] === -1)
                continue;
            else
                if(numbers[i] > numbers[j]){
                    var temp = numbers[j];
                    numbers[j] = numbers[i];
                    numbers[i] = temp;
                }
        }
    }
}

console.log("------------- After Sorting ---------------");

for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}

