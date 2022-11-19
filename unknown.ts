let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";

//Typescript detects an error here, because a "typeof" check is needed
// userName = userInput;

//Typescript doesn't detect an error here because of "typeof"
if (typeof userInput === "string") {
  userName = userInput;
}
