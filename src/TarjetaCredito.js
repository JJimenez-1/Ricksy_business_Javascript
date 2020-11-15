export { TarjetaCredito, pay, TarjetaCredito, credit, owner}

var owner = "";
var number = "";
var credit = 3000;
var symbol = "EZI";

function TarjetaCredito(owner, number){
    this.owner = owner;
    this.number = number;
}

function pay(charge) {
    if (charge <= this.credit) {
        this.credit -= charge;
        return true;
    }
    else {
        return false;
    }
}