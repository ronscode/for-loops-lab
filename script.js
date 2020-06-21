/* Zig Zag Sum
Write a function to calculate the ​zig-zag sum​ for given numbers: • Receives a number ​n​ and ​n​ integers (as array)
▪ For every ​odd​ line ​add​ the number to the result
▪ For every ​even​ line ​subtract​ the number from the result */

function main(n, arrayN) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    const number = arrayN[i];
    if ( i % 2 === 0) {
      sum += number;
    } else {
      sum -= number;
    }
  }

  console.log(sum);

}

main(3, [10,20, 5]);