const list = new Set();

list.add('test');
list.add('test1')
    .add('test2');

console.log(list);

list.add('test');
list.add('test2');

console.log(list);