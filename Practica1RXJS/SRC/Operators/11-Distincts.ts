import {Observer,of, from} from "rxjs";
import {displaylog} from "../utils/utils";
import { distinct, distinctUntilChanged, distinctUntilKeyChanged } from "rxjs/operators";

const observer: Observer<any>  = {
    next:(value) => displaylog(`[Next] ${JSON.stringify(value)}`),
    error: (error) => console.error(`[Error Observable]`, error),
    complete: () => displaylog("[Complete]"),
};

/*************************************************
OPERADOR DISTINCT - Verifica todos los numeros y si existe numeros repetidos los elimina y solo
imprime los unicos numeros.
Ejercicio: Distintos numero y solo impime numeros no repetidos.
*************************************************/

const numero$ = of(1,2,6,8,4,2,7,8,1,4,6,9,1,2,3,4,6,9,0);

numero$.pipe(distinct()).subscribe(observer);

interface personaje{
    nombre:string;
}

const personajes : Array <personaje> = [
    {
        nombre: "Mario"
    },
    {
        nombre: "Mario"
    },
    {
        nombre: "Luigi"
    },
    {
        nombre: "Bowser"
    },
    {
        nombre: "Hoopa"
    },
    {
        nombre: "Hoopa"
    },
    {
        nombre: "Bowser"
    },
    {
        nombre: "Mario"
    },
    {
        nombre: "Hoopa"
    },
    {
        nombre: "Luigi"
    },
    {
        nombre: "SuperBoo"
    },
]

from(personajes).pipe(
    distinct((personajes) => personajes.nombre)).subscribe(observer);

/*************************************************
DISTINCT UNTILCHANGED - Compara el valor con un numero anterior, si el numero es distinto
imprime el valor, si no es distinto el valor omite el valor
*************************************************/
from(personajes).pipe(
    distinctUntilChanged((anterior,actual) => anterior.nombre === actual.nombre)).subscribe(observer);

const numeros$ = of(1,2,3,1,2,3,4,4,5,5,5,1,3,5);

numeros$.pipe(distinctUntilChanged()).subscribe(observer);

/*************************************************
DISTINCT UNTILKEYCHANGED - Es la misma funcion del UNTILCHANGED solo que imprimimos el valor a 
comparar
*************************************************/
from(personajes).pipe(distinctUntilKeyChanged(("nombre"))).subscribe(observer);

