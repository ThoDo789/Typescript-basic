export class Employee{
//   public name:string //public can access outside or change
//   private age:number // private can not access outside or change
//  readonly male:boolean // readonly can access outside, can not change
//   constructor(n:string, a:number, m:boolean){
//       this.name = n
//       this.age = a
//       this.male = m
//   }
constructor(public name:string, private age:number, readonly male:boolean){}
  print(){
    return `age: ${this.age} and name:${this.name} Gender male:${this.male}`
  }
}
const thodo = new Employee('thodo',28,true);

// console.log(thodo.age) can not access because that is  private variable
thodo.name = "tho"
console.log(thodo.name)

// thodo.male = false can not change because that is  readonly variable
console.log(thodo.male)

console.log(thodo.print())
const bob = new Employee('alie',15,false)

let employeeList : Employee[]=[]

employeeList.push(thodo)
employeeList.push(bob)

employeeList.forEach(employee=>console.log(employee.male, employee.name, employee.print()))