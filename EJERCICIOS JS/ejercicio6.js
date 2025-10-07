<<<<<<< HEAD
function swap(array, index1, index2) {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
  return array;
}

const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

console.log(swap([...fantasticFour], 0, 1));

console.log(swap([...fantasticFour], 2, 3));

console.log(swap([...fantasticFour], 1, 3));

=======
function swap(array, index1, index2) {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
  return array;
}

const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

console.log(swap([...fantasticFour], 0, 1));

console.log(swap([...fantasticFour], 2, 3));

console.log(swap([...fantasticFour], 1, 3));

>>>>>>> 50ad6dd55acd89ba8b38166fbc60ae21fd1c7fbb
