/*************************************************
No es necesario imprimir todos los objetos
*************************************************/

const objetovalores = {perrito:2, b:3, c:4, d:5}; //declaras un objeto

const {perrito,b,c,d} = objetovalores; // crear un alias para no escribir todo el codigo

console.log(perrito); 

/*************************************************
Arreglo hereda los valores de acuerdo a la posicion de las letras,
Las propiedades tienen que llamarse de la misma manera
*************************************************/
const Arreglo: Array<number> = [1,2,3,4,5,6,7,8,9,0];

const [a,e,i] = Arreglo;

console.log(a,e,i);



