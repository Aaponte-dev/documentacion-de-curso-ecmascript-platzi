// Crear clase
class User {};
// Instancia de clase
const newUser = new User();

class user {

    greeting() {
        return 'Hello';
    }
}

const plastici = new user();
console.log(plastici.greeting());

otherUser = new user();
console.log(plastici.otherUser());

class user {

    constructor() {
        console.log('Nuevo usuario');
    }

    greeting() {
        return 'Hello';
    }
}

const test = new user();


class user {

    constructor(name) {
        this.name = this.name;
    }

    speck() {
        return 'Hello';
    }

    greeting() {
        return `${this.speck()} ${this.name}`;
    }
}

const test1 = new user('Test');
console.log(test1.greeting());

class user {

        constructor(name,age){
            this.name = name;
            this.age = age;
        }

        speak(){
            return 'Hello';
        }
        greeting(){
            return `${this.speak()} ${this.name}`;
        }
        get uAge(){
            return this.age;
        }
        set uAge(n){
            this.age = n;
        }
}

const dev = new user('Test1', 60);
console.log(
    dev.uAge,
    dev.uAge = 21
);

