const square =(side:number)=>{
    return side * side
}
console.log(square(2))

let greet: Function

greet=()=>console.log('hello')
greet()
  const add =(a:number, b:number,c?:number | string )=> {
      // ? k bat buoc
      // | or

    console.log(a+b,c)
  }
  add(5,6,"hello")
  add(1,2,3)
  add(1,2)

  const addDefault =(a:number, b:number,c:number | string = 10 )=> {
    console.log("sum:",a+b)
    console.log("default: ",c)
  }
addDefault(2,3)
addDefault(2,3,5)
addDefault(2,3,"thodo")

const minus =(a:number, b:number ):number=> a-b
