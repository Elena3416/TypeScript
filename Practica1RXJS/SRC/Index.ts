// console.log("Works");

import { Observable, Subscriber } from "rxjs";

//Dos formas de crear un observable
// 1-. const obs$ = Observable.create();

const obs$ = new Observable(subscriber=>{
    subscriber.next("Hola mundo");
    subscriber.next(["Laura", "Rubalcava"]);
    subscriber.next(5);
    subscriber.next({a:1,b:2,c:3});

    //Forzando un error 
    // const A:any = undefined;
    // A.nombre = "Laura Elena";

    // const B:any = undefined;
    // B.apellido = "Rubalcava";
    // subscriber.next("Paso Error");

    subscriber.complete();
});

obs$.subscribe( 
(value) => console.log("[Next]",value), 
(error) => console.error("[Error Observable]", error),
() => console.warn("[Complete]");
);