let arr=[1,2,3,4]
arr.forEach(Element=>console.log(Element))

let obj={
    name:"John",
    age:30
}

for(let i in obj)
{
    console.log(obj[i]);
}

for(let i=0; i<arr.length; i++)
{
    console.log(`the value at index ${i} is ${arr[i]}`);
}

let total =0;
arr.forEach( (Element)=>total+=Element)
console.log(total);

let str="hello world"
if(str.length> 0)
{
    console.log(`the string length is ${str.length}`);
}
else
{
    console.log("the string is empty");
}

let mynumber=arr[5];
if(mynumber)
{
    console.log(mynumber);
}
else
{
    console.log("the value is undefined");
}

// for(var i=0;i<10;i++)
// {
//     setTimeout(() => {
//         console.log(i);
//     }, 5000);
// }


function person(name,age) 
{
    this.name=name;
    this.age=age;
}
person.prototype.getDetails= function(){
    console.log(`name is ${this.name} and age is ${this.age}`);
}

var person=new  person("John", 30);
console.log(person.name);
person.getDetails()



function getData(callback){
   setTimeout(()=>{
        callback([1,2,3,4])
   }, 1000)
}

getData((data)=>{
    console.log(data);
})




