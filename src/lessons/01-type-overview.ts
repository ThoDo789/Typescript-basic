//any
let count : any = 5;
count='five';
console.log(count);
//primitive unnecessary declare explicit
// boolean 
let booleans = true; //<=> let booleans: boolean = true
let numbers = 2;
let strings = 'hello';


//literal types
// get a value specific for type
let temp:1;          // <=> const temp =1
let namePage:'tho'; // <=> const namePage ="tho"
let isActive:true; // <=> const isActive =true
let students:null; // <=> const student = null

  // let temp:2 =1; Type '1' is not assignable to type '2'


  const student1 = {
    id: 1,
    name: 'Easy Frontend',
  }
  // this is how ts understand:
  // const student: {
  //    id: number;
  //    name: string;
  // }
  // because the props of an object can be updated
  student1.name = 'Typescript is easy! :P'; // works
  const student2 = {
    id: 1,
  name: 'Easy Frontend',
  } as const
  // this is how ts understand: // const student: {
  //   readonly id: 1;
  //   readonly name: "Easy Frontend";
  // }
  // you now can't update props of this object
  // student2.name = 'Typescript is easy, really?!';
  // error: Cannot assign to 'name' because it is a read-only property.


//Type Assertion
  function getStatusName(state: 'active') 
   { console.log(state);
  }
  // let s = 'active'; // let s: string
  // getStatusName(s)
  // ts error: Argument of type 'string' is not assignable to parameter of type '"active"'.ts(2345)

  // solution 1
  // let s: 'active' = 'active';  or const s = 'active' getStatusName(s);

  // solution 2
  let s = 'active';
  getStatusName(s as 'active')
