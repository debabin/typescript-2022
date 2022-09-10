function greet(): string;
function greet(person: string): string;
function greet(persons: string[]): string[];
function greet(...[person]: any) {
  if (!person) return "Hello";

  if (typeof person === "string") {
    return `Hello, ${person}!`;
  }

  if (Array.isArray(person)) {
    return person.map((name) => `Hello, ${name}!`);
  }

  throw new Error("Unable to greet");
}

greet();
greet("Dima");
greet(["Dima", "Vova", "Sasha"]);
