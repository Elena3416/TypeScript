import {Observer, fromEvent } from "rxjs";
import {displaylog} from "../utils/utils";
import {map, pluck} from "rxjs/operators";

const observer: Observer<any>  = {
    next:(value) => console.log(`[Next]`, value),
    error: (error) => console.error(`[Error Observable]`, error),
    complete: () => displaylog("[Complete]"),
};

const keyup$ = fromEvent<KeyboardEvent>(document, "keyup");
keyup$.pipe(map (({keyCode}) => {keyCode})).subscribe(observer);

keyup$.pipe(pluck('target', 'baseURI')).subscribe(observer);

//Esta sintaxis es igual a la funcion de flecha.
// map((event:any) => {
//     return {
//         keyCode:event.keyCode
//     }
// })