/*************************************************
Spread Operation - eliminar los corchetes y cada valor ponerlo en forma separada
Separar los valores de uno en uno y ponerlos en un array (Solo funciona con array y objeto)
Es parecido a un for que imprime una cadena de caracteres. spead operator funciona con ... puntos
*************************************************/
import {persona} from './Interfaces'; 
//importar el dato persona del archivo interface, siempre en el otro archivo se tiene la opcion exportar

const Arreglo1 = [1,2,3,4,5,6,7];
const Arreglo2 = [8,9,10];
const Arreglo3 = [Arreglo1, Arreglo2];
const Arreglo4 = [... Arreglo1, ...Arreglo2, 11,12,13];
const Arreglo5 = [...Arreglo4, "Hola Mundo"];
console.log(Arreglo5);

/**********************Spread en Objects***************************
Se basa en un objeto anterior y si se agrega otro valor lo reemplaza
*************************************************/

// const ObjetoPersona1:persona = {
//     nombre:"Jose Carlos",
//     apellido:"Gonzalez Soriano",
//     edad:23,
//     sexo:"Masculino",
//     estatura:1.75
// };

// console.log(ObjetoPersona1);

// const ObjetoPersona2  = {...ObjetoPersona1, nombre:"Sergio"};

// console.log(ObjetoPersona2);


// function SumarValores(x?:number, y?:number, z?:number){

//     let suma = x!+y!+z!;
//     console.log(suma);
    
// }
// // SumarValores(Arreglo1[0],Arreglo1[1],Arreglo1[3]);


// SumarValores(...Arreglo1,0);