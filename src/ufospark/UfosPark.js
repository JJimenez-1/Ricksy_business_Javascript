function UfosPark() {
  this.fee = 500;
  this.flota = new Map();
}

UfosPark.prototype.add = function(ufo) {
    this.flota.set(ufo, null);
  }

UfosPark.prototype.getUfoOf = function(cardNumber) {
  for (let [ufo, owner] of this.flota.entries()) {
    if (cardNumber == owner) {
        return ufo;
      }
    }
    return "Imposible encontrar ovni";
}

UfosPark.prototype.dispatch = function(card) {
  
    for(let [ufo, owner] of this.flota.entries()) {
        if(owner == null && card.credit >= this.fee) {
            card.pay(this.fee);
            this.flota.set(ufo, card.number);
            break;
        }
    }
}

const singletonUfosPark = (function() {
  var instance;
  function createInstance() {
    return new UfosPark()
  }
  return {
    getPark: function() {
      if(!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

module.exports = singletonUfosPark;