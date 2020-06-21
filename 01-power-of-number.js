/* Power of Number
Write a function to calculate ​n^p:​
• Read ​n​ (the number) and ​p​ (the power)
• Print the result of ​n​ to the power of ​p • Don't use ​Math.pow()​, use loops */

function main(num1, num2) {
  var total = 1;
  for (i = 0; i < num2; i++) {
    total *= num1;
  }
  console.log(total);

}

main(2, 5);
main(3, 4);
main(2.5, 3)