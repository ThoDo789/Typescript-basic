// let greet2 : Function
// greet2 =()=>{console.log("hello world")}

let greet2 : (a:string, b:string) => void

greet2 = (name:string, greeting:string)=>console.log(`${name} and ${greeting}`)
greet2("tho","hello everyone")

let calculate : (a:number, b:number, c:string) =>number
calculate=(numOne:number,numTwo:number,condition:string)=> condition==='add'? numOne+numTwo : numTwo-numOne
console.log(calculate(2,3,"minus"))

type Student4 ={name:string;age:number}
let printStudent : (student:Student4) => void
printStudent=(myStudent : Student4)=>{
  console.log(`name :${myStudent.name} and age:${myStudent.age}`)
}
printStudent({name:"tho",age:18})
const nam ={
  name:"thu",
  age:10
}
printStudent(nam)