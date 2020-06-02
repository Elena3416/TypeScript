import {Observer, range} from "rxjs";
import {displaylog} from "../utils/utils";
import {map, tap} from "rxjs/operators";

const observer: Observer<any>  = {
    next:(value) => displaylog(`[Next] ${JSON.stringify(value)}`),
    error: (error) => console.error(`[Error Observable]`, error),
    complete: () => displaylog("[Complete]"),
};

/*************************************************
Tap se utliza para busqueda de datos, pero no puede transformar ningun dato
maneja tress callbacks, complete,error,next, funciona como debbuger
*************************************************/
const numero$ = range(1,7);
numero$.pipe(tap((x)=>console.log("Antes", x)),
map((value) => value*10),
tap({
    next: valor => console.log("Despues",valor), 
    complete: () => console.log("Se termino todo")
})
).subscribe(observer);


