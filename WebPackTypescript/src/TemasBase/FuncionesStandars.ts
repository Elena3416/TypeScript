import {persona} from './Interfaces';
/******************Caracteristicas de los parametros de las funciones ******************
Explicaremos las caracteristicas que tienen los parametros de las funciones

Parametros obligatorios: Se necesita un parametro para que funcione
Parametros Opcionales: Los parametros secundarios son lo parametros opcionales, ya que 
normalmente no realiza una funcion
Parametros por default: Si no se declara un numero, se coloca un por default 

El primer parametro nunca puede se opcional, si no para que se pide.
Siempre los parametros opcionales deben escribirse al final

*************************************************/
//Parametro Obligatorio
// function Suma(x:number){
//     let suma = x;
//     console.log(suma);
// }
// Suma(10);

// //Parametro Opcional
// function Suma2(x:number, y?:boolean){
//     let suma = x;
//     if(y!=undefined)
//     console.log(suma);   
// }
// Suma2(10 ,true);

// //Parametro Default
// function Suma3(x:number, ultimo:number = 10,y?:boolean){
//     let suma = x+ ultimo;
//     if(y==undefined)
//     console.log(suma);   
// }
// Suma3(10,20);

/*****************Funcion de Flechas******************************/
/* ()=> Arrow Functions Se asigna a una variable a una aplicacion
Si solo se tiene un return, se puede omitir el retun y funciona de la misma manera */
//Funcion Normal
function ImpresionDatos(){
    console.log('Hola Mundo de una funcion standard');
}
ImpresionDatos();

//Funcion de flecha
const ArrowFuncionSaludos = (x:number, y:number) => x+y;
console.log(ArrowFuncionSaludos(10,20));

/*************************************************
Metodos array con funcion de fecha

1-.Foreach: Recorre un arreglo y a cada valor le aplica una accion
2-.Map: Es similar al foreach ya que a cada valor en el arreglo aplica una accion, la 
diferencia es que Map nos crea un areglo y foreach no
3-.Find: Encuentra un valor dentro de un arreglo y nos comparte un valor nuevo
4-.Filter: Encuentra varios valores y regresa un array con ellos
5-.Some: Encuentra un valor dentro de un array y nos regresa un true o un false,
False - para cuando el falso no existe

*************************************************/

let ArregloNumerico:Array<number> = [1,2,3,4,5,6,7,8,9,10];

// for(let i=0;i<ArregloNumerico.length;i++){
//     let elemento = ArregloNumerico[i];
//     console.log(elemento);  
// }

//Foreach
ArregloNumerico.forEach((elemento) => 
elemento%2==0 ? console.log('par',elemento):console.log('impar',elemento));

//Map
let ArregloNuevo:any = [];
  ArregloNuevo = ArregloNumerico.map((elemento) => (elemento % 2 == 0? elemento: "impar")); // Regresa un arreglo 

console.log(ArregloNuevo);

//Find arreglo objetos se puede llamar como objetos
// let Personas : Array <persona> = [
//     {
//         // id:1,
//         nombre: "Jose Carlos",
//         apellido:'Gonzalez',
//         sexo:"Masculino",
//         edad:23
//     },
//     {
//         // id:2,
//         nombre: 'Chinese',
//         apellido:'Peralta',
//         sexo: "Masculino",
//         edad:23
//     },
//     {
//         // id:3,
//         nombre:'La Daniela',
//         apellido:'Estrada',
//         sexo: "Femenino",
//         edad:26
//     },
// ]
//Find
// let persona =  Personas.find((elemento) => elemento.id == 2);
// console.log(persona);

/*************************************************
Filter
// *************************************************/
// let PersonasMasculinas = Personas.filter((persona) => persona.sexo != "Masculino");
// console.log(PersonasMasculinas);

/*************************************************
Some
*************************************************/

// let existe = Personas.some((persona) => persona.id==2 && persona.nombre == "Chinese");

// console.log(existe); // imprime true or false
