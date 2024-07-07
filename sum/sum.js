var numbers = [];
sum = 0;
for (var i = 0; i < 5; i++) {
  var userNum = +prompt("Enter a number");
  numbers.push(userNum);
  sum += userNum[i];
  console.log(numbers);
  console.log(sum);
}
