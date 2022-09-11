class Employee {
  name: string;
  readonly age: number;
  private _salary: number;
  protected readonly id: number = Math.floor(Math.random() * 1000);

  constructor(name: string, age: number, salary: number) {
    this.age = age;
    this.name = name;
    this._salary = salary;
  }

  getSalary = () => {
    return this._salary;
  };
}

class Developer extends Employee {
  constructor(name: string, age: number, salary: number) {
    super(name, age, salary);
  }
}

const developer = new Developer("Anton", 33, 60_000);
developer;
