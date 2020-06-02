import {Observer, fromEvent, interval} from "rxjs";
import {displaylog} from "../utils/utils";
import {sample} from "rxjs/operators";

const observer: Observer<any>  = {
    next:(value) => displaylog(`[Next] ${JSON.stringify(value)}`),
    error: (error) => console.error(`[Error Observable]`, error),
    complete: () => displaylog("[Complete]"),
};

/*************************************************
SampleTime - Se tienen dos observables, el primero esta contabilizando los segundos, pero hasta que 
emita el segundo observable imprime el valor.
Ejercicio: Cuenta medio segundo el Sample, pero hasta que se le da click en el navegador imprime 
el valor x
*************************************************/

const click$ = fromEvent<MouseEvent>(document, "click");

const interval$ = interval(500);

interval$.pipe(
    sample(click$)).subscribe(observer);


