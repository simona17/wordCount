"use strict";
exports.__esModule = true;
function occurences(str, word) {
    var array;
    array = str.split(" "); //split the string by spaces in a
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if (word === array[i]) {
            count++;
        }
    }
    return count;
}
var str = "olly olly in come free hjh free olly in test";
var arrayWords = str.split(" ");
var newArray = arrayWords.filter(function (value, i, arr) {
    if (arr.indexOf(value) === i) {
        return value;
    }
});
newArray.forEach(function (element) {
    console.log(element + ": " + occurences(str, element));
});
