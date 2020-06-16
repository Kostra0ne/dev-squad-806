// Iteration 1: Names and Input
var hacker1 = "Chuck";
console.log(`The driver's name is ${hacker1}`);
var hacker2 = "Bruce";
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops

var hacker1toUpperCase = "";
for (let i = 0; i < hacker1.length; i++) {
  if (i === hacker1.length - 1) {
    //In order to not add a space at the end of the name we check if it's the last character.
    hacker1toUpperCase += hacker1[i].toUpperCase();
  } else {
    //If not the last character, we add a the character with a space.
    hacker1toUpperCase += hacker1[i].toUpperCase() + " ";
  }
}
console.log(hacker1toUpperCase);

var hacker1toUpperCaseReversed = "";
for (let i = hacker1toUpperCase.length - 1; i >= 0; i--) {
  hacker1toUpperCaseReversed += hacker1toUpperCase[i];
}
console.log(hacker1toUpperCaseReversed);

//Bonus 1

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lorem tellus, rhoncus non orci sed, tempus ultricies turpis. Vestibulum efficitur, velit ut malesuada vulputate, lacus eros suscipit magna, sed facilisis leo diam ut odio. Morbi purus lectus, aliquam in pellentesque id, ullamcorper quis lorem. Nam aliquam neque quis massa ultrices malesuada. Nunc feugiat facilisis consequat. Quisque commodo, enim quis dapibus ornare, libero ipsum dapibus sem, condimentum lobortis justo velit at erat. In maximus dapibus viverra. Pellentesque ut mauris vitae massa lobortis efficitur. Maecenas in lacus id orci malesuada vestibulum. Vestibulum ac malesuada ex. Nulla consectetur pharetra turpis et dignissim. Suspendisse mattis odio eget nisi ultrices aliquet. Morbi ac risus lacus.

Nam commodo fermentum turpis, in mattis ante aliquam vitae. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc arcu est, dignissim non eleifend scelerisque, dignissim at purus. Quisque tempus sem a sapien blandit, at finibus ipsum facilisis. Pellentesque egestas ex sit amet nisl tempus, ut viverra quam fringilla. Curabitur convallis imperdiet magna, a pellentesque orci vestibulum ut. Nunc commodo sed elit sed pretium.

In hac habitasse platea dictumst. Etiam congue eget mi id faucibus. Sed faucibus consectetur justo, vitae tincidunt ex porta ac. Integer vulputate tellus malesuada eros molestie finibus. Mauris urna nibh, tempus id ex non, commodo condimentum orci. Ut rutrum orci risus, eget efficitur libero dignissim a. Aliquam id consectetur justo. Curabitur congue lacus sed lectus consequat eleifend. Suspendisse in semper nulla, eu molestie urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In nec condimentum nibh. Proin lacinia venenatis nunc.`;

//Solution with regex:
console.log(lorem.split(/\s+/g).length);

//Solution with a for loop:

//We start the count at 1 because we consider we have a word when a space is created. Since there are no words
// at the end of a all the paragraphs, there will be no space so we have to take that word into account
var count = 1;
var newLineCount = 0;
for (let i = 0; i < lorem.length; i++) {
  if (lorem[i] === "\n") newLineCount++;
  if (lorem[i] === " ") count++;
}
//The reason for the newLineCount variable is because there are 2 newLine characters between the end of a paragraph
// and the beginning of a paragraph, therefore we create a variable to count the amount of
// new lines, and we devide it by 2 since there are 2 new lines before the start of another word/paragraph.

count += newLineCount / 2;
console.log(count);

//Bonus palindrome doing it the long way:

//In order to check if the word if is a palindrome, we have to get rid of all the characters that are not a letter.
// So we create a variable `parsedPhrase` that will hold only letters.
var phraseToCheck = "Mr Owl, Ate My Metal WorM !";
var parsedPhrase = "";

for (let i = 0; i < phraseToCheck.length; i++) {
  if (
    phraseToCheck[i] !== "," &&
    phraseToCheck[i] !== "!" &&
    phraseToCheck[i] !== " " &&
    phraseToCheck[i] !== "'" &&
    phraseToCheck[i] !== "?"
  ) {
    parsedPhrase += phraseToCheck[i].toLowerCase();
  }
}

var reversedPhrase = "";
for (let i = parsedPhrase.length - 1; i >= 0; i--) {
  reversedPhrase += parsedPhrase[i];
}

if (reversedPhrase === parsedPhrase) {
  console.log("It is a palindrome !");
} else {
  console.log("It is not a palindrome :(");
}

//Solution with regex reverse

//Regex to get rid of all the special characters that are not letters.
// Put them to lowercase, split it into an array in order to reverse the string.
//Join it to transform it back to a string

const parsedPhrase2 = phraseToCheck
  .replace(/\W+/g, "")
  .toLowerCase()
  .split("")
  .reverse()
  .join("");

if (parsedPhrase2 === parsedPhrase) {
  console.log("It is a palindrome !");
} else {
  console.log("It is not a palindrome :(");
}
