
let modelsPhone = [
    {id:1,name:"samsung",price:180},
    {id:2,name:"iphone",price:280},
    {id:3,name:"nokia",price:160},
    {id:4,name:"xiaomi",price:193}
];

let proverka =() =>{
    let money = document.getElementById("exampleInputEmail1");
    console.log(money.value);
    if (money.value==parseInt(money.value)){
        console.log(money.value +" You entered number");
        document.getElementById("formMoney").style.display="none";
        return money;
    }
    else{
        console.log("You dont entered number");
        money.placeholder="You entered incorrect data";
        return proverka();
    }
};

console.log(modelsPhone);

var el = document.getElementById("elem");
el.addEventListener("click", proverka);
