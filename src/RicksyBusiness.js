//import { pay, credit, number} from "./TarjetaCredito";  
const CrystalExpender = require("./crystalexpender/CrystalExpender.js");
var tarjetaCredito =  require("./tarjetacredito/TarjetaCredito.js");
var singletonUfosPark =  require("./ufospark/UfosPark.js");
var singletonReceptivo = require("./receptivo/Receptivo.js");
const RickMenu = require("./rickmenu/rickmenu.js");

    /**
    * Crea una tarjeta de crédito para Abradolph.
    * Como es una AndromedanExpress
    * el crédito inicial es de 3000 EZIS
    */

    let abradolph = new tarjetaCredito("Abradolph Lincler", "4916119711304546")
   

    console.log("\n" + "Tarjeta de Abradolph" + "\n" + 
                              "===================="        );
    
    console.log(abradolph.owner + " " + abradolph.number);

    abradolph.pay(1000);

    console.log("\n" + "Quitar 1000 creditos a abradolph" + "\n" + 
    "====================" )

    console.log(abradolph.credit);

    let ufosPark = singletonUfosPark.getPark();

    ufosPark.add("unx");
    ufosPark.add("dox");

    ufosPark.dispatch(abradolph);

    console.log("\nOvni de Abradolph\n" + 
    "=================");

    console.log("Credito de Abradolph: " + abradolph.credit);

    console.log("\nAbradolph quiere otro ovni\n" + 
    "==========================");
    ufosPark.dispatch(abradolph);
    console.log("Su credito no ha cambiado: " + abradolph.credit);
    console.log("Ovni de Abradolph: " + ufosPark.getUfoOf(abradolph.number));

    console.log("\nLLega GearHead!\n" + 
    "===============");
    let gearHead = new tarjetaCredito("Gearhead", "8888888888888888")

    gearHead.pay(3000);

    ufosPark.dispatch(gearHead);
    console.log("Su credito es cero: " + gearHead.credit);
    console.log("No puede reservar ovni: " + ufosPark.getUfoOf(gearHead.number));

    
    console.log("\nLLega Squanchy!\n" + 
    "==============");
    let squanchy = new tarjetaCredito("Squanchy", "4444444444444444");
    ufosPark.dispatch(squanchy);
    console.log("Su credito es: " + squanchy.credit);
    console.log("Su ovni es: " + ufosPark.getUfoOf(squanchy.number)); 

    console.log("\nAlgun ovni para Morty?\n" + 
    "======================");
    let morty = new tarjetaCredito("Mort", "0000000000000000");
    ufosPark.dispatch(morty);
    console.log("Su credito no ha cambiado: " + morty.credit);
    console.log("No hay ovni Morty: " + ufosPark.getUfoOf(morty.number));

    console.log("\nFlota de ovnis\n" + 
    "==============");
    ufosPark.add("trex");
    console.log(ufosPark);

    let packExpender = new CrystalExpender(3, 50);

    console.log("\nPacks\n" + 
    "=====");
    console.log(packExpender);

    packExpender.dispatch(abradolph);

    console.log("\nAbradolph compra su pack\n" + 
    "========================");
    console.log("Packs\n" + packExpender);
    console.log("Credito de Abradolph: " + abradolph.credit);

    console.log("\nGearHead sin credito para su pack\n" + 
    "=================================");
    packExpender.dispatch(gearHead);
    console.log("Packs\n" + packExpender);
    console.log("Credito de GearHead: " + gearHead.credit);

    let receptivo = singletonReceptivo.getReceptivo();
    receptivo.registra(packExpender);
    receptivo.registra(ufosPark);

    console.log("\nLLega Squanchy!\n" + 
    "===============");
    receptivo.dispatch(squanchy);
    mostrarReserva(gearHead, packExpender, ufosPark);

    console.log("\nLLega Birdpearson!\n" + 
    "==================");
    let birdpearson = new tarjetaCredito("Birdpearson", "1111111111111111");
    receptivo.dispatch(birdpearson);
    mostrarReserva(birdpearson, packExpender, ufosPark);

    console.log("\nMorty quiere pack y ovni pero no quedan :(\n" + 
    "==========================================");
    receptivo.dispatch(morty);
    mostrarReserva(morty, packExpender, ufosPark);

    let MenuDispatcher = new RickMenu();
    receptivo.registra(MenuDispatcher);

    let cards = [abradolph, squanchy, morty, gearHead, birdpearson];

    for (let card of cards) {
        receptivo.dispatch(card);
    }
    
    console.log("\n" + "Pedidos de RickMenus:");
    console.log(MenuDispatcher);
    console.log("\n" + "Creditos de los invitados/as:");

    for(let card of cards) {
        console.log(card);
        console.log();
    }

    function mostrarReserva(card, expender, ufos) {
        console.log(card.number);
        console.log("Packs: " + expender.stock);
        console.log("Ovni: " + ufos.getUfoOf(card.number));
    }
