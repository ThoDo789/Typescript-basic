let myName: string = "nam"
let age: number
let isAuthenticate: boolean

myName = "thodo"
// myName = 2
age= 20
// age="hi"
isAuthenticate= false
// isAuthenticate= 3

let studentList :string[] = ["name","son","ha"]
// studentList.push(5)
studentList.push('tho')


//union
let mixed1:(string|number|boolean)[]

mixed1 = [true, "tho",26]
mixed1.push(false)
// mixed1.push({hello:"hh"})
let id: string | number
id=123
id="thodo"

let hobbies : "book" | "read"
hobbies = "book"
// hobbies = "cooking"

// object

let person1 : object;
person1 = {name:'thodo', age:30}
person1 = []
// person = ()=>{}

let student:{
  name:string,
  age:number,
  isGood:boolean

}

student = {
name:'tho',
age:20,
isGood:false

}

