
let modelsPhone = [
    {id:1,name:"samsung",price:180},
    {id:2,name:"iphone",price:280},
    {id:3,name:"nokia",price:160},
    {id:4,name:"xiaomi",price:193}
];

let bankAccount;

let checkBankAccount= () =>{
    bankAccount = prompt("Enter the amount of money in the bank account");
};


let proverka =() =>{
    checkBankAccount();
    if (bankAccount == parseInt(bankAccount)){
        console.log(bankAccount+" You entered number");
        return bankAccount;
    }
    else{
        console.log("You dont entered number");
        proverka();
    }
};
let a = proverka();
console.log(a);

// function  checkBankAccount() {
//     return  bankAccount = prompt("Enter the amount of money in the bank account!!!!");
// }
//
// function proverka() {
//     checkBankAccount();
//     if (bankAccount == parseInt(bankAccount)){
//         console.log(bankAccount+" You entered number");
//         return bankAccount;
//     }
//     else{
//         console.log("You dont entered number");
//         proverka();
//     }
// };
//
// let b = proverka();
// console.log(b+"10");