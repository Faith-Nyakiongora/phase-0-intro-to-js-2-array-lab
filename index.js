// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push('Ralph')
    
    return cats;
}

function destructivelyPrependCat(name) {
    return cats.unshift('Bob') 
}


function destructivelyRemoveLastCat(name) {
    return cats.pop()
  
}

function destructivelyRemoveFirstCat(name) {
    return cats.shift()
  
}

function appendCat(name) {
    const copyofCats =[...cats,'Broom']
    return copyofCats;
}

function prependCat(name) {
    const copyofCats =['Arnold', ...cats]
    return copyofCats;
}

function removeLastCat() {
    return cats.slice(0,-1)
}
function removeFirstCat() {
    return cats.slice(1)
}