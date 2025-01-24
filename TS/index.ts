// let var1: number = 1;
// var1 = 30;

// function adds(a: number, b: number): number {
//     return a + b;
// }

// let x = adds(34, 76);
// console.log(x);





// #BASIC TYPES

let num = 1234_564_443;
let num1: bigint = 12345676543234543433432n;
console.log(num);
console.log(num1);
let character: string = "Krishna Radha";
const isAvailable: boolean = true;

let val: undefined = undefined;
// val = null;
let user;
console.log(user);
let val2: null = null;
// val2 = undefined;

let obj: { name: string, age: number } = {
    name: 'xyz',
    age: 34
}
obj = { ...obj, age: 324324 };
console.log(obj);

let object: object = {
    name: 'xyz',
    age: 34
}
object = { ...object, phone: 784387483 };
console.log(object);

// any type
let numValue: any;
numValue = 1;
numValue = "kd";

function testAnyType(val: any) {
    console.log(val);
}

// Arrays
let numArray: number[] = [1, 234, 4545, 344];
let charArray: string[] = ['1', '234', '4545', '344'];
// charArray.forEach(val => val.includes('jncdj'));
numArray.forEach(val => val.toExponential());


// Tupple type
let valArray: [number, string] = [1, "kf"]
console.log(valArray);
let coordinates3D: [number, number, number, null] = [2, 33, 23, null];

let response: [number, string] = [200, "Success"]; //http r/s
response.push(0); // drawback of tupple in TS
console.log('response ', response); //flaw

// enum
enum Color {
    RED,
    WHITE,
    GREEN
}
console.log(Color);

let color: Color = Color.RED;
console.log(color);

// const small = 1;
// const medium = 2;
// const large = 3;
// let size = medium;

// enum Size {
//     Small, Medium, Large
// }

const enum Size {
    Small, Medium, Large
}
let size: Size = Size.Large;
console.log(size);

// unknown type (Any variable whose value is not decided)
let notSure: unknown = 'a';
if (typeof (notSure) === 'number') {
    notSure.toFixed(2);
} else if (typeof (notSure) === 'string') {
    notSure.length;
}


// never type (It doesn't return any value, work in endless loop. Used in throwing errors & infinite loop )
function throwErr(message: string): never {
    throw new Error(message);
}
// throwErr("It will continously occur.");

function infiniteLoop(): never {
    while (true) {
        console.log(232);
    }
}
// infiniteLoop();

// Void Type (It doesn't return any value, type)
function voidFun(msg: string): void {
    console.log(msg)
    return undefined;
}
voidFun("void function");


// Type inference (Whenever TS not sure what type we have given in that case it consider the initialized value type) & type assertions (type assertion is a way to tell the compiler, "I know more about the type of this value than you do." It doesn't change the actual type of the value at runtime but tells TypeScript to treat it as a specific type.)
let someValue: any = "342 43fvf";
let strLength: number = (someValue as string).length;
console.log(strLength);

// union type (Ek value ki ek jyada value hogi)
let id: string | number;
id = "kd"; id = 23;
console.log(id);

function printUniqueId(id: string | number) {
    console.log(`Your unique id is: ${id}`);
}
printUniqueId(34);

//Type narrowing (Type narrowing in TypeScript is the process of refining the type of a value based on checks performed in your code.)
function narrowingFun(id: string | number) {
    if (typeof id === 'string') {
        console.log(`Id is string: ${id}`);
    } else {

    }
}



// INTERFACE
//  (
// Describe Object Structure: Define properties and their types.
// Optional Properties: Use ? to make a property optional.
// Read-Only Properties: Use readonly to prevent modification.
// Function Types: Define the shape of a function.
// Extendable: Use extends to create complex interfaces.
// provide type safety (bar bar kon type dete rahenga while reusing)
// )

// 1. Basic Interface
interface Person {
    name: string;
    age: number;
}
// Here Person act as a data type to person.
const person: Person = {
    name: "Alice",
    age: 30,
};

// 2. Optional Properties
interface Car {
    brand: string;
    model?: string;
}
const myCar: Car = {
    brand: "Toyota",
}

// 3. Read-Only Properties
interface Book {
    readonly title: string;
    author: string;
}

// DIRECT ASSIGNMENT (: Book) Ensures type checking and all prop should exist
const myBook: Book = {
    title: "Krunal",
    author: "dwfrw"
};
// TYPE ASSERTION (as Book) Skips type checking; trusts the developer.
// const myBook = { 
//     author: "dwfrw"
// } as Book;
console.log(myBook.author);

// 4. Function Types
interface Great {
    (name: string): string // It is a function
}
const bolNa: Great = (name) => `Tera naam ${name}`;
console.log(bolNa('Radha-Krishna'));

// 5. Extending Interfaces
interface Animal5 {
    name: string;
}
interface Dog5 extends Animal5 {
    breed: string;
}
const myDog: Dog5 = {
    name: "Buddy",
    breed: "Golden"
}

// 6. Using Interfaces with Classes
interface Shape6 {
    area(): number;
}
class Circle implements Shape6 {
    constructor(public radius: number) { }
    area() {
        return Math.PI * this.radius ** 2;
    }
}
const circle = new Circle(5);
console.log(circle.area());



// TYPE ALIAS (A type alias in TypeScript is a way to give a custom name to a type. It makes your code more readable and reusable. You define it using the type keyword.)
// 1. Basic Example
type User = {
    name: string;
    age: number
}
const user1: User = {
    name: "Krishna",
    age: 34
}

// 2. Union Types
type ID = string | number;
let userIds: ID = "deew";
userIds = 34;

// 3. Intersection Types (You can use type aliases to create intersection types, combining multiple types into one.)
type TV = {
    screen: string;
}
type feature = TV & {
    dolby: string;
}
const myTV: feature = {
    screen: "OLED",
    dolby: "yes"
}

// 4. function type (Type aliases can define the structure of a function.)
// Add defines a function that takes two numbers and returns a number.
type Add = (num1: number, num2: number) => number;
const addNumbers: Add = (n1, n2) => n1 * n2;
console.log(addNumbers(34, 33));

// 5. array types
type StringArr = string[];
const names: StringArr = ['dsd', 'dscsf'];



// OPTIONAL FIELDS (optional fields are properties in an object that may or may not be present. Defined using a ? after the property name in the type or interface.)
interface User2 {
    name: string;
    age?: number
}
const usr1: User2 = {
    name: "def"
}



// Functions
// #Key Features of Functions in TypeScript
// 1. Type Annotations: You can specify the types of parameters and the return value.
// 2. Optional and Default Parameters: Make parameters optional or provide default values.
// 3. Rest Parameters: Handle multiple arguments as an array.
// 4. Function Overloading: Define multiple signatures for a single function.
// 5. Arrow Functions: Write shorter syntax for functions.

// 1. Basic Function with Type Annotations
function add(a: number, b: number) {
    return a + b;
}
console.log(add(43, 43));

// 2. Optional Parameters
function greet(name: string, age?: number): string {
    return age ? `Hello ${name} your age is ${age}` : `Hello ${name}`;
}
console.log(greet("Krishna"));
console.log(greet("Radha", 100));

// 3. Default Parameters
function multiply(a: number, b: number = 1): number {
    return a * b;
}
console.log(multiply(23));
console.log(multiply(32, 23));

// 4. Rest Parameters (Use ... to accept multiple arguments.)
function sum(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(23, 324, 3424, 453));

// 5. Arrow Function
const square = (x: number): number => {
    return x * x;
}
console.log(square(45));



// 5. FUNCTION OVERLOADING
// Function overloading allows you to define multiple ways (signatures) to call the same function. Each "way" specifies:
// The number of arguments.
// The types of arguments.
// The return type.
// Step 1: Define overload signatures
function overloading(a1: number, a2: number): number;
function overloading(a1: string, a2: string): string;
// Step 2: Provide a single implementation
function overloading(a1: any, a2: any): any {
    return a1 + a2;
}
console.log(overloading(1, 2));       // Output: 3
console.log(overloading("Hello, ", "World!")); // Output: Hello, World!



// HIGHER-ORDER FUNCTIONS
// 1]
function operate(a: number, b: number, operation: (x: number, y: number) => number): number {
    return operation(a, b);
}
const res = operate(34, 33, (e, n) => e + n);

// 2]
// // Step 1: Higher-Order Function
// function processNumbers(numbers, operation) {
//     const result = [];
//     for (let number of numbers) {
//         result.push(operation(number)); // Step 3: Apply the operation
//     }
//     return result; // Step 4: Return the result
// }
// // Step 2: Callback Functions
// function double(num) {
//     return num * 2; // Doubles the number
// }
// function square1(num) {
//     return num * num; // Squares the number
// }
// // Step 5: Use Higher-Order Function
// const numbers = [1, 2, 3, 4];
// const doubledNumbers = processNumbers(numbers, double); // Pass 'double' as the recipe
// console.log(doubledNumbers); // Output: [2, 4, 6, 8]
// const squaredNumbers = processNumbers(numbers, square1); // Pass 'square' as the recipe
// console.log(squaredNumbers); // Output: [1, 4, 9, 16]



// CLASSES
// 1. Defining Classes and Constructors (A class is a blueprint for creating objects. In TypeScript, classes can have properties and methods, and the constructor method initializes class properties.)

class Akhadas {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    greet(): void {
        console.log(`Hello ${this.name}`);
    }
}
const akhadas = new Akhadas('Juna');
akhadas.greet();

// 2. Access Modifiers (public, private, protected)
class Employee {
    public name: string;
    private salary: number;
    constructor(name: string, salary: number) {
        this.name = name;
        this.salary = salary;
    }
    displaySalary(): void {
        console.log(`Salary is ${this.salary}`);
    }
}
const employee = new Employee("Kd", 56999);
// console.log("Le salary:- "+employee.salary);
employee.displaySalary();

// 3. Readonly Properties (readonly properties can only be set during initialization or in the constructor.)
class Cars {
    readonly brandd: string;
    constructor(brandd: string) {
        this.brandd = brandd;
    }
}
const car = new Cars("Maruti");
console.log(car.brandd);
// car.brandd = 're';

// 4. Getters and Setters (Getters and setters allow you to control access to a class property.)
class Rectangle {
    private width: number;
    private height: number;
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
    get area(): number {
        return this.width * this.height;
    }
    // A 'set' accessor must have exactly one parameter.
    set widthh(value: number) {
        if (value > 0) {
            this.width = value;
        } else {
            console.log("Width must be positive!");
        }
    }
}
const rect = new Rectangle(23, 54);
console.log(rect.area);
rect.widthh = 34;

// 5. Static Members (static properties and methods belong to the class itself, not to any object instance.)
class MathUtils {
    static PI = 3.14;

    static calculateCircleArea(radius: number): number {
        return MathUtils.PI * radius * radius;
    }
}
console.log(MathUtils.PI); // Output: 3.14
console.log(MathUtils.calculateCircleArea(5)); // Output: 78.5

// 6. Abstract Classes (Abstract classes define methods that must be implemented in derived classes. They cannot be instantiated directly.)
// base class
abstract class Shape {
    abstract calculateArea(): number;
    // concreate method
    display(): void {
        console.log("This is a shape");
    }
}
// derived class
class Circlee extends Shape {
    radius: number;
    constructor(radius: number) {
        super();
        this.radius = radius;
    }
    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}
const circlee = new Circlee(3);
console.log(circlee.calculateArea()); // Output: 28.274333882308138



// OOPS in TS
// 1. Encapsulation (Encapsulation is the bundling of data (properties) and methods (functions) within a class and restricting access to them using access modifiers.)
class BankAccount {
    private balance: number; // Only accessible within the class
    constructor(initialBalance: number) {
        this.balance = initialBalance;
    }
    public deposit(amount: number): void {
        this.balance += amount;
    }
    public getBalance(): number {
        return this.balance;
    }
}
const account = new BankAccount(1000);
account.deposit(500);
console.log(account.getBalance()); // 1500

// Significance:
// - Protects data from unauthorized access.
// - Ensures controlled interaction with class properties via getter and setter methods.


// 2. Inheritance (Inheritance allows a class (child) to inherit properties and methods from another class (parent).)
class Animal {
    protected sound: string;
    constructor(sound: string) {
        this.sound = sound;
    }
    public makeSound(): void {
        console.log(this.sound);
    }
}
class Dog extends Animal {
    constructor(nickname: string) {
        super(nickname); // Calls the parent class constructor
    }
    // public makeSound(): void {
    //     console.log("kd");
    // }
}
const dog = new Dog("remo");
dog.makeSound(); // remo
const dog2 = new Dog("remo");
console.log(dog == dog2); // false
console.log(`${typeof dog} and ${typeof dog2}`);
console.log(typeof dog == typeof dog2); // true

// Significance:
// - Promotes code reuse by enabling shared functionality between related classes.

// 3. Abstraction (Abstraction hides implementation details and exposes only the essential features of an object.)
abstract class Shape2 {
    abstract calculateArea(): number; // Abstract method with no implementation
}
class Circle2 extends Shape2 {
    constructor(private radius: number) {
        super();
    }
    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}
const circle2 = new Circle2(5);
console.log(circle2.calculateArea()); // 78.53981633974483

// 4. Polymorphism (Polymorphism allows objects to take on multiple forms, typically achieved via method overriding.)
// TypeScript supports method overriding but not method overloading
class Vehicle4 {
    // default public access modifier
    move(): void {
        console.log('parent class move method');
    }
}
class Car4 extends Vehicle4 {
    move(): void {
        console.log('child class move method');
    }
}
// myVehicle is declared as a reference of type Vehicle4 (the parent class)
const myVehicle: Vehicle4 = new Car4();
// At runtime, the actual object type (Car4) determines which move() method is executed, not the reference type (Vehicle4)

// ** This behavior aligns with the Liskov Substitution Principle in OOP:
// => You can substitute an object of a derived class (Car4) wherever an object of the base class (Vehicle4) is expected.

myVehicle.move();

// # Summary for Interviews:
// Encapsulation: Protect and control access to data.
// Abstraction: Simplify usage by exposing only necessary details.
// Inheritance: Reuse code across related classes.
// Polymorphism: Achieve dynamic behavior based on object types.
// Access Modifiers: Govern access levels for properties and methods




// GENERICS 
// Generics in TypeScript allow us to define reusable and flexible components that work with different data types while maintaining type safety. They help avoid repetitive code and ensure type correctness during development.

// 1] Generic Function
// Generic function to return the same type as the input
function identity<T>(value: T): T {
    // T is a type parameter that can be replaced with any type when the function is called
    return value;
}
const numm = identity<number>(34); // T is replaced with number
const str = identity<string>("javascript");
// Why use generics here?
// To make the identity function flexible so it can work with any type (number, string, etc.), ensuring type safety.

// 2] Generics with Arrays
function getFirstElement<T>(arr: T[]): T {
    return arr[0];
}
const firstName = getFirstElement<number>([23, 434, 23, 352]);
const firstStr = getFirstElement<string>(['dd', 'ded', 'ded']);

// 3] Generic Class
// Generic class to store and retrieve content of any type
class Box<T> {
    private _content: T;
    constructor(content: T) {
        this._content = content;
    }
    getContent(): T {
        return this._content;
    }
}
const box_1 = new Box<number>(232);
console.log(box_1.getContent());
const box_2 = new Box<string>("string");
console.log(box_2.getContent());
// Why use generics here?
// To allow the Box class to store content of any type without creating separate classes for different types.

// 4] Generic Interface
interface keyPair<k, v> {
    key: k;
    value: v;
}
// keyPair Specifies the type of the variable
const numberStringPair: keyPair<number, string> = {
    key: 1,
    value: "One"
}

// 5] Generics with Constraints
// Generic function with a constraint to accept only types with a length property (for this case)
function logLength<T extends { length: number }>(value: T): void {
    console.log(value.length);
}
logLength([23, 34, 45]); // Works: array has a length property
logLength("dssfd"); // Works: string has a length property
// logLength(123); // Error: number does not have a length property
// Why use constraints here?
// To restrict the generic type T to only those types that have a length property, ensuring the function operates correctly.




// LITERAL TYPES (It allow us to specify exact values a variable can hold, we can define more precise types than general data types like string, number, or boolean.)

// Types of Literal Types

// 1] String Literal Types (Allows defining variables that can hold specific string values.)
type Direction = "up" | "down" | "left" | "right";
let move: Direction;
move = "up"; // ✅ Valid
move = "down"; // ✅ Valid
// move = "forward"; // ❌ Error: Type '"forward"' is not assignable to type 'Direction'.

// 2] Numeric Literal Types
type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;
let roll: DiceRoll;
roll = 3; // ✅ Valid
// roll = 7; // ❌ Error: Type '7' is not assignable to type 'DiceRoll'.

// 3] Boolean Literal Types
type IsEnabled = true;
let featureToggle: IsEnabled;
featureToggle = true; // ✅ Valid
// featureToggle = false; // ❌ Error: Type 'false' is not assignable to type 'true'.

// Key Use Cases in Interviews
// a] Function Parameters
function setAlignment(alignment: "left" | "center" | "right"): void {
    console.log(`Alignment set to ${alignment}`);
}
setAlignment("center");
// setAlignment("re");

// b] Discriminated Unions
// Literal types work well in combination with unions and switch statements, especially in scenarios like handling API responses or states.
type Shapes = { type: 'circle'; radius: number } | { type: 'rectangle'; width: number; height: number };

function calculateArea(shape: Shapes): number {
    switch (shape.type) {
        case 'circle':
            return Math.PI * shape.radius ** 2;
        case 'rectangle':
            return shape.width * shape.height;
        default:
            throw new Error("Invalid shape");
    }
}
const circleArea = calculateArea({ type: 'circle', radius: 34 });

// Questions & Ans on it
// q1) What are literal types, and why are they useful?
// => Literal types restrict a variable to specific values, improving type safety & error detection at compile time.

// q2) How can you use literal types to validate function parameters?
// => By defining function parameters as a union of literal types, you can ensure the function accepts only valid values.

// q3) What is a discriminated union, and how are literal types related?
// => A discriminated union uses literal types to differentiate between objects in a union, making type narrowing easier with switch or if statements.