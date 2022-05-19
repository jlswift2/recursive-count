function recursiveCount(num = 0) {
  let newNum = num + 1

  if (num < 10) {
    console.log(num)
    recursiveCount(newNum)
  }
}

if (require.main === module) {
  recursiveCount();
}

module.exports = recursiveCount;

// OPTIONAL
// Please add your pseudocode to this file
// And a written explanation of your solution
