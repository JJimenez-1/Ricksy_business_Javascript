function Receptivo() {

    this.observers = new Set();
}

Receptivo.prototype.registra = function (observer) {
    this.observers.add(observer);
}

Receptivo.prototype.dispatch = function (propietario) {
    for (let observer of this.observers) {
        observer.dispatch(propietario);
    }
}

const singletonReceptivo = (function() {
    var instance;
    function createInstance() {
      return new Receptivo()
    }
    return {
      getReceptivo: function() {
        if(!instance) {
          instance = createInstance();
        }
        return instance;
      },
    };
  })();

module.exports = singletonReceptivo;