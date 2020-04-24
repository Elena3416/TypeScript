import {Observer, range, } from "rxjs";
import {displaylog} from "./../utils/utils";

const observer: Observer<any>  = {
    next:(value) => displaylog(`[Next], ${(value)}`),
    error: (error) => console.error(`[Error Observable]`, error),
    complete: () => displaylog("[Complete]"),
};

// const src1$ = of(1,2,3,4,5,6,7,8,9,10);
// src1$.subscribe(observer);

const src$ = range(-5,10); 
//el primer valor es el valor a comenzar y el segundo cuantos datos me vas a imprimir 
src$.subscribe(observer);

