import {Observer, fromEvent} from "rxjs";
import {displaylog} from "../utils/utils";
import {debounceTime, pluck } from "rxjs/operators";

const observer: Observer<any>  = {
    next:(value) => displaylog(`[Next] ${JSON.stringify(value)}`),
    error: (error) => console.error(`[Error Observable]`, error),
    complete: () => displaylog("[Complete]"),
};

/*************************************************
Operadores de tiempo - Se encarga de retrasar los valores a mostrar (es un contador de los valores
    a imprimir) 
Escucha un valor y cuenta el tiempo, si no hay otros valores a emitir imprime el valor si no, 
imprime el ultimo valor)
DebounceTime es uno de los operadores de tiempo
Ataque de dos - Es cuando se pide muchas peticiones, el internet se traba y manda error 
y ya no permite ingresar datos 
Ejercicio: Se ingresar un dato en el input y despues de un segundo imprime el evento
y el valor ingresado en el input
*************************************************/

const click$ = fromEvent(document, "click");
// click$.pipe(debounceTime(3000)).subscribe(observer);

const input = document.createElement('input');
document.querySelector("#log-container")?.appendChild(input);

const input$ = fromEvent(input, "keyup");
input$.pipe(debounceTime(2000),
pluck('target', 'value')
).subscribe(observer);

