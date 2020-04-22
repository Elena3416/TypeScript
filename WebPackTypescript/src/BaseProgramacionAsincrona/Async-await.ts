/*************************************************
Promesas son asincronas y not bloquing (No es bloqueante), no es de tipo bloque
No detienen las funciones mientras hacer otros procedimientos, es mas facil para la 
pc ejecutar una suma, un console log que una promesa

Async es una palabra reservada y la convierte en promesa, se escribe como async,
antes la funcion regresaba un vacio ahora regresa una promesa y despues return

Await le indica a la promesa ejecutate y solo se guarde el resolve or reject y siempre espera una 
promesa, es necesario utilizar el async
*************************************************/
import {persona,Salario} from "./../TemasBase/Interfaces";

const getNombre = ():Promise<string> => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve("Laura Rubalcava");
        }else{
            reject(new Error("No hay usuarios"));
        } //la promesa se rechazo y como parametro manda new error 
    });
}

async function Saludos(){

    console.log("Ejecutandose función Async 'Saludos'");
    
    let NombreRespuesta: string | undefined = undefined;
    
    // getNombre().then((nombre:string) => {
        //     NombreRespuesta = nombre; //Imprime el nombre que se encuentra en resolve
        //     console.log(`Apenas de resolvi`);
        // });
        
        NombreRespuesta = await getNombre();
    
        // Prueba();
        
        //Validar no se imprima un valor indefinido
        if(NombreRespuesta == undefined){
            throw new Error(`Nombre del usuario con valor indefinido`); //lanza nuevo error
        }
        return console.log(`Hola usuario ${NombreRespuesta}`);
} 

// function Prueba() {
    //     let suma = 2 + 2;
    //     console.log(suma);
    // }

// console.log("Primero");
    
//     Saludos()
//     .then((valor) => {
//         console.log(valor);
// }).catch((error:Error) => {
//     alert(error.message);
// });

// console.log("Segundo");
// console.log("Tercero");
// console.log("Cuarto");
// console.log("Quinto");
// console.log("Sexto");
//Guarda en un parametro al NombreRespuesta

/*************************************************
 Error lanza tres puntos, name el nombre del error, mensaje el mensaje que ingresamo en el error
 y stack el error en especifico
 *************************************************/

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

const GetEmpleado = async (id:number) => {
    const Empleado = Personas.find((persona) => persona.id === id);

    if(!Empleado){
        throw new Error(`Empleado con id ${id}, no existe en la base de datos`);
    }else{
        return Empleado;
    }
};

// //Esta funcion es lo mismo que agregar un async en la funcion 
// function (id:number){
//     return new Promise((resolve, reject) => {
//         const Empleado = Personas.find((persona) => persona.id === id);

//         if(!Empleado){
//            reject(new Error(''));
//         }else{
//             resolve(Empleado);      
//         }
// });

const GetSalario = async (Empleado:persona) => {
    const SalarioEmpleado = Salario.find((salario) => salario.id === Empleado.id);

    if(!SalarioEmpleado){
        throw new Error(`El empleado con id ${Empleado.id}, no cuenta con un 
        salario registrado`);
    }else{
        return{
            nombre: Empleado.nombre,
            Salario: SalarioEmpleado.salario,
        };
    }
};

const GetInformacion = async (id:number) => {
    const Empleado = await GetEmpleado(id);
    const Response = await GetSalario(Empleado);  
    
    return `El empleado ${Response.nombre}, gana un salario de $${Response.Salario}`;
};

GetInformacion(1)
.then((mensaje:string) => console.info(mensaje))
.catch((err:Error) => console.log(err.message));