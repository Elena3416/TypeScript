import {Observer, range, from, fromEvent} from "rxjs";
import {displaylog} from "../utils/utils";
import {filter, pluck, map} from "rxjs/operators";
import { Empleado2 } from "../Interfaces/Interfaces";

const observer: Observer<any>  = {
    next:(value) => displaylog(`[Next] ${JSON.stringify(value)}`),
    error: (error) => console.error(`[Error Observable]`, error),
    complete: () => displaylog("[Complete]"),
};
// const src$ = range(1,10);
// src$.pipe(filter((value) => value%2===1)).subscribe(observer);

const empleados: Array<Empleado2> = [
    {
        id:1,
        Nombre:"Raul",
        puesto: "Leader Manager",
        edad:23
    },
    {
        id:2,
        Nombre:"Ray",
        puesto: "Development Sr",
        edad:26
    },
    {
        id:3,
        Nombre:"Eduardo",
        puesto: "El patron",
        edad:21
    },
    {
        id:4,
        Nombre:"Manu",
        puesto: "Development Sr",
        edad:21
    },
    {
        id:5,
        Nombre:"Paco",
        puesto: "Development Sr",
        edad:27
    },
]

/**************PRACTICA*******************
1- Convertir el array a un observable 
2- Filtrar a los empleados que son developers Sr y posteriormente a los que no lo son 
3- filtrar a los empleados que osn mayores a 21 años
*******************************************/ 

const obs$ = from(empleados);
obs$.subscribe(observer);

obs$.pipe(filter((empleados) => empleados.puesto === "Deveploment Sr." &&
empleados.puesto !== "Deveploment Sr.")).subscribe(observer);

obs$.pipe(filter((edad) => edad.edad <= 21)).subscribe(observer);

const keyup$ = fromEvent<KeyboardEvent>(document, "keyup");
keyup$.pipe(pluck("code"), 
filter((value) => value === "Enter")
) .subscribe(observer);

