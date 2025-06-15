class bankacc{
    constructor(balance,owner){
        this.balance=balance;
        this.owner=owner;
    }
    deposit(amount){
        this.balance+=amount;
        return this.balance;
        }

    withdraw(amount){
        if (amount >this.balance)
            return "Insufficient funds";
        else
        this.balance-=amount;
    return this.balance;

    }
    display(){
        console.log(`Account Holder: ${this.owner}`);
        console.log(`Account Balance: $${this.balance}`);

    }    
}
let bankacc1=new bankacc(1000,"John");
bankacc1.display()

class shape{
    constructor(width, height){
        this.width=width;
        this.height=height;
    }

    area(){
        return this.width*this.height;
        }
}
class rectangle extends shape{
    
    area(){
        return this.width*this.height;
    }
}
par=new shape ();
rect=new rectangle(6,6);
console.log(rect.area());