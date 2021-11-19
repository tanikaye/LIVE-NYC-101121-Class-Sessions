// function hasTargetSum(array, target) {
//   // iterate through array
//   for (let i=1; i < array.length; i++) {
//     //   inner loop iterates through array
//     const complement = target - array[i]
//     for (let n=0; n < i ; n++ ){
//       //     add outer loop value with inner loop value
//       //     if equal to target, return true
//       if (array[n] === complement){
//         return true
//       }
//     }
//   }
//   // return false if you get through all combinations and never equal target
//   return false
// }
// function hasTargetSum(array, target){
//   // create an objects to keep track of all the seen numbers
//   const seenNumbers = {} // 1 step
//   // iterate over array
//   for (const number of array){
//     // for current number, find complement
//     const complement = target - number // n steps
//     // check if any keys in object are the complement
//     // if so, return true
//     if (seenNumbers[complement]) return true // n steps
//     seenNumbers[number] = true // n steps
//   }
//     // save the current number as a key so we can check later
//   // if reach end, return false
//   return false // 1 step
// }
// Time complexity: 0(n)
function hasTargetSum(array, target){
  const seenNumbers = new Set()
  for (const number of array){
    const complement = target - number
    if (seenNumbers.has(complement)) return true
    seenNumbers.add(number)
  }
  return false
}
// Time complexity: O(n)

/* 
Write the Big O time complexity of your function here
 Time complexity:  O(n**2)
*/

/* 
  Add your pseudocode here
  iterate through array
    inner loop iterates through array
      add outer loop value with inner loop value
      if equal to target, return true
  return false

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 9, 3], 2));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 9, 3], -4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4));


}

module.exports = hasTargetSum;
