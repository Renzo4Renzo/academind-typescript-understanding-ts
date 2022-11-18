enum Profession {
  TEACHER,
  JOURNALIST,
  POLICEMAN,
}

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
  profession: Profession;
} = {
  name: "Maximilian",
  age: 31,
  hobbies: ["Sports", "Cooking"],
  role: [2, "Author"],
  profession: Profession.TEACHER,
};

// person.role.push("admin");
// person.role[1] = 10;
// person.role = [0, "admin", "user"];

console.log(person.role);

let favoriteActivities: any[];
favoriteActivities = ["Sports", 5];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  //   console.log(hobby.toExponential(2)); // !!! ERROR !!!
}

if (person.profession === Profession.TEACHER) {
  console.log("Is teacher...");
}
