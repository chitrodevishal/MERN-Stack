// Here we create a class
class person {
  name: string;
  age: number;
  gender: string;

  constructor(n1: string, n2: number, n3: string) {
    this.name = n1;
    this.age = n2;
    this.gender = n3;
  }
  greet(): void {
    console.log(`${this.name}`);
  }
}
// This is blue print of object
// Here we create an object of class
let person1 = new person("John", 30, "Male");
let person2 = new person("John", 30, "Male");
console.log(person1);
console.log(person2);

person1.greet();

class customer {
  public name: string;
  private age: number;
  protected gender: string;

  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  meet(): number {
    this.age = this.age + 100;
    return this.age;
  }
}

let customer1 = new customer("Vishal", 28, "Male");
console.log(customer1);
console.log(customer1.name);
console.log(customer1.meet());
// console.log(customer1.gender);

class employee extends customer {
  salary: number;

  constructor(salary: number, name: string, age: number, gender: string) {
    super(name, age, gender);
    this.salary = salary;
  }
  meet(): number {
    console.log("Hello world");
    return 100;
  }
}

let employee1 = new employee(50000, "John", 30, "Male");
console.log(employee1);
console.log(employee1.meet());
console.log(employee1.name);

// Generic : Templates
function value(a: number | string | boolean): number | string | boolean {
  return a;
}
// console.log(value(10))
// console.log(value("String"))
// console.log(value(false))

// we want to build this generic
function value1<T>(a: T): T {
  return a;
}
console.log(value1(10));
console.log(value1("String"));
console.log(value1<number>(10));
console.log(value1<string>("String"));
console.log(value1(false));

interface admin<T, U> {
  name: string;
  age: number;
  aadhar: T;
  salary?:U
}

let user: admin<number, string> = {
  name: "John",

  age: 30,

  aadhar: 1234,
};

let user1: admin<string, number> = {
  name: "John",

  age: 30,

  aadhar: "1234",
};
console.log(user)
console.log(user1)