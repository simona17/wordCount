import countOccurences from "./count";

function occurences(str: string, word: string) {
  let array: string[];
  array = str.split(" "); //split the string by spaces in a
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    if (word === array[i]) {
      count++;
    }
  }
  return count;
}

let str = "olly olly in come free hjh free olly in test";

let arrayWords = str.split(" ");

let newArray= arrayWords.filter((value, i, arr) =>{
  if(arr.indexOf(value) === i ){
    return value
  }
})
newArray.forEach(element => {
  console.log(element + ": " + occurences(str, element));
});
