// let str="hello yello ew";
// let string=str.toLowerCase().trim();
// let s=new Set(string)
// console.log(string);
// console.log(s);

// let str2="hello sahib";
// let ar=str2.split(" ");
// let result="";
// for(let i of ar)
// {
//     result+=i.split("").reverse().join("");
//     result+=" ";
// }
// console.log(result.trim());

// const count=(str)=>
// {
//     let map=new Map();
//     for(let i of str){
//         if(map.has(i)){
//             map.set(i,map.get(i)+1);
//         }
//         else{
//             map.set(i,1);
//         }
//     }
// let result=""
//     for(let [key,val] of map ){
//      result+=key+val;
//     }

//     return result;
// }

// let string="helo sahib singh"
// let str=string.toLowerCase().trim();
// let res="";
// let arr=str.split(" ");
// for(let i=0; i< arr.length;i++  ){
//     if(i==0)
//     {
//         res+=arr[i];
//     }
//     else
//     {
//     res+=arr[i].charAt(0).toUpperCase()+arr[i].slice(1);
//     }
// }
// console.log(res);



// let result=arr.reduce((acc,Element)=>
//      acc+Element,0)

// // console.log(result);

// let set = new Set(arr);
// let result;
// for (let i of set) {
//   let count = 0;
//   for (let j of arr) {
//     if (i === j) {
//       count++;
//       if (count > 1) {
//         console.log(`the number ${i} is repeated ${j}`);
//       }
//     }
//   }
// }

// const map=new Map();
// for(let i=0;i<arr.length; i++){
//     if(map.has(i)){
//         map.set(arr[i],i);
//         }
//         else{
//             map.set(arr[i],-1);
//             }
// }

// for(i of map.keys()){
//     if(map.get(i)==-1)
//         map.delete(i);
//     }

//     console.log(map);
let arr = [1, 2, 3, 4, 5, 6, 7, 4, 5, 5, 7];
let result=[];
for(let i=0;i<arr.length; i++){
if(!result.includes(arr[i])){
    result.push(arr[i]);
}
}
console.log(result);

// function flatconcat(arr){
// for(let i=0;i<arr.length; i++){
//     if(Array.isArray(arr[i]))
//     {
//         result=result.concat(flatconcat(arr[i]));
//     }
//     else{
//         result.push(arr[i]);
//         }

// }
// return result;
// }

// console.log(flatconcat(arr));


