import {Observable, Observer} from "rxjs";
import {displaylog} from "../utils/utils";

const observer: Observer<any>  = {
    next:(value) => displaylog(`[Next], ${JSON.stringify(value)}`),
    error: (error) => console.error(`[Error Observable]`, error),
    complete: () => console.warn("[Complete]"),
};

const intervalo$ = new Observable <number> ((subscriber) => {
    let count=0;
    const interval = setInterval( ()=> {
        count ++;
        subscriber.next(count);
        console.log(count);
    }, 1000);

    return() => {  
        clearInterval(interval);
        console.log("Intervalo Destruido");
    }
    // setTimeout(() => {
    //     Subscriber.complete();
    // }, 2500);
});

 const subs1 = intervalo$.subscribe(observer);
 const subs2 = intervalo$.subscribe(observer);

setTimeout(() => {
    subs1.unsubscribe();
    subs2.unsubscribe();
    console.log("Se ejecuto unsubscribe");
}, 3000);
 
