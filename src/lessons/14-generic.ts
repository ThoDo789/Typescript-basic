type strArray = Array<string> 
type numArray = Array<number>

const last = (arr:Array<any>)=> arr

console.log(last(['tho','thu']))
console.log(last([12,13]))

const lastT = <T>(arr:Array<T>)=>arr[arr.length-1]
const l3=lastT([1,2,3])
const l4=lastT(['a','b','c'])
const l5 =lastT<string>(['d','e'])

const makeArr = (x:number)=>[x]
makeArr(5)

const makeArrT = <T>(x:T)=>[x]
const a1 = makeArrT(4)
const a2 = makeArrT("a")
const a3 = makeArrT(true)

const makeArrXY = <X,Y>(x:X,y:Y)=>[x,y]
const m1 = makeArrXY(3,4)
const m2 = makeArrXY('a','b')
const m3 = makeArrXY(3,'hello')

const makeTuple = <X,Y>(x:X,y:Y):[X,Y] =>[x,y]
const m4 = makeTuple(1,2)
const m5 = makeTuple('a',2)
const m6 = makeTuple<string, number >('a',2)
const m7 = makeTuple<string | null, number >(null,2)

const makeTupleDefault = <X,Y=number>(x:X,y:Y)=>[x,y]
const m8 = makeTupleDefault<string>('a',3)

// GENERIC EXTENDS
