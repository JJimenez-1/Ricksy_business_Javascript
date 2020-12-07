const CreditCard = require("../../tarjetacredito/TarjetaCredito.js");
const CrystalExpender = require("../../crystalexpender/CrystalExpender.js");
const UfosPark = require("../../ufospark/UfosPark.js");
const Receptivo = require("../Receptivo.js");

beforeEach(() => {
    abradolph = new CreditCard("Abradolph", 49412375);
    crystalExpender = new CrystalExpender(10, 50)
    ufosPark = UfosPark.getPark();
    receptivo = Receptivo.getReceptivo();

    let ufos = ["Ufo1", "Ufo2", "Ufo3"];
    for (let position in ufos) {
        ufosPark.add(ufos[position]);
    }
});

test("Funciona singleton Receptivo", () => {
    let createdReceptivo = Receptivo.getReceptivo();
    expect(receptivo).toMatchObject(createdReceptivo);
});

test("Funciona singleton UfosPark", () => {
    let ufosParkCreated = UfosPark.getPark();
    expect(ufosPark).toMatchObject(ufosParkCreated);
})

test("Receptivo funciona", () => {
    crystalExpender.dispatch(abradolph);
    receptivo.dispatch(abradolph);

    expect(abradolph.credit).toBe(2950);
    expect(crystalExpender.stock).toBe(9);
    ufosPark.dispatch(abradolph);
    expect (
        Array.from(ufosPark.flota.values()).includes(abradolph.number)).toBeTruthy();
});