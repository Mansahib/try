// // // function callback(cb)
// // // {
// // //     fetch("https://potterapi-fedeperin.vercel.app/en/spells")
// // //     .then(response=>{
// // //         response=response.json();
// // //         return response;
// // //     })
// // //     .then(data=> cb(data)  )
// // //     .catch(error=>cg(error))
// // // }

// // //  function display(){
// // //     try{
// // //     let result= callback((data)=>{
// // //         if(data){
// // //             console.log(data);
// // //             return
// // //         }
// // //         else{
// // //             console.log("No data");
// // //         }
// // //     })
// // //     console.log(result);
// // // }
// // // catch( error){
// // //  console.log(error);
// // // }
// // // }
// // // display();


// // const fetchs=(cb)=>{
// //     console.log("1st");
// //     cb(); 
// // }
// // const f2=(cb)=>{
// //     console.log("2nd");
// //      cb();
// // }

// // fetchs(()=>{
// //     f2(()=>{
// //         console.log("3rd");
// //     })
    
// // })


// //  function fetchData(){
// // return new Promise( (resolve, reject)=>{
// //     setTimeout (() =>
// //         {
// //             const data = "daata fetched";
// //            resolve(data);
// //        },2000)
// // });
// // }
// // fetchData()
// // .then(data=>console.log(data))


// //  function delaypro(){
// //     return new Promise((reslove)=>{
// //         setTimeout(()=>{
// //           reslove("data after some time");
// //         },2000)
// //     })
// // }
// // async function fetchData(){
// // let res=await delaypro()
// // console.log(res);
// // }
// // fetchData()

// async function fetchData() {
//     const response = await fetch('https://api.example.com/data');
//     const data = await response.json();
//     console.log(data);
//     return data;
// }

// fetchData();

const prom=async (id)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
             resolve("delayed" + id);
        }, Math.random()*1000)
    })
}

const arr=[
    prom(1),
    prom(2),
    prom(3),
    prom(4),
]

let result=await Promise.all(arr)
console.log(result)
