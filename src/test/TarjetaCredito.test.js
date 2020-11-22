const Tarjeta = require("../TarjetaCredito");

var testTarjeta = new Tarjeta("Abradolph", "45676765T")

test('El numero de tarjeta debe ser 45676765T', () => {
expect(testTarjeta.number).toBe("45676765T");});