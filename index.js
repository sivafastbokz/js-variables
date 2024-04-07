// hoisting  Declaring a variable anywhere in the code is equivalent to declaring it at the top
// The var statement declares function-scoped or globally-scoped variables, optionally initializing each to a value.
example = 'something'
var example;
console.log(example)
// declaration
// var a;
// initialization 
// a = 10;
// declaration is the act of creating a variable, 
// while initialization is the act of assigning an initial value to that variable.

// hoisting
console.log(b) //undefiend
var b = 10  //var variable is hoisted in the global scope
console.log(b) //10
//the variables are initially undefined until they are assigned a value.

var xx = 20
var xx = 25
console.log(xx)
// let zz =20
// let zz =25
// console.log(zz)
// const yy =20
// const yy = 25
// console.log(yy)
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

// console.log(b2); // ReferenceError: Cannot access 'b' before initialization
let b2 = 10;
console.log(b2); // Outputs: 10

const c = 15;
// c = 20; // Error: Assignment to constant variable

// console.log(rrr)
// const rrr = 35
// rrr=45
// console.log(rrr)

// console.log(b)
// let a = 10
// var b =100

// let a;
// a = 10;
// console.log(a)
// const b;   //const declaration must be initialized
// b=12
// console.log(b)

//always put the declaration and initialization to the top

let ee = 10
{
  let ee = 20
  console.log(ee)
}
console.log(ee)  //this called shadowing you can shadow  let with or const with const but u cannot shadow with let with
//var or const with var

//this called lexical scope one in another
const aa = 20
{
  const aa = 22
  {
    const aa = 23
    console.log(aa)
  }
}