// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat() {
    cats.push("Ralph");
}

function destructivelyPrependCat() {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop("Ralph");
}

function destructivelyRemoveFirstCat() {
    cats.shift("Bob");
}

function appendCat() {
    const copyOfCats = [...cats, "Broom"]; return copyOfCats
}

function prependCat() {
    const copyOfCats = ["Arnold", ...cats]; return copyOfCats
}

function removeLastCat() {
    const copyOfPrimeCats = cats.slice(0, cats.length -1); return copyOfPrimeCats
}
function removeFirstCat () {
    const copyOfPrimeCats = cats.slice (1); return copyOfPrimeCats
}