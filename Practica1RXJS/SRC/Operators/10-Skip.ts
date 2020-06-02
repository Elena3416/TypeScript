import {Observer, interval, fromEvent} from "rxjs";
import {displaylog} from "../utils/utils";
import {tap, skip, takeUntil} from "rxjs/operators";

const observer: Observer<any>  = {
    next:(value) => displaylog(`[Next] ${JSON.stringify(value)}`),
    error: (error) => console.error(`[Error Observable]`, error),
    complete: () => displaylog("[Complete]"),
};

/*************************************************
OPERADOR SKIP - Se utiliza para saltar uno u mas elementos.
Ejercicio: Imprimir varios valores y al momento le darle un click, el sistema omite ese click
y hasta el segundo click detiene los numeros.  
*************************************************/
const boton = document.createElement('button');
boton.innerHTML = "Detener Tiempo";
document.querySelector("body")?.insertBefore(boton, document
    .querySelector("#log-container")); 
// Se utiliza para imprimir el boton en el html

const counter$ = interval(1000); //interval emite un valor cada cierto tiempo

const clickBtn$ = fromEvent<MouseEvent>(boton, 'click').pipe(
    tap(() => console.log("Antes del skip")),
    skip(1),
    tap(() => console.log("Tap despues del skip")));

counter$.pipe(takeUntil(clickBtn$)).subscribe(observer);

// clickBtn$.subscribe(observer);

// counter$.pipe(skip(4)).subscribe(observer);