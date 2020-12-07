function RickMenu(stock, cost) {

    this.stock = stock;
    this.cost = cost;
}

RickMenu.prototype.dispatch = function (owner) {
    if (this.stock > 0 && owner.credit >= this.cost) {
        owner.pay(this.cost);
        this.stock -= 1;
    }
}

module.exports = RickMenu;