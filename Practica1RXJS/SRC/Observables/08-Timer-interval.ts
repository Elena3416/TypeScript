import {Observer, timer} from "rxjs";
import {displaylog} from "../utils/utils";

const observer: Observer<any>  = {
    next:(value) => displaylog(`[Next], ${(value)}`),
    error: (error) => console.error(`[Error Observable]`, error),
    complete: () => displaylog("[Complete]"),
};

const incrementar10seg = new Date();
incrementar10seg.setSeconds(incrementar10seg.getSeconds()+10);

//Si no le agrega ningun tiempo al timer, manda un dato y lo completa
const src$ = timer(incrementar10seg);
// const src$ = interval(1000);
// const src$ = timer(3000, 1000); 

displaylog("Inicio");
src$.subscribe(observer);
displaylog("Final");
