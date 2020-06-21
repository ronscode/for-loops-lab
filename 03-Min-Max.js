/* Min and Max Number
Write a function to find the ​biggest​ and the ​smallest​ number • Input:
• Integer ​n​: the count of numbers to be read
• n​floating-pointnumbers(asarray)
• Finds and prints the ​min​ and the ​max​ number */



function main(n, numArray) {
  var minNum = numArray[0];
  var maxNum = numArray[0];

  for (i = 0; i < n; i++) {
    var theNum = numArray.shift();
    if (theNum > maxNum) {
      maxNum = theNum;
    } else if ( theNum < minNum) {
      minNum
    }
  }
  console.log(minNum);
  console.log(maxNum);
}

main(3,[10,350,50]);