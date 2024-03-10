class Customer{
    private firstName: string;
   private lastName: string


    public greeter(){
        console.log(`hello ${this.firstName} ${this.lastName}`)
    }

    constructor(firstName:string, lastName:string){
        this.firstName=firstName
        this.lastName=lastName
    }
}

let customer = new Customer('John','smith')
customer.greeter()