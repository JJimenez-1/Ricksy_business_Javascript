//import { pay, credit, number} from "./TarjetaCredito";
export {UfosPark};


const fee = 500;
var flota = new Map();

function UfosPark() {
}

function add(ufo) {
    flota.set(ufo, null);
  }

function dispatch(card) {
    for(let key of flota.entries()) {
        if(key.keys() == null && card.number) {
            card.pay(valueUfo);
            flota.set(key.keys(), card.getterNumber)
        }
    }
}

function getUfoOf(cardNumber) {
    let nameOvni = "";

    for (let key of flota.entries()) {
        if (key.values() == owner) {
          nameOvni = key.keys();
        }
      }
      return nombreOvni;
}

exports.singletonUfosPark = function() {
  return dispatch();
}