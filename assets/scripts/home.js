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

        console.log('You have successfully Withdrawn');
        console.log('the amount you have withdrawn is $', amount)
        console.log("your current balance is now $", this.balance)
        
    }

    CheckBalance() {
        console.log('Your balance is $' , this.balance)
        
    }
}

const jey = new CBE('JEYLAN', 100330, 2, 0)
jey.Deposit(500);
jey.Withdrawal(200);

jey.CheckBalance()


