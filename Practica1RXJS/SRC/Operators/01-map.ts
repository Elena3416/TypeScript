import {Observer, range,fromEvent } from "rxjs";
import {displaylog} from "../utils/utils";
import {map} from "rxjs/operators";

const observer: Observer<any>  = {
    next:(value) => displaylog(`[Next], ${(value)}`),
    error: (error) => console.error(`[Error Observable]`, error),
    complete: () => displaylog("[Complete]"),
};

 range(1,5)
    .pipe(map((valor) => valor*10));
    // .subscribe(observer);
//Si no retorna nada, imprime undefinied, a menos que se retorne, imprime la informacion

const keyup$ = fromEvent<KeyboardEvent> (document, 'keyup');

keyup$.pipe(map<KeyboardEvent, string>((event) => event.code))
.subscribe(observer);