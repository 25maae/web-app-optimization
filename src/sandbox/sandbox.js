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
