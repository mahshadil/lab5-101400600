export class Customer{
    private firstName: string;
   private lastName: string
   age:number


    public greeter(){
        
        console.log(`hello ${this.firstName} ${this.lastName}`)
    }

    public GetAge(){
        console.log(`${this.firstName} is ${this.age}`)
    }

    constructor(firstName:string, lastName:string, age:number){
        this.firstName=firstName
        this.lastName=lastName
        this.age=age
    }
}

let customer = new Customer('John','smith',22)
customer.greeter()
customer.GetAge()