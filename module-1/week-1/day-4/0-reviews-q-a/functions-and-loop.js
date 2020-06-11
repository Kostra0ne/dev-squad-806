function createStringOutOfArrayOfChars(array) {
    var string = "";
    for (let i = 0; i < array.length; i += 1) {
        // string += array[i];
        string = string + array[i]; // same as above
    }
    return string;
}



var res = createStringOutOfArrayOfChars(["h", "e", "l", "l", "o"]);

console.log("---->", res)