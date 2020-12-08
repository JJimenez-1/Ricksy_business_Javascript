const CreditCard = require('../../tarjetacredito/tarjetacredito');
const RickMenu = require('../rickmenu');
const { test, expect } = require('@jest/globals');

beforeEach(() => {
    morty = new CreditCard("Morty", 46578912);
    menu = new RickMenu(100, 10);
});

test('Comprobar menu no es null', () => {
    expect(menu).not.toBeNull();
});

test('Pagar 1 menu', () => {
    menu.dispatch(morty);
    expect(morty.credit).toBe(2990);
});

test('No hay stock', () => {
    noStock = new CreditCard("CompraTodo", 3);
    for (let i = 0; i < 101; i++) {
        menu.dispatch(noStock);
    }
    menu.dispatch(morty);
    expect(morty.credit).toBe(3000);
    expect(menu.stock).toBe(0);
});

test('Morty no puede pagar', () => {
    menu1 = new RickMenu(100, 10);
    menu2 = new RickMenu(100, 10);
    menu3 = new RickMenu(100, 10);
    for (let i = 0; i <= 100; i++) {
        menu1.dispatch(morty);
        menu2.dispatch(morty);
        menu3.dispatch(morty);
    }
    menu.dispatch(morty);
    expect(menu.stock).toBe(100)
})

test('Pagar 100 menu', () => {
    for (let i = 0; i < 101; i++) {
        menu.dispatch(morty);
    }
    expect(morty.credit).toBe(2000);
});

