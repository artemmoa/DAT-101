"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";
const CurrencyTypes = {
  NOK: { value: 1.0000, name: "Norske kroner", denomination: "kr" },
  EUR: { value: 0.0985, name: "Europeiske euro", denomination: "€" },
  USD: { value: 0.1091, name: "United States dollar", denomination: "$" },
  GBP: { value: 0.0847, name: "Pound sterling", denomination: "£" },
  INR: { value: 7.8309, name: "Indiske rupee", denomination: "₹" },
  AUD: { value: 0.1581, name: "Australske dollar", denomination: "A$" },
  PHP: { value: 6.5189, name: "Filippinske peso", denomination: "₱" },
  SEK: { value: 1.0580, name: "Svenske kroner", denomination: "kr" },
  CAD: { value: 0.1435, name: "Canadiske dollar", denomination: "C$" },
  THB: { value: 3.3289, name: "Thai baht", denomination: "฿" }
};

const accountTypes = {
        Normal: "Brukskonto",
        Savings: "Sparekonto",
        Credit: "Kreditkonto",
        Pension: "Pensjonkonto",
    }
     const printAccTypes = accountTypes.Normal + ", " + accountTypes.Savings + ", "+ accountTypes.Credit + "," + accountTypes.Pension;


class bankAccount {
    #type = 0;
    #balance = 0;
    #withdrawCount = 0
    #currencyType = 0 
    
constructor(type){
    this.#type = type; 
    this.#currencyType = CurrencyTypes.NOK 
    this.#balance = 0;

} 


setCurrencyType(aType){
    if(aType === this.#currencyType){
        return;
    } else {
     printOut("The account currency was chenged from " + this.#currencyType.name + " to " + aType.name)

    this.#currencyType = aType;
    
    printOut("New balance is " + (this.#balance * this.#currencyType.value).toFixed(2)
 + this.#currencyType.denomination);

    }
}
 #currencyConvert(aType){
    return CurrencyTypes.NOK.value / this.#currencyType.value * aType.value;
  }




toString(){
    return this.#type
}
setType(aType){
    let printingTask2 = "Account is changed from "+ this.#type;
 this.#type = aType;
 printingTask2 += " to " + this.toString();
 this.#withdrawCount = 0
 printOut(printingTask2);
}
getBalance(){
    return this.#balance.toFixed(2);
}
deposite(aAmount, aCurrencyType = CurrencyTypes.NOK ){
    const amountInNOK = aAmount / aCurrencyType.value;
    this.#balance += amountInNOK;

    this.#withdrawCount = 0
       const currencySymbol = this.#currencyType.denomination;
       const currencyName = aCurrencyType.name     

    printOut("Deposit = " + aAmount + " " + currencyName + ". " + "New balance = "+ this.#balance.toFixed(2)+ currencySymbol);
}
withdraw(aAmount, aCurrencyType = CurrencyTypes.NOK){
    switch(this.#type){
        case accountTypes.Pension:
      printOut("You can`t withdraw from a pension account.");
      
        return;
        case accountTypes.Savings:
            this.#withdrawCount++;
            if(this.#withdrawCount > 3){
                printOut("You can not withdraw from a " + this.#type + " more than three times.")
            return
            }
           
        break 
    } 

    const convert = this.#currencyConvert(aCurrencyType);
    const amountInNOK = aAmount / aCurrencyType.value;
    this.#balance -= amountInNOK;
       const displayAmount = aAmount;
    const displayBalance = this.#balance * this.#currencyType.value;
      const currencySymbol = this.#currencyType.denomination;
          const currencyName = aCurrencyType.name     

    printOut("Withdrawal of " + displayAmount + " " + aCurrencyType.name +". New balance is "+ displayBalance.toFixed(2) + currencySymbol);
}




}

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// function TbankAccounts (aType, aNormal, aSavings , aCredit, aPension){
//     let normal = aNormal;  
//     let savings = aSavings;
//     let credit = aCredit ;
//     let pension = aPension;
//     this.type = aType;
// this.toString =function(){
//     return normal + ", " + savings + ", "+ credit + ", " +  pension 
// }
// this.setType = function(newType){
//     const oldType = this.type;
//     this.type = newType;
//     printOut("Account type changed from " + oldType + " to " + newType ); 
   
// }
// this.toString = function(){
//     return "Account type: " + this.type;
// }

   
   printOut(printAccTypes); 
 

// const accountTypes = new TbankAccounts ("Brukskonto", "Sparekonto", "Kreditkonto", "Pensjonskonto");
//  printOut(accountTypes.toString() + newLine);
// printOut("Replace this with you answer!");
// printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
// /* Put your code below here!*/
// const accountType2 = new TbankAccounts("Personal", "Brukskonto", "Sparekonto", "Kreditkonto", "Pensjonskonto");
// printOut("Current account type: " + accountType.toString());
// accountType2.setType("Savings");
// printOut("New account type: "+ accountType.toString(aSavings))


const userAccount = new bankAccount(accountTypes.Normal);
printOut("My account: " + userAccount.toString());
userAccount.setType(accountTypes.Savings);
printOut("My account: " + userAccount.toString());
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
 userAccount.deposite(100);
 userAccount.withdraw(30);
 printOut("Account balance is " + userAccount.getBalance());

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
userAccount.deposite(30);
userAccount.setType(accountTypes.Savings);
userAccount.getBalance;
userAccount.withdraw(30);
userAccount.withdraw(30);
userAccount.withdraw(30);
userAccount.withdraw(30);
userAccount.setType(accountTypes.Pension);
userAccount.withdraw(30);
userAccount.setType(accountTypes.Savings);
userAccount.withdraw(10)
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
userAccount.deposite(150);

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
userAccount.setCurrencyType(CurrencyTypes.SEK);
userAccount.setCurrencyType(CurrencyTypes.EUR);
userAccount.setCurrencyType(CurrencyTypes.NOK);

printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
userAccount.getBalance;
userAccount.deposite(12, CurrencyTypes.USD);
userAccount.withdraw(10, CurrencyTypes.GBP);
userAccount.setCurrencyType(CurrencyTypes.PHP);
userAccount.setCurrencyType(CurrencyTypes.AUD);
userAccount.setCurrencyType(CurrencyTypes.THB);
userAccount.withdraw(472.46, CurrencyTypes.THB)

printOut("Replace this with you answer!");
printOut(newLine);
