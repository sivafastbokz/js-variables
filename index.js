// hoisting  Declaring a variable anywhere in the code is equivalent to declaring it at the top
// The var statement declares function-scoped or globally-scoped variables, optionally initializing each to a value.
example = 'something'
var example;
console.log(example)
// declaration
var a;
// initialization 
a = 10;
// declaration is the act of creating a variable, 
// while initialization is the act of assigning an initial value to that variable.

// hoisting
console.log(b)
var b = 10
console.log(b)
// Hoisting is a JavaScript behavior that moves variable declarations to the top of their scope, 
// but it doesn't move the initializations, so variables are initially undefined until they are assigned a value.
// This is implicitly understood as:
// var b;
// console.log(b)
// b = 10;
// console.log(b)

var xx = 20
var xx = 25
console.log(xx)
// let zz =20
// let zz =25
// const yy =20
// const yy = 25
// the var declaration's initializer always overrides the previous value
// var declarations cannot be in the same scope as a let, const,
// var a = 1;
// let a = 2; // SyntaxError: Identifier 'a' has already been declared
// // Because var declarations are not scoped to blocks, this also applies to the following case:
// let a = 1;
// {
//   var a = 1; // SyntaxError: Identifier 'a' has already been declared
// }
// It does not apply to the following case, where let is in a child scope of var, not the same scope:
var e = 1;
{
  let e = 2;
  console.log(e)
}
console.log(e)

var x = 5; // Reassignable variable in global scope

if (true) {
  var x = 10; // This reassigns the global 'x' variable
  console.log(x);
}

console.log(x); // Outputs: 10


// The let declaration declares re-assignable, block-scoped local variables, optionally initializing each to a value.
let y = 5; // Block-scoped reassignable variable

if (true) {
  let y = 10; // This creates a new block-scoped 'y' variable
  console.log(y); // Outputs: 10
}

console.log(y); // Outputs: 5 (global 'y' is unchanged)

console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10;
console.log(b); // Outputs: 10

const c = 15;
// c = 20; // Error: Assignment to constant variable
