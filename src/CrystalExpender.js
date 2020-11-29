function CrystalExpender(stock, itemCost) {

    this.stock = stock;
    this.cost = itemCost;

}

CrystalExpender.prototype.dispatch = function (owner) {
    if (this.stock > 0 && owner.credit >= this.cost) {
        owner.pay(this.cost);
        this.stock -= 1;
    }
}

module.exports = CrystalExpender;