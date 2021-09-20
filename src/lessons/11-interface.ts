interface Person{
name: string,
age: number,
speak(lang:string):void,
spent(amount: number):number
}

const kevin :Person = {
  name:'kenvin',
  age:12, 
  speak(text:string):void {
    console.log(text)
  },
  spent(amt:number) {
    return amt
  }
}
console.log(kevin)

const   helloPerson = (onePerson: Person)=>{
  console.log(`hello ${onePerson.name}`)
  
}
helloPerson(kevin)