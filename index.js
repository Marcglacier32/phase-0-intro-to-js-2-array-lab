// Write your solution here!

// Initial array as required by the tests
const cats = ["Milo", "Otis", "Garfield"];

// Destructive Methods
function destructivelyAppendCat(name) {
  cats.push(name); // Adds the name to the end of the array
}

function destructivelyPrependCat(name) {
  cats.unshift(name); // Adds the name to the beginning of the array
}

function destructivelyRemoveLastCat() {
  cats.pop(); // Removes the last element of the array
}

function destructivelyRemoveFirstCat() {
  cats.shift(); // Removes the first element of the array
}

// Nondestructive Methods
function appendCat(name) {
  return [...cats, name]; // Returns a new array with name added to the end
}

function prependCat(name) {
  return [name, ...cats]; // Returns a new array with name added to the beginning
}

function removeLastCat() {
  return cats.slice(0, -1); // Returns a new array without the last element
}

function removeFirstCat() {
  return cats.slice(1); // Returns a new array without the first element
}
