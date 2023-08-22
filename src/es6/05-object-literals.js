function newUser(user, age, country, uid) {
    return {
        user,
        age,
        country,
        id: uid,
    }
}

console.log(newUser('test', 50, "ARS", 5));