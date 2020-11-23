const singletonUfosPark = require("../src/UfosPark.js");
const TarjetaCredito = require("../src/TarjetaCredito.js");
const { test, expect } = require("@jest/globals");

beforeEach(() => {
  abradolph = new TarjetaCredito("Abradolph", 49412375);
  rick = new TarjetaCredito("Rick", 54678932);
  morty = new TarjetaCredito("Morty", 78634599);
  ufosPark = singletonUfosPark.getPark();
});

test("Funciona singleton UfosPark", () => {
  let ufosParkcreated = singletonUfosPark.getPark();
  expect(ufosPark).toMatchObject(ufosParkcreated);
});

test("Añadir 3 ufos al UfosPark", () => {
  let ufos = ["Ufo1", "Ufo2", "Ufo3"];
  let actualFlota = new Map();
  for (let position in ufos) {
      
    actualFlota.set(ufos[position], null);
    ufosPark.add(ufos[position]);
  }
  expect(ufosPark.flota).toMatchObject(actualFlota);
});

test("Dispatch 3 ufos", () => {
  let ufos = ["Ufo1", "Ufo2", "Ufo3"];
  let actualFlota = new Map()
    .set("Ufo1", abradolph.number)
    .set("Ufo2", rick.number)
    .set("Ufo3", morty.number);
  for (let position in ufos) {
    ufosPark.add(ufos[position]);
  }
  ufosPark.dispatch(abradolph);
  ufosPark.dispatch(rick);
  ufosPark.dispatch(morty);
  expect(ufosPark.flota).toMatchInlineSnapshot(actualFlota, `Object {}`);
});
