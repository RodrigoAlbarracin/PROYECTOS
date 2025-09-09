//1

function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return i;
    }
  }
  return -1; 
}

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

console.log(findArrayIndex(mainCharacters, "Luke"));       
console.log(findArrayIndex(mainCharacters, "Chewbacca"));  
console.log(findArrayIndex(mainCharacters, "Rey"));       
console.log(findArrayIndex(mainCharacters, "Darth Vader")); 

//2

function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return i;
    }
  }
  return -1; 
}

function removeItem(array, text) {
  const index = findArrayIndex(array, text);
  if (index !== -1) {
    array.splice(index, 1);
  }
  return array;
}

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

console.log(removeItem([...mainCharacters], "Leia"));


console.log(removeItem([...mainCharacters], "Rey"));


console.log(removeItem([...mainCharacters], "Darth Vader"));


console.log(removeItem([...mainCharacters], "Luke"));

