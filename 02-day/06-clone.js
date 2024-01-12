// spread operator (...)
// const array = [1,2,3];
// const array2 = [...array];
// array.push(4);
// console.log(array)
// console.log(array2)

// cloning in objects

// const person = {
//     firstName: "John",
//     lastName:"Doe",
//     age:25,
// };


// const person2 = {...person};


// console.log(person2 === person);


// person.firstName = "James";

// console.log(person);
// console.log(person2);

// shallow copy 

// deep copy ⨯ 

// how to deep copy 







const person1 = {
    firstName: "John",
    gender: "male",
    age: 30,
     address: {
        colony: "Janakpuri colony",
        city: "ambala",
        state: "haryana",
        country: "India",
        pincode: "12345"
     }
}

// shallow copy 
// const person2 = {...person1}; 

// person1.address.streeNumber = 23;

// console.log(person1.address);
// console.log(person2.address);

// deep copy 


// change object to string 
// string to object again

const person2 = JSON.parse(JSON.stringify(person1))
person1.address.streeNumber = 23;
console.log(person1)
console.log(person2)