import { teachers } from "./teachers";

console.log(teachers);

function showWelcomeMessage() {
    console.log("Welcome to the Sandbox!");
}

showWelcomeMessage();

const sayHi = (name) => `Hi, ${name}!`;

sayHi("Alice");
sayHi("Bob");
sayHi("Charlie");

export { sayHi };

function createGreeting(name, greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

console.log(createGreeting("Alice"));
console.log(createGreeting("Bob", "Good morning"));