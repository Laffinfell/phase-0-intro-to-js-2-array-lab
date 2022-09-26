// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    // cats.length = 0;
    // cats.push('Milo', 'Otis', 'Garfield');
    cats.push(name);
    cats
}

function destructivelyPrependCat(name){
    // cats.length = 0;
    // cats.push('Milo', 'Otis', 'Garfield');
    cats.unshift(name)
    cats
}

function destructivelyRemoveLastCat(name){
    // cats.length = 0;
    // cats.push('Milo', 'Otis', 'Garfield');
    cats.pop(name)
    cats
}

function destructivelyRemoveFirstCat(name){
    // cats.length = 0;
    // cats.push('Milo', 'Otis', 'Garfield');
    cats.shift(name)
    cats
}

function appendCat(name){
    // cats.length = 0;
    // cats.push('Milo', 'Otis', 'Garfield');
    const allCats = [...cats, name];
    return allCats;
}

function prependCat(name){
    const moreCats = [name, ...cats];
    return moreCats;
}

function removeLastCat(name){
    // cats.length = 0;
    // cats.push('Milo', 'Otis', 'Garfield');
    return (cats.slice(0, 2));
    cats
}
function removeFirstCat(name){

    // cats.length = 0;
    // cats.push('Milo', 'Otis', 'Garfield');
    return (cats.slice(1))
    cats
}