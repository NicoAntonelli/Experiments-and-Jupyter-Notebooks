"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
console.log("Hello World");
// Types
var myFirstVar = "Hello World";
var myString = "Hello World";
myString = 22 + "";
var myString2 = "asd";
var myNumber = 30;
var myBool = true || false;
var myVar = "Hello";
myVar = 12;
// Strings
document.writeln(myFirstVar);
document.writeln(myNumber.toString());
// Arrays
var myArray = ["", "", ""];
myArray = [true, 12, "Hola", [], {}];
var stringArray = ["asd1", "asd2", "asd3"];
var numberArray = [1, 2, 3, 4, 5];
var booleanArray = [true, false, false, true];
// Tuples
var strNumTuple;
strNumTuple = ["Hello", 2];
// strNumTuple = ["World", 2, "", 10]; // Don't Work
document.writeln(typeof (strNumTuple));
// Variables
var variable = "Algo";
var scopedVar = "Otra Cosa";
var constante_pi = 3.1415;
// Void, Null, Undefined
var myVoid = void {};
var myUndefined = undefined;
var myNull = null;
// Functions
function getSum(num1, num2) {
    if (typeof (num1) === 'string' && typeof (num2) === 'string') {
        return parseInt(num1 + num2);
    }
    else if (typeof (num1) === 'string' || typeof (num2) === 'string') {
        return "Bad Sum";
    }
    else {
        return num1 + num2;
    }
}
function getName(firstName, lastName) {
    if (lastName == undefined) {
        return "" + firstName;
    }
    else {
        return firstName + " " + lastName;
    }
}
function voidFunc() {
    return;
}
document.write(getName("Nico"));
// Línea en Blanco con HTML
document.write("<br/>");
function showToDo(toDo) {
    console.log(toDo.title + " - " + toDo.text);
}
var myToDo = {
    title: 'Eat Dinner',
    text: 'Lorem'
};
showToDo(myToDo);
// Clases
var User = /** @class */ (function () {
    function User(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    User.prototype.register = function () {
        console.log(this.name + " is Registered Succesfully!");
    };
    User.prototype.getAge = function () {
        return this.age;
    };
    User.prototype.payInvoice = function () {
        console.log(this.name + " Paid Invoice");
    };
    return User;
}());
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(id, name, age, email) {
        var _this = _super.call(this, name, age, email) || this;
        _this.id = id;
        return _this;
    }
    Member.prototype.payInvoice = function () {
        _super.prototype.payInvoice.call(this);
    };
    return Member;
}(User));
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
var others_1 = require("./others");
console.log(others_1.superVar);
