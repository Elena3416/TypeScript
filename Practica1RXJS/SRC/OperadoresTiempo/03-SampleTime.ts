import {Observer, fromEvent} from "rxjs";
import {displaylog} from "../utils/utils";
import { map,sampleTime} from "rxjs/operators";

const observer: Observer<any>  = {
    next:(value) => displaylog(`[Next] ${JSON.stringify(value)}`),
    error: (error) => console.error(`[Error Observable]`, error),
    complete: () => displaylog("[Complete]"),
};

/*************************************************
SampleTime - Se crea el evento y empieza a contar, si no emite ningun valor en esos segundos, 
imprime el valor, sino imprimir el ultimo valor emitido
Ejercicio: Se da un click, contando 3 segundos, imprime el valor de x y y despues de 3 segundos
*************************************************/

const click$ = fromEvent<MouseEvent>(document, "click");

click$.pipe(
    sampleTime(3000),  
    map(({x,y}) => ({x,y}))
)
.subscribe(observer);


