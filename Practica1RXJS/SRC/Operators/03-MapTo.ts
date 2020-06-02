import {Observer, fromEvent } from "rxjs";
import {displaylog} from "../utils/utils";
import {mapTo} from "rxjs/operators";

const observer: Observer<any>  = {
    next:(value) => displaylog(`[Next] ${value}`, ),
    error: (error) => console.error(`[Error Observable]`, error),
    complete: () => displaylog("[Complete]"),
};

const keyup$ = fromEvent<KeyboardEvent>(document, "keyup");

const keyupMapto$= keyup$.pipe(mapTo("Tecla Presionada"));
keyupMapto$.subscribe(observer);
