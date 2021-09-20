const add2 =(a:number,b?:number)=>{
  //type error return a+b
  //fix solution 1
 return b ? a+b : a; 
}
console.log(add2(2,1))
 //fix solution 2
const addNonNull = (a:number, b?:number)=> a+b!

console.log(addNonNull(3))

