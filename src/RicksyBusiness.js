//import { pay, credit, number} from "./TarjetaCredito";  
import TarjetaCredito from "./TarjetaCredito.js"

    /**
    * Crea una tarjeta de crédito para Abradolph.
    * Como es una AndromedanExpress
    * el crédito inicial es de 3000 EZIS
    */

    var abradolph = new TarjetaCredito("Abradolp Lincler", "49412375T")
   

    console.log("\n" + "Tarjeta de Abradolph" + "\n" + 
                              "===================="        );
    
    console.log(abradolph.owner + " " + abradolph.number);

    /*
    var ufos= new UfosPark();

    console.log(ufos.flota);
    // Da de alta en la flota de ovnis 2 UFOS.
        
    // Procesamos el pago y reserva de ovni de Abradolph

    // Mostramos el ID del ovni asignado a Abradolph
    console.log("\nOvni de Abradolph\n" + 
                        "=================");
    console.log(ufosPark.getUfoOf(abradolph.number()));
       
    // Mostramos el credito de la tarjeta de Abradolph
    console.log("Credito de Abradolph: " + abradolph.credit());

    // La dualidad en Abradolph quiere reservar otro ovni.
    // El sistema detecta que ya tiene uno 
    // e ignora la petición.

    console.log("\nAbradolph quiere otro ovni\n" + 
                        "==========================");
    console.log("Su credito no ha cambiado: " + abradolph.credit());
    console.log("Ovni de Abradolph: " + ufosPark.getUfoOf(abradolph.number()));

    // A GearHead le vacía la tarjeta el alien "Cámara Lenta" 
    // mientras le daba la chapa, justo antes de pagar el ovni.
    // Intenta reservarlo y el componente de reserva de ovnis
    // no le asigna ninguno.

    console.log("\nLLega GearHead!\n" + 
                        "===============");

        // le vacían la cartera

    console.log("Su credito es cero: " + gearHead.credit());
    console.log("No puede reservar ovni: " + ufosPark.getUfoOf(gearHead.number()));
        
    // Squanchy deja su ovni reservado
    // antes de irse a squanchear

    console.log("\nLLega Squanchy!\n" + 
                             "==============");
    console.log("Su credito es: " + squanchy.credit());
    console.log("Su ovni es: " + ufosPark.getUfoOf(squanchy.number()));

    // Morty quiere un ovni para huir de la fiesta
    // pero ya no queda ninguno disponible

    console.log("\nAlgun ovni para Morty?\n" + 
                        "======================");
    console.log("Su credito no ha cambiado: " + morty.credit());
    console.log("No hay ovni Morty: " + ufosPark.getUfoOf(morty.number()));

    // Metemos un ovni más en la flota de ovnis
    // y mostramos la flota por consola

    console.log("\nFlota de ovnis\n" + 
                        "==============");
    console.log(ufosPark);

    // Muestra el total de packs y su precio unidad
    console.log("\nPacks\n" + 
                        "=====");
    console.log(packExpender);

    // Abradolph compra su pack de bienvenida

    console.log("\nAbradolph compra su pack\n" + 
                        "========================");
    console.log("Packs\n" + packExpender);
    console.log("Credito de Abradolph: " + abradolph.credit());

    // El pobre GerHead no tiene crédito para comprar su pack
    console.log("\nGearHead sin credito para su pack\n" + 
                        "=================================");
    console.log("Packs\n" + packExpender);
    console.log("Credito de GearHead: " + gearHead.credit());

    // Squanchy reserva ovni (ya tiene) y pack

    console.log("\nLLega Squanchy!\n" + 
                        "===============");

    // Gearhead reserva ovni y pack.
    // No tiene crédito.

    console.log("\nLLega GearHead!\n" + 
                             "===============");

    // Birdpearson es recibido en la fiesta

    console.log("\nLLega Birdpearson!\n" + 
                        "==================");

    // Morty intenta reserver un ovni y un pack pero no quedan

    console.log("\nMorty quiere pack y ovni pero no quedan :(\n" + 
                        "==========================================");


    console.log("\nPedidos de RickMenus:\n" + 
                        "=====================");
    console.log(MenuDispatcher);

    console.log("\nCreditos de los invitados/as:\n" + 
                        "=============================");

        console.log(card);
        console.log();


   
    console.log(card);
    console.log("Packs: " + expender.stock());
    console.log("Ovni: " + ufos.getUfoOf(card.number()));
*/