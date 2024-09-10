
// // console.log("Hello World")
// // const Name="GDS"
// // let age="20"
// // console.table([Name,age])
// //--------------------------------------------------------------------------
// "use strict"// treal all js code as newer version
// // datatype null is used in case we have no value
// //--------------------------------------------------------------------------
// let a="33"
// console.log(typeof(a));
// // console.log(typeof(a));
// // a=true
// // console.log(typeof(a))
// let b=Number(a);
// console.log(typeof(b))
// a=true;
// b=String(a);
// console.log(typeof(b))
// console.log(b);
// a="33abc"
// b=Number(a)
// console.log(typeof(b))
// console.log(b);
// a="33abc"
// b=Boolean(a)
// console.log(typeof(b))
// console.log(b);
// a=String(b);
// console.log(typeof(a))
// console.log(a);
// // the = operator in >= or <= converts the different data types into same one during comparision.
// // thats why if we compare null as follow it will give these results:
// /*
// null > 0 False
// null == 0 False
// null >=0 0 True
// */
// /* we can use strict check === to even check if two operands data types are same or not
// example:
// "2"==2 True
// "2"===2 False
// */
// /*---- TYPES OF DATA TYPES------
// 1) Primitive Data Types (Call by Value) THESE ARE STORED IN STACK MEMORY.... When an object is stored in stack memory we work on its
// clone and not the actual object itself.
// 7 types : String,Number,Boolean,Null,undefined,Symbol, BigInt
// 2) Non Primitive Data Types(Call by Reference) THESE ARE STORED IN HEAP MEMORY.... When an object is stored in heap memory we work 
// on its reference
// types : Array,Objects,Functions
// */
// /*
// let myObj ={
//     name:"Gurmehar"
// }
// console.log(myObj.name)
// const myfn =function(){
//  console.log("Hello WOrld");
// }
// myfn();
// */
// // EXAMPLE OF STACK AND HEAP MEMORY
// /*
// let n1="GDS"
// let n2=n1
// n2="Not GDS"
// // Here the value of n1 had no change while only n2 changed because the reference passed to n2 was a copy and not that of n1 itself
// console.log(n1)
// console.log(n2)
// let userOne = {
//     name:"Gds",
//     uid:"22bcs13666"
// }
// console.log(userOne)
// let userTwo=userOne
// console.log("User two",userTwo)
// userTwo.name="Pulkit"
// userTwo.uid="22bcs13678"
// // Here the values in user one change because user two shares the same reference as user one in the heap memory
// console.log("User one after changing values in user two\n",userOne )
// */
// // STRINGS STRINGS STRINGS STRINGS STRINGS STRINGS STRINGS  STRINGS STRINGS STRINGS STRINGS STRINGS STRINGS
// // Declaring strings
// let name="gds"
// let age= new String('20') // this method provides several methods to use on string when checked in console
// console.log(`My name is ${name} and i am ${age} years old`)
// console.log(`${name.length} ${age.length}`)
// // &name="GDS" // this wont work cuz this is a primitive data type... only non primitive can be passed by reference
// //Refer from line 61 for pass by reference and value along with stack and heap memory...
// /* To get more info about different functions of string just declare a string and call the variable
// in console in inspect element on any browser..*/
// // Making use of `whatever ${variable}` is better than " whatever "+ variable cuz it improves readability
// name.toWellFormed()
// console.log(name)
// /*----------------MATH------------
// Js has a powerful math library in built to view the functions simple do 
// Console.log(Math) in console in browser*/
//----------------------------------DATE-----------------------------
// let daate=Date.now();
// console.log(Math.floor(Date.now()/1000));
// let date=new Date();
// console.log(date.toLocaleTimeString());
// let myCreatedDate=new Date(2023,1,23)
// console.log(myCreatedDate.toLocaleDateString());
// //Months start from 0
// let time= Date.now()
// console.log(time)
// console.log(myCreatedDate.toLocaleString('default',{
//    month: "long"
// })) // ctrl + space to check different things toLocaleString can do....
//-----------------ARRAYS------------------------------
//Different ways to declare array
//Arrays in js are always dynamic , which means its size changes automatically when we add new elements,
// let arr=[1,2,3,4,5]
// const ar=["Shivansh","Uzaif","Parth","Ritesh","Jacob"]
// let arr= new Array(1,2,3,4,5)
// declare array in console then print that array to see the available prototype methods..
//Just like vectors in c++ we can simply use push method here for arrays to insert values at end of array and unshift to insert values at start of array.
//pop removes element from end of array while shift removes froms start
// arr.push(5)
// arr.unshift(10)
// console.log(arr)
// There are several great methods for arrays which we can check with console...
// console.log(arr.indexOf(3)) // For elements that dont exist in array this will return -1
// const newarr= arr.join() // This function converts elements of an array into string.
// console.log(newarr)
// console.log(typeof(newarr))
// //---------------SLICE AND SPLICE IN AN ARRAY-------------------------
// console.log("Using slice",arr)
// console.log(arr.slice(1,4))// prints elements from one index to another
// console.log("Using splice",arr)
// console.log(arr.splice(3,2)) /* splice deletes the elements with starting index "3" in this case ,followed by how many elements u want to be deleted
//  and it deletes it from original Array*/
// console.log("Using splice",arr)
// let arr2=new Array(6,7,8,9,10)
//This will push arr2 variable as a whole into arr , making it a multidimensional array
// arr.push(arr2);
// console.log(arr);
//concat method combines two arrays into a single array without changing the original elements of array
// console.log(arr.concat(arr2))
// (...) is spread operator its function is to break elements in an array into indivisual elements. 
// below statement can be like this let new_arr=[1,2,3,4,5,6,7,8,9,10]
// let new_arr= [...arr,...arr2]
//a method to disolve a multidimensional array is using flat method
// let new_arr= arr.flat(Infinity)
// console.log(new_arr)
// let score1= 100
// let score2=200
// let score3=300
// console.log(Array.of(score1,score2,score3))
//------------Objects and Events in Javascript-------------------------
/* Singleton objects means that only a single instance of object exists, that means if we create another object to store data,
then it will simply overwrite the data in the existing object, which means that we cannot store multiple data like details of,
different cars,students etc. The use of singleton is case of settings for an application, for example when u create an application and want
to make changes at one point then those changes in settings apply to whole application due to singleton objects, meaning they share
the same object reference.*/
// Way of making object is using object literals, which stores data in pairs of key and value.
// Objects created through object literals are not singleton, while those created through constructors are always singleton i.e object.create() method
// Symbols are unique data types.
const Mysym=Symbol("Key 1")
// const Object1= new Object() this is a singleton object 
const Object1 = {
    fullname:{
        firstname: "Gurmehardeep",
        lastname: "Singh"
    },
    age: 19,
    [Mysym] : "Key1",
    location: "India",
    Last_Login:["Monday","Friday"]
 }
// console.log(Object1["location"])
// console.log(Object1.Last_Login)
// console.log(Object1[Mysym])
// Object1.name="Gds" //Simply change values using assingment operator
// console.log(Object1.name);
// Object.freeze(Object1) // We can freeze the object to prevent any change in the values, this  will not throw any error even if we try to change it.
// Object1.name="Gurmehar"
// console.log(Object1.name);
// console.log(Object1);
// In js we can treat function as variables
Object1.greeting=function(){
    console.log("Hello");
    
}
Object1.greeting2=function(){
    console.log(`${this.name}`);
    
}
// console.log(Object1.greeting(),Object1.greeting2())
//Combining two objects with assign() method
let obj1={
    1:"a",2:"b"
}
let obj2={
    3:"c",4:"d"
}
//Object.assign(target,sourcce)
// let obj3=Object.assign({},obj1,obj2) //{} acts as the target, rest acts as source,if we dont use {} then obj1 will become the target
//another operator is the one we used with array, the spread operator (...)
let obj3={...obj1,...obj2}
console.log(obj3);
//when dealing with databases we will get arrays of objects so to access keys and values we can simply store them in another array and loop using :
console.log(Object.values(obj3))
console.log(Object.keys(obj3))
// another thing to keep in mind while looping if the key we are looking for doesnt even exist, which can cause crashes so to deal with that simply check
console.log(Object.hasOwnProperty('nameee')); // returns result in boolean
// Like arrays just simply declare an object and call it on console in browser to view its methods.
// Object de-structure and JSON api introduction
/* Lets say we want to use some values in objects multiple times soo instead of typing object1.key again and again we can simply de-struct it lik this:
    const {key:Name of variable} = Object 
*/
const {fullname:Name}= Object1
console.log(Name)
//---------------------- JSON API Intro ---------------------------------------------
/*
API's look like objects without name but their keys are written as strings.
{
  "name":"Gds",
  "age":19
}
  // Array of objects
[
  {},
  {}
]
  we can get an example of api from randomuser.me and use a JSON formatter to understand it
  EXAMPLE OF API
  
  {
    "results": [
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Meeuwis",
                "last": "Snellen"
            },
            "location": {
                "street": {
                    "number": 3881,
                    "name": "Ivoordreef"
                },
                "city": "Vrijhoeve-Capelle",
                "state": "Friesland",
                "country": "Netherlands",
                "postcode": "2074 BM",
                "coordinates": {
                    "latitude": "32.6310",
                    "longitude": "-136.7614"
                },
                "timezone": {
                    "offset": "-10:00",
                    "description": "Hawaii"
                }
            },
            "email": "meeuwis.snellen@example.com",
            "login": {
                "uuid": "9a16ce33-0b58-42c9-8f66-780d418acad4",
                "username": "happygorilla521",
                "password": "zzzzzzzz",
                "salt": "aTvFkVMH",
                "md5": "8dec6a9569d7ddc813c6d0b572a77c6f",
                "sha1": "d902dda4116655ed293b938dc8cee01bcf60ff6d",
                "sha256": "975df4fabb2caf8335ebaef8696f391f65f33e6a1b8744534b7f98f26ce03940"
            },
            "dob": {
                "date": "1974-06-18T04:11:27.404Z",
                "age": 50
            },
            "registered": {
                "date": "2002-07-08T18:01:05.724Z",
                "age": 22
            },
            "phone": "(020) 5676821",
            "cell": "(06) 45963587",
            "id": {
                "name": "BSN",
                "value": "20312251"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/83.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/83.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/83.jpg"
            },
            "nat": "NL"
        }
    ],
    "info": {
        "seed": "ef62a1a2d07a080f",
        "results": 1,
        "page": 1,
        "version": "1.4"
    }
}
    we convert these api to objects before we can use them.
  */
//--------------------------------------------------------------------------------------------------------------------------------------------
//----------------------------- Functions --------------------------------------------------
//function SayMyName (username /* preset value for username with username = "name" and when arguments are sent the value is overwritten*/) {
  /*  if(!username)// if(username===undefined)
    {
        console.log("Please enter a username");
        return
        
    }
    return `${username} Just logged in`
}
function Add_two_numbers(num1,num2) {
    let num3=num1+num2
    console.log(num3);
    return num3
}
SayMyName //Reference to function
console.log(SayMyName()) // Calling the function // returns undefined
console.log(SayMyName("Gurmehardeep Singh"))
Add_two_numbers(3,4) // 7
Add_two_numbers(3,"4")// "34"
Add_two_numbers(3,"a")// "a"
Add_two_numbers(3,null) // 3
Add_two_numbers(3,undefined)// NaN
const sum=Add_two_numbers(6,4)
console.log("Value of sum is ",sum);// 10
*/
// Shopping cart problem, when we dont know how many items are there
function Calculate(...num) { //Yes ... is also the spread operator (rest operator in this case used to group into array)
    let sum=0
    for(let i=0;i<num.length;i++)
    {
        sum+=num[i]
    }
        return sum
}
console.log(`Your total amount is ${Calculate(1,2,3,4,5)}`);
const user ={
    username: "Gds",
    price:1000
}
function HandleObjects(anyobject) {
    return `User ${anyobject.username} has logged in with price of ${anyobject.price}`
}
console.log(HandleObjects(user)); 
/* Another way to pass object
console.log(HandleObjects({
  username: "gds",
  price:1000
  }
  )
  ) */