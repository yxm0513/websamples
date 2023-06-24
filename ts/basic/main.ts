//this is a typescript file.

//declaring a String data type.
let someName : string = "rahul";
let someAddress : string = "india";
let someBigParagraph : string = 
     `The Hypertext Transfer Protocol (HTTP) is an application protocol for distribute`
     "Hypertext is structured text that uses logical links (hyperlinks) between nodes";

//you can declare numbers
let skillScoreOfStudent : number = 10;
let totalNumberOfUsers : number = 239999987645;
let userRating : number = 49.23242323;


//you can declare booleans
let isRegisteredUser : boolean = true;
let isPaidUser : boolean = true;


//you can declare arrays
let popularSports : string[] = ["soccer", "basketball", "cricket"];

let someNumberArrays : number[] = [1, 2, 3, 4, 5, 6];

//you can define tuples which are basically array's whose length and value types are known
//declare a tuple type
let x : [ string, number];

//Initialize it
x = [ "hello", 10 ]; //ok

//Initialize it incorrectly
//x = [ 10, "hello"]; //Error

//you can set the type to any and assign any kind of value to the letiable
let iCanStoreAnyValue : any ;
iCanStoreAnyValue = "Aditya";
iCanStoreAnyValue = 3;
iCanStoreAnyValue = ["Something", "someone"];
iCanStoreAnyValue = ["Something", 1, 4, true];

//you can set null or undefined also as values
let iDontHaveAValue = null ;
let iHaveUndefinedValue = undefined ;
let icanOnlyHaveNullAndUndefinedValues : void ;