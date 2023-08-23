const anotherFunction = () => {
    return new Promise((resolve,reject)=> {
        if (false) {
            resolve('Funciona');
        } else {
            reject('Error')
        }
    })
};

anotherFunction()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finally'));