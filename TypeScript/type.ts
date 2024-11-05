interface User {
    name: string;
    age: number;
}

const user: User = {
    name: "Alice",
    age: 25
};

function getUserInfo(user: User): string {
    return `${user.name} is ${user.age} years old.`;
}

console.log(getUserInfo(user));
