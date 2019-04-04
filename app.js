
let modelsPhone = [
    {id:1,name:"samsung",price:180},
    {id:2,name:"iphone",price:280},
    {id:3,name:"nokia",price:160},
    {id:4,name:"xiaomi",price:193}
];



let proverka =() =>{
    // let bankAccount = parseInt(prompt("Enter the amount of money in the bank account"));
    // if (bankAccount){
    //     console.log(bankAccount+" You entered number");
    //     return bankAccount;
    // }
    // else{
    //     console.log("You dont entered number");
    //     return proverka();
    // }
    var money = document.getElementById("exampleInputEmail1");
    console.log(money.value);
    document.getElementById("formMoney").style.display="none";
};


// let a = proverka();
// console.log('Уou have money in the account - '+a+' $' );

console.log(modelsPhone);

var el = document.getElementById("elem");
el.addEventListener("click", proverka);

// elem.addEventListener("click",(e)=>{
//     current_page = e.target.dataset.link;
//     renderProducts(array_products);
//
// });