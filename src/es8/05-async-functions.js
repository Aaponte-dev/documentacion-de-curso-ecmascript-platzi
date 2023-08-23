const fnAsync = () => new Promise((resolve,reject) => {
    (true)
    ? setTimeout(() => resolve("Async"), 2000)
    : reject(new Error("Error"));
});

const anotherFn = async () => {
    const sometime = await fnAsync();
    console.log(sometime);
    console.log("Hello");
}

console.log("Before");
anotherFn()
console.log("After");