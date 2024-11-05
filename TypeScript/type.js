const users = {
    name: "Alice",
    age: 25
};

function getUserInfoo(user) {
    return `${user.name} is ${user.age} years old.`;
}

console.log(getUserInfoo(users));
