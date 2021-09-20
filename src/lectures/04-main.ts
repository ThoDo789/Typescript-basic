 export function isPositive(n:number){
  return n>0
}

interface obj{
  name: string;
  age: number;
  gender: boolean;
  id: number
}

  const bobList:obj[] =[
{ name:'tho',age:26,gender:true,id:1223},
{ name:'tho',age:26,gender:true,id:1223},
{ name:'tho',age:26,gender:true,id:1223},
  ]
   
  let y= 5;
  let x =10;
  //old way
  let temp=x;
  x=y;
  y= temp;
  
//new way
[x,y] = [y,x]
    console.log(x,y)


  