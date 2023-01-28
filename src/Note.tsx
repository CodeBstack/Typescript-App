import React from 'react';
// let name:string;
// let age: number;
// let isStudent: boolean;
// let hobbies: string[]; // this can only contain an array of strings
// let role: [number, string]; // can only contain 1 number and 1 string
// let personObject: Object; //but this doesn't give explicitly the types

// hobbies = ['good', 'bad', 'cool'];
// role = [5, 'adam'];

// //Instead we call an object like this
// // Type ALIASES
// type Person = {
//   name: string;
//   age: number;
//   sex?: string;
// }

// // all properties declared in the Interface must be added.
// // Unless it is made option like the sex property
// let person: Person = {
//   name: 'Good',
//   age:21,
//   }

//   //Array of Objects
// let lotsOfPeople: Person[];

// // UNION - using to types for a variable
// let newAGe: number | string;
// newAGe = 2;
// newAGe = '2';

// // FUNCTIONS
// function printName1(name: string) {
//   console.log(name);
// }

// printName1('Samuel');

// let printName: Function; // improper way

// let printNameProper: (name: string) => void; // this is with the return type - it can have return type
// let printNameProper2: (name: string) => never; // when we don't know the return type. 

// // ANY
// let name2: any; //not recommended
// let name3: unknown; // this instead

// interface Person {
//     name: string;
//     age: number;
//     sex?: string;
//  }
  
//  interface Guy extends Person{
//    profession: string;
//  }



// type X = {
//   a: string;
//   b: number;
// }
//   //bring all the props in X and adding it to Y
// type Y = X & {
//   c: string;
//   d: number;
//   }

// let y: Y = {
//   a: 'df',
//   b: 3,
//   c: 'erd',
//   d:42
//   }

//   //USING TYPE AND INTERFACE TOGETHER
// type XPerson = Person & {
//   a: string;
//   b: number;
// }
  
// interface PersonX extends X {
//   profession:string
// }