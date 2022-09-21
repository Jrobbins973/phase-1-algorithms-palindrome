// const reverseStr = (word) => {
//   let newStr = ''
//   for (let i = word.length -1; i > 0; i--); {
//     newStr += word[i]
//   }
//   return newStr
// }

// console.log(reverseStr('cat'))

/* 
  Add your pseudocode here
*/
// take in parameter 'word'
// reverseparameter -- "drow"
// if reverseParam === param then it's a palindrome, otherwise it's not
/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;



function reverseString(str) {
  // Step 1. Use the split() method to return a new array
  let splitString = str.split(""); 
  // ["h", "e", "l", "l", "o"]

  // Step 2. Use the reverse() method to reverse the new created array
  let reverseArray = splitString.reverse(); 
  // ["o", "l", "l", "e", "h"]

  // Step 3. Use the join() method to join all elements of the array into a string
  let joinArray = reverseArray.join(""); 
  // "olleh"
  
  //Step 4. Return the reversed string
  return joinArray; // "olleh"
}

function isPalindrome(word) {
  let reverse = reverseString(word)
  if (reverse === word) {
    return true
  } else {
    return false
  }

}

// console.log(isPalindrome("non"))

