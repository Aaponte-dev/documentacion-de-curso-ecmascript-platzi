function user(name, age, country) {
    var name = name || 'Angel';
    var age = age || 25;
    var country = country || 'Vz';
}

user();
user('Angel', 19, 'Es');

function newAdmin(name = 'Angel', age = 25, country = 'Es') {
    console.log(name, age, country);
}

newAdmin();
newAdmin('Raul', 35, 'Co');