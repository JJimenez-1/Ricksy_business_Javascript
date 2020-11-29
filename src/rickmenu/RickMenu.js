function RickMenu() {

    this.stock = 100
    this.cost = 10;
}

RickMenu.prototype.dispatch = function (owner) {
    if (this.stock > 0 && owner.credit >= this.cost) {
        owner.pay(this.cost);
        this.stock -= 1;
    }
}

module.exports = RickMenu;