const cats = ["Milo", "Otis", "Garfield"];

// Destructive functions
function destructivelyAppendCat(name) {
  cats.push(name); // modifies original
  return cats;
}

function destructivelyPrependCat(name) {
  cats.unshift(name); // modifies original
  return cats;
}

function destructivelyRemoveLastCat() {
  cats.pop(); // modifies original
  return cats;
}

function destructivelyRemoveFirstCat() {
  cats.shift(); // modifies original
  return cats;
}

// 3. Nondestructive functions
function appendCat(name) {
  return [...cats, name]; // returns new array
}

function prependCat(name) {
  return [name, ...cats]; // returns new array
}

function removeLastCat() {
  return cats.slice(0, cats.length - 1); // new array without last
}

function removeFirstCat() {
  return cats.slice(1); // new array without first
}

