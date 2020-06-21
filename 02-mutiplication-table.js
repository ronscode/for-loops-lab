/* 2. Multiplication Table
Print a ​multiplication table​ of size 10 for given integer ​n​:
▪ Read an integer ​n
▪ Print ​n​'s multiples in the format "​{n} x {i} = {result}​" for each ​i​ in the range [1...10] */

function main(n) {
  var resultTable = ""

  for (j = 1; j < 11; j++) {
    console.log ( n + " x " + j + " = " + (n * j));
  }
  
}

main(2);