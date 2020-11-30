const { test, expect } = require("@jest/globals");
const TarjetaCredito = require("../TarjetaCredito.js");


beforeEach(() => {
    abradolph = new TarjetaCredito("Abradolph", 49412375);
});

test("Crear una tarjeta de credito", () => {
expect(abradolph.owner).toBe("Abradolph");
expect(abradolph.number).toBe(49412375);
expect(abradolph.credit).toBe(3000);
expect(abradolph.symbol).toBe("EZI");
});

test("Pagame 1000 creditos ", () => {
    abradolph.pay(1000);
    expect(abradolph.credit).toBe(2000);
});

test('Pagar mas de 3000 creditos', () => {
    abradolph.pay(3001);
    expect(abradolph.credit).toBe(3000);
});

test('Imposible pagar con 0 creditos', () => {
    abradolph.pay(3000);
    abradolph.pay(1);
    expect(abradolph.credit).toBe(0);
});