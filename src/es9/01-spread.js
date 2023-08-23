const user = {
    userName: 'plastici',
    age: 31,
    country: "VE"
};

const { userName, ...values } = user;
console.log(
    userName,
    values
);
