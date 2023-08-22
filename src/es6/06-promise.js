const anotherFunction = () => {
    return new Promise((resolve,reject)=> {
        if (true) {
            resolve('Funciona');
        } else {
            reject('Error')
        }
    })
};

anotherFunction()
    .then(response => console.log(response))
    .catch(error => console.log(error));