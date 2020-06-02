import {Observer, fromEvent, asyncScheduler} from "rxjs";
import {displaylog} from "../utils/utils";
import {pluck, throttleTime } from "rxjs/operators";

const observer: Observer<any>  = {
    next:(value) => displaylog(`[Next] ${JSON.stringify(value)}`),
    error: (error) => console.error(`[Error Observable]`, error),
    complete: () => displaylog("[Complete]"),
};

/*************************************************
ThrottleTime - Cuando se ingresa un valor, empieza a contar, imprime solo el primer valor y los 
demas valores los ignora porque estan dentro del tiempo. 

Ejercicio: Se ingresar un dato en el input y despues de cierto tiempo imprime solo un valor
se agregan parametros para imprimir el ultimo valor emitido dentro de cierto tiempo
*************************************************/

const click$ = fromEvent(document, "click");
// click$.pipe(throttleTime(3000)).subscribe(observer);

const input = document.createElement('input');
document.querySelector("#log-container")?.appendChild(input);

const input$ = fromEvent(input, "keyup");
input$.pipe(throttleTime(5000,asyncScheduler, {
    leading:true,
    trailing:true
}), 
pluck('target', 'value')
).subscribe(observer);
//Se utiliza para imprimir despues del tiempo el valor ingresado sin necesidad de ingregar otro valor
