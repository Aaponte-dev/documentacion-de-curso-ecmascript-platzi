async function* anotherGenerator() {
    yield await new Promise.resolve(1);
    yield await new Promise.resolve(2);
    yield await new Promise.resolve(3);
}

const other  = anotherGenerator();
console.log(other.next().then( response => console.log(response)));
console.log(other.next().then( response => console.log(response)));
console.log(other.next().then( response => console.log(response)));
console.log('Hello');

async function arrayOfNames(array) {
    for await (const value of array) {
        console.log(value);
    }
}

const names = arrayOfNames(["Angel", "Test", "Vanessa"]);
console.log("After");