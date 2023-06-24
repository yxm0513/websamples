//usage of this keyword.
/*function hello(thing){
   console.log(this);
   console.log(this + " says hello " + thing);
}*/
/*let hello = (thing)=>{
    console.log(this);
    console.log(this + " says hello " + thing);
 }

hello("world");*/
//lexical binding.
/*let myName = {
    firstName : 'Rahul',
    lastName : 'Sharma',
    /*calculateFullName(){
        console.log(this);
        return this.firstName + ' ' + this.lastName;
    }*/
//calculateFullName:()=>{
// console.log(this);
// return this.firstName + ' ' + this.lastName;
// }
//}*/
//let Name = myName.calculateFullName();
//function inside function
var myName = {
    firstName: 'Rahul',
    lastName: 'Sharma',
    /*calculateFullName(){
        console.log(this);
        return this.firstName + ' ' + this.lastName;
    }*/
    calculateFullName: function () {
        var _this = this;
        return function () {
            console.log(_this);
            return _this.firstName + ' ' + _this.lastName;
        };
    }
};
var Name = myName.calculateFullName();
Name();
