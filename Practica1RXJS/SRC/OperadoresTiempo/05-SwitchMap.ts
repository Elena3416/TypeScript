import {Observer, fromEvent, interval, timer} from "rxjs";
import {displaylog} from "../utils/utils";
import {sample, switchMap} from "rxjs/operators";

const observer: Observer<any>  = {
    next:(value) => displaylog(`[Next] ${JSON.stringify(value)}`),
    error: (error) => console.error(`[Error Observable]`, error),
    complete: () => displaylog("[Complete]"),
};

/*************************************************
SwitchMap - Se subscribe a un observable cuando emite un valor, cuando el primer observable
mande una variable, otro observable se ejecuta.
Cancela el segundo subscribe, cuando el primero emite un valor y comienza desde cero.
*************************************************/

const click$ = fromEvent<MouseEvent>(document, "click");

const timer$ = timer(0,3000);

/**El primer observer tiene un subscribe y dentro un observable tiene 
 * otro subscribe, pero este subscribe no se cancela y eso no es correcto*/
// click$.subscribe((valor) => {
//     timer$.subscribe((valor) => console.log(valor));
// });

click$.pipe(switchMap((x) => timer$)).subscribe(valor => console.log(valor));