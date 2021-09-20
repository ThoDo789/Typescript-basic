type StringOrNumber = string | number
type Student = {name:string; id: StringOrNumber}

const studentDetails = (id:StringOrNumber,studentName: string): void =>{
  console.log(id, studentName)
}
studentDetails(23,'tho')

const greet1 = ({name,id}:Student)=>{
  console.log("name:", name, "with id: ",id)
}
greet1({name:"thodo",id:234})



