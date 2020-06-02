import {Observer, fromEvent, of} from "rxjs";
import {displaylog} from "../utils/utils";
import {takeWhile, map} from "rxjs/operators";

const observer: Observer<any>  = {
    next:(value) => displaylog(`[Next] ${JSON.stringify(value)}`),
    error: (error) => console.error(`[Error Observable]`, error),
    complete: () => displaylog("[Complete]"),
};

/*************************************************
OPERADOR TAKE WHILE - Imprime valores mientras se cumple con una cierta condicion,
cuando se completa la condicion omite los demas valores que se encuentran despues de ella.
*************************************************/
const click$ = fromEvent<MouseEvent>(document, 'click');  

const src$ = of<number>(1,2,3,4,3,5,1,7);

src$.pipe(takeWhile((numero)=> numero<4));
// .subscribe(observer);

click$.pipe(
    map(({x,y}) => ({x,y})),
    takeWhile(({y}) => y<= 150)
).subscribe(observer);