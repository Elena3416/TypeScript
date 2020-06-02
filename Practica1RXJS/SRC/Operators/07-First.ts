import {Observer, fromEvent} from "rxjs";
import {displaylog} from "../utils/utils";
import {first, tap, map} from "rxjs/operators";

const observer: Observer<any>  = {
    next:(value) => displaylog(`[Next] ${JSON.stringify(value)}`),
    error: (error) => console.error(`[Error Observable]`, error),
    complete: () => displaylog("[Complete]"),
};

/*************************************************
OPERADOR FIRST - Se le manda un par de valores y solo regresa el primer valor del mismo
Ejercicio de click, solo manda un click y no manda los demas clicks que se seleccionan
*************************************************/
const click$ = fromEvent<MouseEvent>(document, 'click');  

click$.pipe(
    tap(() => console.log('tap')),
    first((event) => event.clientX > 350),
    map(({clientX, clientY})=>({clientX, clientY}))
).subscribe((value)=> console.log(value));

/*************************************************
map((event) => {
    return {
        clientX: event.clientX;
        clientY: event.clientY
    }
});
*************************************************/