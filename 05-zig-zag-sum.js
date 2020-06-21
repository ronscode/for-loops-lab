/* Zig Zag Sum
Write a function to calculate the ​zig-zag sum​ for given numbers: • Receives a number ​n​ and ​n​ integers (as array)
▪ For every ​odd​ line ​add​ the number to the result
▪ For every ​even​ line ​subtract​ the number from the result */

// function main(n, nArray) {

// }

// function ZigZagMatrix(n) {
//   this.height = n;
//   this.width = n;

//   this.mtx = [];
//   for (var i = 0; i < n; i++) 
//       this.mtx[i] = [];

//   var i=1, j=1;
//   for (var e = 0; e < n*n; e++) {
//       this.mtx[i-1][j-1] = e;
//       if ((i + j) % 2 == 0) {
//           // Even stripes
//           if (j < n) j ++;
//           else       i += 2;
//           if (i > 1) i --;
//       } else {
//           // Odd stripes
//           if (i < n) i ++;
//           else       j += 2;
//           if (j > 1) j --;
//       }
//   }
// }


// var z = new ZigZagMatrix(5);
// console.log(z)

// z = new ZigZagMatrix(4);
// console.log(z)

// // main(2, [10,-20])

// ZigZagMatrix(10)

function zigZagMath(n, arrayN) {
	let sum = 0;
	for (let i = 0; i < n; i++) {
		const number = arrayN[i];
		if (i % 2 === 0) {
			sum += number;
		} else {
			sum -= number;
		}
	}
	console.log(sum);
}

zigZagMath(3, [10,20,5]);


function zigZagReduce(n, arrayN) {
	var theAnswer = arrayN.reduce((acc, curr, i) => {
		if (i % 2 === 0) {
			return (acc += curr);
		} else {
			return (acc -= curr);
		}
  }, 0);
  console.log(theAnswer);
}

zigZagReduce(3, [10,20,5]);