# Ref: TypeScript Docs for JS Developers


 **The main benefit of TypeScript is that it can highlight unexpected behavior in your code, lowering the chance of bugs.**

TS is alternative for JS - superset for JS, that replaces it, doing everything Js could do with extra features, later on TS gets compiled to JS for the browser to understand.
TS comes with many features:
	• Strict types of data
	• Supports modern features of JS (arrow functions, let, const,..etc)
	• Extra features (generic, interfaces, tuples)

Start locally by adding TS compiler, go to your cmd and run the command
		npm install -g typescript

## Compiling TS to JS:
Use the command     tsc "name of your ts file"
This will compile it into a new file with the same as JS.
E.g: tsc sandbox.ts
Will generate a new file in JS named sandbox.js inside the same directory.
As long as you are doing this manually you will have to re-write the command every time you make a change to it, instead you could set watch for your TS file:
       tsc sandbox.ts -w
this will keep watching it for any future changes.

           TS does the type checking before compiling your code into JS

                   Generating the TS config file >>> tsc --init

## Types by Inference الاستنباطـ :
TypeScript knows the JavaScript language and will generate types for you in many cases. For example in creating a variable and assigning it to a particular value, TypeScript will use the value as its type.


You can change a variable value in this case, but not type, like helloWorld var up there, you can re-assign it to another string, and it will work fine, but if you assign it to a number it will cause an error.
## Defining Types:

Let x:number = 2;
This will force x to take only number values, any other values would cause an error.
Now to objects:
Let y:object = {a:'3'}
This will force y to accept only object value.

A bigger step would be to define an Interface that your objects would inherent from and therefore follow the same structure.



Now when we create a user object:


If you tried to add a property that is not the User interface => will cause error
If you tried to add user.name to be a digit => will cause error as it accepts only string as in the object interface defined before!

You can not add or remove properties from the object that ARE NOT in the interface


There are already a small set of primitive types available in JavaScript: boolean, bigint, null, number, string, symbol, object, and undefined, which you can use in an interface. TypeScript extends this list with a few more, such as any (allow anything), unknown (ensure someone using this type declares what the type is), never (it’s not possible that this type could happen), and void (a function which returns undefined or has no return value).

You’ll see that there are two syntaxes for building types: Interfaces and Types. You should prefer interface. Use type when you need specific features.

## Dynamic Type:
Using the keyword "any" almost sends you back to the jungle land of JS, meaning a var that is defined with the type "any" could hold any kind of data at any point of time just like in JS.
E.g: let x:any = 2;  x="";  x= []; x = false; >>>>>all of that would work.

## Composing Types
With TypeScript, you can create complex types by combining simple ones. There are two popular ways to do so: with Unions, and with Generics.
Unions
With a union, you can declare that a type could be one of many types



To learn the type of a variable, use typeof:



## Generics
Generics provide variables to types. A common example is an array. An array without generics could contain anything. An array with generics can describe the values that the array contains.




## Structural Type System
One of TypeScript’s core principles is that type checking focuses on the shape that values have. This is sometimes called “duck typing” or “structural typing”.
In a structural type system, if two objects have the same shape, they are considered to be of the same type.


The point variable is never declared to be a Point type. However, TypeScript compares the shape of point to the shape of Point in the type-check. They have the same shape, so the code passes.

The shape-matching only requires a subset of the object’s fields to match.


There is no difference between how classes and objects conform to shapes:


If the object or class has all the required properties, TypeScript will say they match, regardless of the implementation details.


## Declaring types:
Always use the lower case version of the types not upper case!
E.g: let x: string ; ✔️
        let x:String;  ❌

Interfaces


## Handling the DOM
In TS to interact with the DOM you will be more accurate about what you expect and need to do, this is the point of using TS in general over JS.

We will use the basic syntax as in JS with little addition of what we expect those elements to be

Without these info, it would trigger an error in TS, hence it won't allow you to go further using those variables.
Adding the "as" keyword resolves the issue.
A "!" mark after the const or "?" before using it in other places could solve the issue in some cases.
s
