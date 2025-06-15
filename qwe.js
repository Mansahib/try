const person={

    name:"John",
    age:30,
    occupation:"Software Engineer",
    hobbies:["reading","swimming","coding"],
    address:{
        street:"123 Main St",
        city:"Anytown",
        state:"CA",
        zip:"12345"
        }
        
}

let result=person.address?.street?.number ?? "as";
console.log(result);

const users = [
  { name: 'Alice', friends: ['Bob'] },
  undefined,
  { name: 'Charlie' }
];

// Safe array index access
console.log(users?.[0]?.name); // "Alice"
console.log(users?.[1]?.name); // undefined (item exists but is null)
console.log(users?.[2]?.name ?? "as2"); // undefined (item exists but is undefined)
console.log(users?.[3]?.friends?.[0]); // undefined (friends doesn't exist)
console.log(users?.[100]?.name ?? "as2"); // undefined (index out of bounds