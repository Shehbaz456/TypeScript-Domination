// let a = "shehbaz";
// let b = 12;
// console.log(a);
// function this_me(){
//     console.log(a);
// }

//Basic of datatypes

// Primitive datatypes ( number boolean string );
// Arrays
// tuples
// Enums
// Any, Unknown , void Null undefined never;

// let arr1:[number,string] = [12,"shehbaz"];

// Data type enum

// enum UserRoles{
//     ADMIN="admin",
//     GUEST="guest",
//     SUPER_ADMIN="Super admin"
// }
// enum StatusCodes{
//     ABANDONED="abandoned status code 500",
//     NOTFOUND="Not found status code 404"
// }
// UserRoles.SUPER_ADMIN;
// StatusCodes.NOTFOUND;

// let bb:number;
// bb=12;

// datatype on day is ANY mean typescript OFF;
// let day;

// In unknown you need to define datatype later
// let c:unknown;
// c=12;
// c="shehbaz";

// if(typeof a==="string"){
//     a.toUpperCase();
// }

// Void datatype

// function name2():string {
//     let n="shehbaz";
//     console.log(n);
//     return n;
// }

// let g=null  // datatype ANY
// let f:null;  // datatype NULL
// f=22; error becouse data is not null
// let s: string | null;  // datatype String or null

// datatype Never;

// function abcd():never {
//     console.log("home");
//     while (true ) { }
// }
// abcd();
// console.log("this");

// ---------------------------------------------------------------------

// Type Interface - Auto detact datatype
// understand type inference
// Type annotations

// Interface - Auto detact datatype
// let a2 ="12";

// type Annotation - means define datatype in variable
// let a3:number | string = 22;
// a3="shehbaz"  // allowed

// function sonam(a3:number):void{
//     console.log("me");
// }

// ---------------------------------------------------------------------

// Interfaces and Type Aliases
// Defining interfaces
// Using interfaces to define object shapes
// Extending interfaces

// interface User{
//     name:string;
//     email:string;
//     password:string;
//     gender ?: string;  // ? make optional - gender
// }

// function getUsers(obj:User) {
//     console.log(obj);
// }

// getUsers({name:"shehbaz",email:"hi@gmail.com",password:"123456"});

// interface Admin extends User{
//     admin:boolean;
// }

// function Admins(obj:Admin) {
//     obj.admin=true;
// }

// Type aliases
// Intersection types

// type value= string | number | null;
// let ac:value;
// ac="sibra";
// function sonam1(obj:value):void{
//     console.log("sona");
// }
// sonam1("sss");

// // Intersection types

// type Users = {
//     name:string,
//     email:string,
// }

// type Admin = Users & {
//     getDatails(user:string): void;
// }

// function abcc(a:Admin) {
//     a.getDatails
// }

// in Interface mai marge hota hai properties ka
// in type they are not marge;

// type abcd=number;
// type abcd=string;

// class Device{
//     name="lg";
//     price=12000;
//     category="digital";
// }

// let d1=new Device();
// let d2=new Device();

// --------------------------------------------------------------------------

// --------------------  Classes and Objects   ------------------------------

// class BottolMaker{
//     constructor( public brand:string, public material:string, public price:number){}
// }
// let b1 = new BottolMaker("milton","metal",2000);

// ---------- 01 Public Private Protacted -----------------

// Note private can change becouse calling with same function.
// but not inherated by another class

// class BartainMaker {
//   constructor(private name: string, protected material: string) {}
//   changename() {
//     this.name = "shehbaz";
//   }
// }

// let b3 = new BartainMaker("milton", "metal");
// b3.changename();

// ------------------------------------------

// Constructors
// Access modifiers (public, private, protected) // Readonly properties
// Optional properties // Parameter properties
// Getters and setters
// Static members
// Abstract classes and methods

// Note - protacted can use only main class or inherated sub_clases

// class BottleMaker {
//     private student_name: string = "Shehbaz";
//     public readonly program_enrol: string = "BCA";
//   protected college_name: string = "Technia institute of Advance studies";
//   constructor(public name: string) {}
// }

// class MetalBottleMaker extends BottleMaker {
//   constructor(name: string) {
//     super(name);
//   }
//   getValue() {
//     console.log(this.name, this.program_enrol);
//     console.log(this.college_name);
//     // console.log(this.student_name);  // not access becouse variable is private.
//   }
// }
// let b1 = new MetalBottleMaker("Chilton");
// b1.getValue();

// class User {
//   constructor(public name:string,public age:number){}
//   get myname(){
//     return this.name;
//   }
//   set setmyname(value:string){ this.name=value }
// }
// let u1=new User("shehbaz",22);
// console.log(u1.myname);
// console.log(u1);
// u1.setmyname="Sona";
// console.log(u1);

// ------------------------ static --------------------------
// note: with static we don't need to create instanse

// class sona{
//   static version=22;
//   static getRandomnumber(){
//     return Math.random();
//   }
// }

// functions
// function types
// Optional and default parameter;
// Rest paramenter
// Overloads 

// function student(
//   name: string,
//   age: number,
//   cb: (sub_name: string) => void,
//   gender?: string,
//   result: string = "cannot_be_disclosed"
// ) {
//   cb("Khan");
//   console.log(name, age, gender, result);
// }
// student("Sonam", 22, (arg: string) => console.log(arg), "male");

//-------------- Rest operator (...) ----------------------------

// function friends(...arr:string[]) {
//   console.log(arr[0]);
//   console.log(arr);
// }
// friends("sona","mona","kalu","moti","firoz","Akib","Adnan","Muskan","sibra","sarfraz");


// // Function overloading: same name but different parameters
// function hello(a: string): void;
// function hello(a: string, b: number): number;

// // Implementation for the function
// function hello(a: string, b?: number): void | number {
//   if (b === undefined) {
//     console.log(`String: ${a}`);
//   } else {
//     console.log(`String: ${a}, Number: ${b}`);
//     return b;
//   }
// }

// // Calling the overloaded function
// hello("hello");        // Logs: String: hello
// hello("hello", 22);    // Logs: String: hello, Number: 22



// Generics
// Generics function
// Generics interface
// Generics classes

// function log<T>(val:T){
//   console.log(val);
// }
// log<Number>(12);
// log("shehbaz ok");


// // interface
// interface Halua<T>{
//   name:string;
//   age:number;
//   key:T
// }

// function abccc(obj:Halua<string>) {
//   console.log(obj);
// }
// abccc({name:"shehbaz",age:22,key:"sonam"});


class BottleMaker<T>{
  constructor(public key:T){};
}
let b1 = new BottleMaker("Sonam")
let b2 = new BottleMaker("Sonam")
console.log(b1,b2);

// Mondules
// exporting and importing module 
// Default module 

