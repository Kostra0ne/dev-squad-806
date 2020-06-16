// Find the maximum
function maxOfTwoNumbers(a, b) {
  return (a > b) ? a : b;
}

// Finding Longest Word
function findLongestWord(words) {
  var longestLen = 0, longestWord = null;
  if (!words.length) return;

  for (let i = 0; i < words.length; i += 1) {
    if (words[i].length > longestLen) {
      longestWord = words[i];
      longestLen = longestWord.length;
    }
  }
  return longestWord;
}

// Calculating a Sum
function sumArray(numbers) {
  var sum = 0;
  if (!numbers.length) return 0;
  for (let i = 0; i < numbers.length; i += 1) sum += numbers[i];
  return sum;
}

// Calculate the Average
function averageNumbers(numbers) {
  var sum = 0;

  if (!numbers.length) return;
  if (numbers.length === 1) return numbers[0];

  for (let i = 0; i < numbers.length; i++) sum += numbers[i];

  return sum / numbers.length;
}

// Array of Strings
function averageWordLength(words) {
  var sum = 0;
  if (!words.length) return;
  for (let i = 0; i < words.length; i += 1) sum += words[i].length;
  return sum / words.length;
}

// Unique Arrays
function uniquifyArray(words) {
  if (!words.length) return;

  const finalWords = [];

  for (let i = 0; i < words.length; i++) 
    if (finalWords.indexOf(words[i]) === -1) finalWords.push(words[i]);

  return finalWords;
}

// Finding Elements
function doesWordExist(words, needle) {
  if (!words.length) return false;
  return words.includes(needle);
}

// Counting Repetion
function howManyTimes(words, needle) {
  var count = 0;
  if (!words.length) return false;
  for (let i = 0; i < words.length; i++) {
    if (words[i] === needle) count += 1;    
  }
  return count;
}


// Bonus Quest
function greatestProduct(m) {
  var best = null;
  
  for (let i = 0; i < m.length; i++) {
    for (let j = 0; j < m.length; j++) {
      if (j < m.length - 3) {
        const temp = m[i][j] * m[i][j + 1] * m[i][j + 2] * m[i][j + 3];
        if (temp > best) best = temp;
      }
      if (i < m.length - 3) {
        const temp = m[i][j] * m[i + 1][j] * m[i + 2][j] * m[i + 3][j];
        if (temp > best) best = temp;
      }
    }
  }

  return best;
}