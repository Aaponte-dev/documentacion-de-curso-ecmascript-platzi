function* iterate(array) {
    for (let value of array) {
        yield value;
    }
}

const it = iterate(['test', 'test1', 'test2', 'test3']);
console.log(iterate.next().value);
console.log(iterate.next().value);
console.log(iterate.next().value);
console.log(iterate.next().value);
console.log(iterate.next().value);