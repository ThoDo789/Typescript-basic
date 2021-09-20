interface hasPrint{
  print():string
}


class Invoice implements hasPrint {
  constructor(
    readonly client: string,
    private work: string,
    public amount: number
  ){}
  print(){
    return `${this.client} owes ${this.amount} dollars for this work: ${this.work}`
  }
}
class Payment implements hasPrint{
  constructor(
    readonly recipient: string,
    private job: string,
    public amt: number
  ){}
  print(){
    return `I owe ${this.recipient} ${this.amt} dollars for this work: ${this.job}`
  }
}

const documentOne:hasPrint = new Invoice('tho','coffee',2000)
const documentTwo:hasPrint = new Payment('thu','employee',2000)

const allDocument:hasPrint[] = []
allDocument.push(documentOne,documentTwo) 

console.log(allDocument)