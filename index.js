// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    return cats.push(name);
}
function destructivelyPrependCat(name) {
    return cats.unshift(name);
}

function destructivelyRemoveLastCat(name) {
    return cats.pop(name);
}

function destructivelyRemoveFirstCat(name) {
    return cats.shift(name);
}

function appendCat(name) {
    const copyOfCats = [...cats];
    copyOfCats.push(name)
    return copyOfCats
}

function prependCat(name) {
    const copyOfCats = [...cats];
    copyOfCats.unshift(name);
    return copyOfCats
}

function removeLastCat(name) {
    const copyOfCats = [...cats];
    copyOfCats.pop(name);
    return copyOfCats
}

function removeFirstCat(name) {
    const copyOfCats = [...cats];
    copyOfCats.shift(name);
    return copyOfCats
}