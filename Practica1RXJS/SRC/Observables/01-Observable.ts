import {Observable, Observer} from "rxjs";
import {displaylog} from "../utils/utils";

const observer: Observer<any>  = {
    next:(value) => displaylog(`[Next], ${JSON.stringify(value)}`),
    error: (error) => console.error(`[Error Observable]`, error),
    complete: () => console.warn("[Complete]"),
};

// const obs$ = Observable.create(); //Otra forma para crear un observable

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

obs$.subscribe(observer); 
