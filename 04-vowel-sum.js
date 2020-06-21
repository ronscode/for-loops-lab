/* 4.
Vowel Sum
Write a function to ​sum n vowels​, using the weights below:
▪ Receives:
▪ Integer ​n​: the count of characters
▪ n characters​ (as array)
▪ For each vowel add its weight to the sum */

function main(n, theLetters) {

  var theSum = 0;

  for (i = 0; i < n; i++) {
    var aLetter = theLetters.shift().toLowerCase();
    console.log(aLetter)
    if (aLetter === "a") {
      theSum += 1;
    } else if (aLetter === "e") {
      theSum += 2;
    } else if (aLetter === "i") {
      theSum += 3;
    } else if (aLetter === "o") {
      theSum += 4;
    } else if (aLetter === "u") {
      theSum += 5;
    }
  }
  console.log(theSum);
}

main(3, ["i","x","u"]);
main(6, ["i","x","u", "a", "o", "e"])