import {Observer, interval, fromEvent} from "rxjs";
import {displaylog} from "../utils/utils";
import {takeUntil} from "rxjs/operators";

const observer: Observer<any>  = {
    next:(value) => displaylog(`[Next] ${JSON.stringify(value)}`),
    error: (error) => console.error(`[Error Observable]`, error),
    complete: () => displaylog("[Complete]"),
};

/*************************************************
OPERADOR TAKE UNTIL - Un observarble manda varios valores y se sige ejecutando, 
hasta que un segundo observable emite un valor y detiene el primer observable
Ejercicio: Cada segundo manda un numero y hasta que le demos click en el boton completa los
valores
*************************************************/
const boton = document.createElement('button');
boton.innerHTML = "Detener Tiempo";
document.querySelector("body")?.insertBefore(boton, document
    .querySelector("#log-container")); 
// Se utiliza para imprimir el boton en el html

const counter$ = interval(1000); //interval emite un valor cada cierto tiempo

const clickBtn$ = fromEvent<MouseEvent>(boton, 'click');

counter$.pipe(
    takeUntil(clickBtn$)).subscribe(observer);


