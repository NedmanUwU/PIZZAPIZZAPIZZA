const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;
//Put your Javscript code here:

function checkOrderName(orderName) {
    const menu = ["vegetarian", "hawaiian", "pepperoni"];
    return menu.includes(orderName);
}
function totalCost(orderQuantity) {
    const pizzaPrice = 80;
    return orderQuantity * pizzaPrice;
}
function cookingTime(orderQuantity) {
    if (orderQuantity <= 1) {
        return 10; // 10 minutes for 1 pizza
    } else if (orderQuantity >= 3 && orderQuantity <= 5) {
        return 15; // 15 minutes for 3-5 pizzas
    } else if (orderQuantity >= 6 && orderQuantity <= 10) {
        return 20; // 20 minutes for 6-10 pizzas
    } else {
        alert('すみませんでした。\n１から１０までの番号を入力してください!'); // Default time when input is invalid
    }
}

alert('いらっしゃいませ！\n私たちの食べ物が\nvegetarianのピーザと\nhawaiianのピーザと\npepperoniのピーザ\nあります。');//TN: Welcome! We have Vegetarian pizza, Hawaiian pizza and Pepperoni Pizza

let orderName = prompt('どちらのピーザはいいですか?\n'+ vegetarian +'か'+ hawaiian +'か'+ pepperoni +'か?\n ここにピーザを入力してください!');//TN: Which type of pizza do you prefer?  Vegetarian pizza, Hawaiian pizza or Pepperoni Pizza? Please write your preference here
if (checkOrderName(orderName)) {
    let orderQuantity1 = prompt('いくつ ' + orderName + ' ほしい？\nここに番号を入力してください!');
    let orderQuantity = Number(orderQuantity1);
    let orderTotal = totalCost(orderQuantity);

    alert('かしこまりました ' + orderQuantity + ' 個' + orderName + 'のピーザはいいですか?\nそれは、ごうけいは: ' + orderTotal + 'sek になります。\n' + cookingTime(orderQuantity) + '分お待ち下さい');
    }
else {
    alert('すみませんでした。\n' + orderName + 'をありませんでした');
}

    