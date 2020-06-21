/* 7.
Rollercoaster
Write a ​rollercoaster simulator​:
▪ Receives rollercoaster ​capacity,​ ​minimum age required,​ ​number of
people​ on the queue and an ​array that contains the age of each person
▪ If the person’s age is within minimum age required, they will occupy a space on the rollercoaster,
otherwise disregard that person and move on who is the next on queue.
▪ If all capacity is occupied, print "​The rollercoaster departures​"
▪ In another case, print "​Waiting...​" */

function main(capacity, minAge, numInLine, riders ) {
  var validRiders = 0; 
  for (i = 0; i < numInLine; i++) {
    if (riders[i] >= minAge) {
      validRiders++
    }
  }
  if (validRiders >= capacity) {
    console.log("The rollercoaster departs");
  } else {
    console.log("Waiting...")
  }
}

main(2,10,3,[15,12,8])

main(5,11,0,[]);