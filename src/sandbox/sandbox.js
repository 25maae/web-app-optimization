import { teachers } from "./teachers";

console.log(teachers);

function showWelcomeMessage() {
    console.log("Welcome to the Sandbox!");
}

showWelcomeMessage();

function sayHi(name) {
    console.log(`Hi, ${name}!`);
}
sayHi("Alice");
sayHi("Bob");
sayHi("Charlie");

export { sayHi };
