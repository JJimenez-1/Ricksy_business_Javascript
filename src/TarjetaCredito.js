
function TarjetaCredito(owner, number){
    this.owner = owner;
    this.number = number;
    this.credit = 3000;
    this.symbol = "EZI";
}

TarjetaCredito.prototype.pay = function(charge) {
    if (charge <= this.credit) {
        this.credit -= charge;
        return true;
    }
    else {
        return false;
    }
}

module.exports = TarjetaCredito;