import {Observer, from} from "rxjs";
import {displaylog} from "../utils/utils";
import {Empleados} from "./../Interfaces/Interfaces";

const observer: Observer<any>  = {
    next:(value) => displaylog(`[Next], ${JSON.stringify(value*10)}`),
    error: (error) => console.error(`[Error Observable]`, error),
    complete: () => displaylog("[Complete]"),
};

const obs1$ = from([10,20,30]);
obs1$.subscribe(observer);

const Empleados:Array<any> = [
    {
        id:1,
        Nombre:"Jose Carlos"
    },
    {
        id:2,
        Nombre:"Cesar"
    },
    {
        id:3, 
        Nombre:"Serch"
    },
]

const obs$ = from([Empleados]);
obs$.subscribe(observer);