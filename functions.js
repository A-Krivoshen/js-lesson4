"use strict";

var years = 2;
var currency = 'Q';

function annualSevice (years){
  switch (years){
    case 1:
      return 1250;
    case 2:
      return 2300;
    default:
      return 0;
  }
}

console.log(`Дополнительное гарантийное обслуживание: ${annualSevice(years)} ${currency}`);



var inscription = 'Привет как дела?';
var costEngraving = 11;

function calculationEngraving (string) {
  if (string){
    var words = string.split(' ');
    var lenghtWords = words.length;
    return costEngraving * lenghtWords;
  } else{
    return 0;
  }
}

console.log(`Подарочная упаковка и гравировка: ${calculationEngraving(inscription)} ${currency}`);


var currency = 'Q';
var needDelivery = 1, planet = 'Туманность Ориона'; 


function calcDeliveryCost(needDelivery, planet) {
    if (needDelivery) {
        switch (planet) {
            case 'Луна':
                return 150;
            case 'Крабовидная туманность':
                return 250;
            case 'Галактика Туманность Андромеды':
                return 550;
            case 'Туманность Ориона':
                return 600;
            default:
                return NaN;
        }
    } else {
        return 0;
    }
}

var costOfDelivery = calcDeliveryCost(needDelivery, planet);

if (costOfDelivery > 0) {
    console.log(`Стоимость доставки: ${costOfDelivery} ${currency}`);
} else if (costOfDelivery === 0) {
    console.log('Доставка не требуется');
} else if (isNaN(costOfDelivery)) {
    console.log('Ошибка при расчете стоимости доставки');
}
