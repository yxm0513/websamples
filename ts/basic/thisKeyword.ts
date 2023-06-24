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
/*let myName = {
    firstName : 'Rahul',
    lastName : 'Sharma',
    /*calculateFullName(){
        console.log(this);
        return this.firstName + ' ' + this.lastName;
    }

    calculateFullName(){
       
        return ()=>{
            console.log(this);
            return this.firstName + ' ' + this.lastName;

        }
    }
}

let Name = myName.calculateFullName();
Name();*/

//type to this is void change the scope of this
/*let myName = {
    firstName : 'Rahul',
    lastName : 'Sharma',
    calculateFullName(this:void){
        console.log(this);
        return this.firstName + ' ' + this.lastName;
    }
}

let Name = myName.calculateFullName();*/