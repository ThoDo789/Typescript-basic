let names = ['mai','nam','hung'];
names.push('son')
// names.push(5) type error
// names.push(true) type error

let number = [1,2,4]
number.push(3)
number[1] = 8

// number[1] = "hi"type error 
// number.push("hi")  type error
// number.push(false) Argument of type 'boolean' is not assignable to parameter of type 'number'

let mixed = [false, 5,'hello']
mixed.push(5)
mixed.push("hi")
mixed.push(true)
mixed[2]=true
// mixed.push({a:2,b:3}) Type '{ a: number; b: number; }' is not assignable to type 'true'.

let person = {
  name:"thodo",
  age:28,
  isStudent:false
}
// person.name= 5
person.name ="thudo"
// person.age ="thu"
person.age = 25
// person.hobbies = ["book"] Property 'hobbies' does not exist on type 
 person = {
  name:"thodo",
  age:28,
  isStudent:false,
  // skill:["book"] Object literal may only specify known properties, and 'skill' does not exist
}