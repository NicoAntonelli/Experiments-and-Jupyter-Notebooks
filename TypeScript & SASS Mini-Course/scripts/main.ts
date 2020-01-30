console.log("Hello World");

// Types
var myFirstVar = "Hello World";

var myString = "Hello World";
myString = 22+"";

var myString2: string = "asd";
var myNumber: number = 30;
var myBool: boolean = true || false;

var myVar: any = "Hello";
myVar = 12;

// Strings
document.writeln(myFirstVar);
document.writeln(myNumber.toString());

// Arrays
var myArray: any[] = ["", "", ""];
myArray = [true, 12, "Hola", [], {}];

var stringArray: string[] = ["asd1", "asd2", "asd3"];
var numberArray: number[] = [1, 2, 3, 4, 5];
var booleanArray: boolean[] = [true, false, false, true];

// Tuples
var strNumTuple: [string, number];
strNumTuple = ["Hello", 2];
// strNumTuple = ["World", 2, "", 10]; // Don't Work
document.writeln(typeof(strNumTuple));

// Variables
var variable = "Algo";
let scopedVar = "Otra Cosa";
const constante_pi = 3.1415;

// Void, Null, Undefined
let myVoid: void = void{};
let myUndefined: undefined = undefined;
let myNull: null = null;

// Functions
function getSum(num1: number | string, num2: number | string): number | string {
    if (typeof(num1)==='string' && typeof(num2)==='string') {
        return parseInt(num1+num2);
    } else if (typeof(num1)==='string' || typeof(num2)==='string') {
        return "Bad Sum";
    } else {
        return num1+num2;
    }
}

function getName(firstName: string, lastName?: string): string {
    if (lastName == undefined) {
        return `${firstName}`;
    } else {
        return `${firstName} ${lastName}`;
    }
}

function voidFunc(): void {
    return;
}

document.write(getName("Nico"));

// Línea en Blanco con HTML
document.write("<br/>");

// Interfaces y Objetos
interface IToDo {
    title: string;
    text: string;
}

function showToDo(toDo: IToDo) {
    console.log(`${toDo.title} - ${toDo.text}`);
}

let myToDo: IToDo = {
    title: 'Eat Dinner',
    text: 'Lorem'
}

showToDo(myToDo)

// Clases
class User {
    protected name: string;
    protected age: number;
    protected email: string;

    constructor(name: string, age: number, email: string) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    public register() {
        console.log(`${this.name} is Registered Succesfully!`);
    }

    public getAge() {
        return this.age;
    }

    public payInvoice() {
        console.log(`${this.name} Paid Invoice`);
    }
}

class Member extends User {
    protected id: number;

    constructor(id: number, name: string, age: number, email: string) {
        super(name, age, email);
        this.id = id;
    }

    public payInvoice() {
        super.payInvoice();
    }
}

var person = new User("John", 20, "john@email.com");
var personTwo = new Member(10, "Gordon", 30, "gordon@email.com");
person.register();
document.writeln(person.getAge().toString());
personTwo.payInvoice();

/*
// Export
// export {};
export const name = "Nico";

function greet(name: string): void {
    console.log(`Happy Holidays ${this.name}!`);
}
export {greet as greeting}

// Import
import{name} from './main.ts'
import{greeting} from './main.ts'
import * as base from './otherFile.ts'
console.log(base.otraCosa());
*/

import {superVar} from './others';
console.log(superVar);
