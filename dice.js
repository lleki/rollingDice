//get user input
var numbers = process.argv.slice(2);  //array
var numberList = [];

// number of times you have to roll
for (var x = 0 ; x < numbers[0]; x++){
      var randomNumber = Math.floor((Math.random() * 6) + 1);
      // add random number to empty string
      numberList.push(randomNumber);
}

console.log(numberList.join(", "));




