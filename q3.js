let string;

const removedup=(str)=>{
let unique=new Set(str);
let result="";
for(let i of unique){
    result+=i;
    }
    console.log(result);
}

removedup("helo sahib")

const rev = (str) => {
    let res = str.split(" ");
    let result = "";
    for (let i of res) {
        result += i.split("").reverse().join("") + " ";
    }
    console.log(result.trim());
}




rev("helo sahib")


const countfreq=(str)=>{
   let map=new Map();
   for(let i of str){
    if(map.has(i)){
        map.set( i,map.get(i)+1);
    }
    else{
        map.set(i,1);
        }
        }
    let result="";
    for(let [key,val] of map)
        {
            result+=`${key}${val}`;
            }
            console.log(result);
   
}
countfreq("aaaaaaaaabbqq")

const camelCase = (str) => {
    let result = "";
    let words = str.trim().split(/\s+/); // handles multiple spaces
    for (let i = 0; i < words.length; i++) {
        if (i === 0) {
            result += words[i].toLowerCase();
        } else {
            result += words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
        }
    }
    console.log(result);
};

camelCase("hello    world"); // Output: helloWorld

// const finddup=(ar)=>{
//     let set=new Set(ar);
//     let c=0;
//     for(let i of ar){
//         if(set.has(i)){
//             c++;
//             if(c!=0){
//                 console.log(i);
//             }
            
//         }
//     }
// }

// finddup([1,2,3,4,5,6,7,8,9]);
const lastIndex = (arr) => {
    const count = new Map();
    const result = new Map();

    for (let i = 0; i < arr.length; i++) {
        const val = arr[i];
        if (count.has(val)) {
            result.set(val, i); // update last index
        } else {
            count.set(val, 1); // mark first occurrence
        }
    }

    return result;
};

// Example
console.log(lastIndex([1, 2, 3, 2, 4, 1, 5]));
// Output: Map { 2 => 3, 1 => 5 }

/*
12.Write a program to display intersection of two array

*/
const intersectionArray = (ar1, ar2) => {
  let result = [];
  for (let i = 0; i < ar1.length; i++) {
    for (let j = 0; j < ar2.length; j++) {
      if (ar1[i] === ar2[j] && !result.includes(ar1[i])) {
        result.push(ar1[i]);
      }
    }
  }
  console.log("intersection of arrays is " + result);
};
intersectionArray([1, 2, 3, 4], [3, 4, 5, 4, 3]);