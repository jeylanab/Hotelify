class Company {
    constructor(name, age, salary, isMarried) {
        
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.isMarried = isMarried
    }
    display() {
        console.log('this is the first function again')
    }
    myInfo() {
        
        const list = [];
        const listNull = [];

        const isTrue = true;

        const checkedName = (a = 4, b =5) => {
            if (isTrue) {
                list.push(a);
            }
            else {
                listNull.push(b)
            }
            console.log( list , listNull)
        }
        checkedName()

    }
   
}

const tesla = new Company('tesla', 43, "$5000", true)
console.log(tesla.age)

tesla.display()
tesla.myInfo()

class CBE {
    constructor(userName, userAccount, userLevel, balance) {
        this.userName = userName;
        this.userAccount = userAccount;
        this.userLevel
        this.balance = balance;

        
    }

    Deposit(amount) {
        // this line display the amount of the money deposited

        this.balance += amount;

        console.log("you have deposited succesfully");
        console.log("Your current balance is $" , this.balance )

        
    }
    Withdrawal(amount) {
        this.balance -= amount;
        console.log(`HEY ${this.userName} WELCOME TO OUR BANK`)

        console.log('You have successfully Withdrawn');
        console.log('the amount you have withdrawn is $', amount)
        console.log("your current balance is now $", this.balance)
        
    }

    CheckBalance() {

        if (this.balance < 0) {
            console.log("you don't have insufficent balance again you have to deposit first")

        }
        console.log('Your balance is $' , this.balance)
        
    }
}

const jey = new CBE('JEYLAN', 100330, 2, 0)
jey.Deposit(500);
jey.Withdrawal(200);

jey.CheckBalance();

const bro = new CBE('BASHE', 50303, 2, 6000)
bro.Deposit(50000);
bro.Withdrawal(200);

bro.CheckBalance();

Promise

function myFunc() {
    return Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('this is asynchronous function')
            
        }, 100);

    })
    
    
}




