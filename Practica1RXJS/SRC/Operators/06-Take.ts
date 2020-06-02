import {Observer,  of} from "rxjs";
import {displaylog} from "../utils/utils";
import {take} from "rxjs/operators";

const observer: Observer<any>  = {
    next:(value) => displaylog(`[Next] ${JSON.stringify(value)}`),
    error: (error) => console.error(`[Error Observable]`, error),
    complete: () => displaylog("[Complete]"),
};

const Numeros$ = of(1,2,3,4,5);

Numeros$.pipe(
    take((5))
).subscribe(observer);

/*************************************************
Operador take, toma los valores que uno le indica, si el numero es negativo aparece este 
codigo de error ArgumentOutOfRangeErrorImpl.
*************************************************/