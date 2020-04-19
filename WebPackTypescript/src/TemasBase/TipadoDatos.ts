let variable1:number = 0;
let variable2:string = "Hola Mundo";
let variable3:boolean = true;
console.log(typeof variable3);

let Array1:Array <string | number> = [1,2,3, "a", "b"]; // tipado para el array.

function Numerica(x:number,y:number):number{
    let resultado:number = x+y;
    return resultado; // number lo unico que puede retornar es numbero
}
console.log(Numerica(5,8));

const btnEjecutar:HTMLElement = document.getElementById('BtnEjecutar')!; 
//signo admiracion es para asegurarse que es un htmlelement, para asegurarnos que el elemento
//no sea null

btnEjecutar.addEventListener('click', CalcularEdadCasarse);

function CalcularEdadCasarse(){

    const inputEdadUsuario:HTMLInputElement = <HTMLInputElement> document.getElementById
        ('EdadUsuario');//declarar htmlinputelement

    const EdadUsuario:number = Number(inputEdadUsuario.value); //   
    let resultado:number = EdadUsuario + 20;

    const outputElement:HTMLDivElement = <HTMLDivElement> document.querySelector("#output")!; 
    outputElement.innerText = `Te vas a casar a los ${resultado}`;
}

/**
 * Inferencia de datos
 * Cuanto tienes que obligar a un elemento que tiene otro tipo de dato, que es de otro tipo
 * de elemento.
 * Se utilizan en elementos que tiene por default javascript
 * | para hacer comparacion de dos o mas tipos, null o string, number
 */

//Angular 2 solo puede correr con archivos .ts