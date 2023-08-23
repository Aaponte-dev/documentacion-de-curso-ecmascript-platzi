// flat
const array = [ 1, 2, 3, [ 2, 4, 5, [ 8, 9, 7 ] ]];
console.log(array.flat(3));

// flat-map
const array2 = [ 1, 2, 3, 4];
console.log(array.flatMap( value => [ value, value * 2 ]));