const CreditCard = require('../src/tarjetacredito/TarjetaCredito.js');
const CrystalExpender = require('../src/crystalexpender/CrystalExpender.js');
const { test, expect } = require('@jest/globals');

beforeEach(() => {
    rick = new CreditCard("Rick", 46578912);
    paquete = new CrystalExpender(10, 50);
});

test('Comprobar paquete no es null', () => {
    expect(paquete).not.toBeNull();
});

test('Pagar 1 paquete', () => {
    paquete.dispatch(rick);
    expect(rick.credit).toBe(2950);
});

test('No hay stock', () => {
    noStock = new CrystalExpender(0, 50);
    noStock.dispatch(rick);
    expect(rick.credit).toBe(3000);
    expect(noStock.stock).toBe(0);
});

test('Rick no puede pagar', () => {
    paquete = new CrystalExpender(10, 3001);
    paquete.dispatch(rick);
    expect(paquete.stock).toBe(10)
});

test('Pagar 10 crystal', () => {
    for (let i = 0; i < 11; i++) {
        paquete.dispatch(rick);
    }
    expect(rick.credit).toBe(2500);
});