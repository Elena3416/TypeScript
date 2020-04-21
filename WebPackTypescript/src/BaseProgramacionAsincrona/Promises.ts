import {persona} from "./../TemasBase/Interfaces";

let Personas: Array<persona> = [
    {
        id:1,
        nombre:"Jose Carlos",
        edad:23,
        sexo:"M"
    },
    {
        id:2,
        nombre:"Manuel Alejandro",
        edad:26,
        sexo:"M"
    },
    {
        id:3,
        nombre:"Daniela Estrada",
        edad:26,
        sexo:"F"
    },
    {
        id:4,
        nombre:"Laura Rubalcava",
        edad:25,
        sexo:"F"
    },
    {
        id:5,
        nombre:"Maria Fernanda",
        edad:22,
        sexo:"F"
    },
];

let Salario : Array<any> = [
{
    id:1,
    salario:5000,
},
{
    id:2,
    salario:10000,
},
{
    id:3,
    salario:2000,
},
{
    id:4,
    salario:4000,
}

]

/*************************************************
Promises
*************************************************/

interface resolveFinal{
    nombre:string;
    salario: number;
}

const getEmpleado = (id:number): Promise <persona> => {
    return new Promise((resolve,reject) =>{
        const Empleado = Personas.find((persona) => persona.id === id);

        if(!Empleado){
            reject(`No se ha encontrado al usuario con id ${id}`);
        }
        resolve(Empleado); 
        //resolve le esta mandando un number y es un callback
    }); //Sintaxis de Promise
};

const getSalario = (Empleado:persona): Promise<resolveFinal> => {
    return new Promise((resolve,reject) => {
        const SalarioEmpleado = Salario.find((salario) => salario.id === Empleado.id);
        if(!SalarioEmpleado){
            reject(`No se encuentra salario para el empleado: ${Empleado.nombre}`);
        }
        resolve({
            nombre:Empleado.nombre,
            salario: SalarioEmpleado.salario,
        });
    });
};

getEmpleado(5)
.then ((resolve) => {
    console.log(`Ejecución del Resolve`);
    console.log(resolve);

    getSalario(resolve)
    .then((resolve)=>{
        console.log(`El empleado: ${resolve.nombre} gana un salario de ${resolve.salario}`);   
    })
    .catch((reject:string) => console.log(reject));
})
//Sirve para mandar la solucion, Then ejecuta la funcion resolve y siempre se tiene que llamar.
.catch((reject:string) => {
    console.error(`Ejecución de Reject`);
    console.error(reject);
}); 
// Sirve para mandar un error, Catch ejecuta la funcion reject y siempre se tiene que llamar.
    