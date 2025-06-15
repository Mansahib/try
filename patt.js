let n=5
let val=n;
// let result=""
// for (let i = 0; i <= 2*n; i++) {
//      result=""
//     for(let j=spaces;j>=0; j--){
//         result+=" "
//     }
//     for(let k=1;k<=val; k++){
//         result+="* "
//     }
//     if(i<n)
//     {
//         spaces--
//         val++
//     }
//     else
//     {
//         spaces++
//         val--
//         }
//     console.log(result);
// }
for( let i= 0;i<2*n-1; i++){
    result="";
    for( let j=1;j<=val;j++)
    {
        result+=j+" ";
    }

    if(i<n-1)
    val--
    else
val++

    console.log(result);
}