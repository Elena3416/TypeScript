import {persona} from './../TemasBase/Interfaces';

const Arreglo6:Array<number> = [1,2,3,4,5,6,7,8,9];

Arreglo6.forEach(function (elemento) {
    console.log(elemento);
    
});

/*************************************************
 call funciones que pasan a otras funciones antes de pasar por el call back
 Explicacion basica de los call backs
*************************************************/

// function primerafuncion(segundafunction:Function){
//     alert('Primero ejecuto la primera funcion y despues la segunda funcion');
//     segundafunction();
// }

// function segundafunction(){
//     alert("Hola, se ejecuto la segunda funcion");
// }

// primerafuncion(segundafunction);

/*************************************************
Segundo ejercicio de call back
*************************************************/
// function UserName(SaludarUsarName:Function){
//     let name = prompt('Ingrese su nombre');
//     SaludarUsarName(name);
// }

// function SaludarUsarName(nombre:string){
//     alert(`Hola ${nombre}`);
// }

// UserName(SaludarUsarName);

/*************************************************
Tercer ejercicio
*************************************************/

// function suma(a:number,b:number, MostrarResultado:Function){
//     let res = a+b;
//     MostrarResultado(res);
// }

// function MostrarResultado(res:number){
//     res>10?
//     alert('Pasaste la Materia'):
//     alert('Reprobaste la materia');
// }

// suma(1,2,MostrarResultado);

/*************************************************
Uso intermedio Callbacks
*************************************************/
//Se crea un arreglo con objeto de 5 personas y sus propiedades, 


// function EliminarUsuarios(Nombre:string, callback:Function){
//     let longitudInicial =  Personas.length;

//     Personas =  Personas.filter((persona) => persona.nombre.toLowerCase() != Nombre);

//     if(longitudInicial == Personas.length){
//         callback(true, Nombre);
//     }else{
//         callback(null,Nombre);
//     }
// }

// //Imprimir los objetos en una tabla
// function MostrarUsuarioTabla(err:string|null,respuesta:boolean){

//     if(err){
//         console.error(`El usuario con nombre ${respuesta} no existe en la Base de Datos`);
//         return;
//     }
//     const tbody = document.querySelector('#tbody');
//     Personas.forEach((persona)=>{
//         const tr = document.createElement('tr');
//         tr.innerHTML = `
//             <td>${persona.id}</td>
//             <td>${persona.nombre}</td>
//             <td>${persona.edad}</td>
//             <td>${persona.sexo}</td>
//         ` ;
//         tbody?.appendChild(tr);
//     });
// }

// EliminarUsuarios('Jose Carlos', MostrarUsuarioTabla);

// // Busca la informacion del empleado en la BD
// let getEmpleado = (id:number, callback:Function) => {
    
//     let empleadoDB = Personas.find((empleado) => empleado.id === id);
    
//     if(!empleadoDB){
//         callback(`No existe un empleado con ID ${id}`)
//     }else {
//         callback(null, empleadoDB);
//     }
// };
// let getSalario = (empleado:persona, callback:Function) =>{

//     let SalarioDB = Salario.find((salario) => salario.id === empleado.id);
//     console.log(SalarioDB);

//     if(!SalarioDB){
//         callback(`No se encontro un salario para usuario ${empleado.nombre}`);
//     }else{
//         callback(null, {
//             nombre: empleado.nombre,
//             salario:SalarioDB.salario,
//         });
//     }
// };

//Invocacion de funciones
// getEmpleado(4,(err:null|string,empleado:persona) => {
//     if(err){
//         return console.error(err);
//     }
//     getSalario(empleado, (err:null|string, res:any) =>{

//         if(err){
//             console.error(err);
//             return;  
//         }
//         console.info(`El salario de ${res.nombre} es ${res.salario}`);
//     });
// });    


/*************************************************
CallBack ASINCRONO
Timeout, para definir el tiempo de ejecucion de una funcion
*************************************************/

// function Segundafunction(){
//     console.log("Se ejecuta segunda Funcion");  
// }

// function getEmpleadoAsincrono(id:number, callback:Function){

//     setTimeout(() => {      
//         const Empleado = Personas.find((Personas) => Personas.id === id);
    
//         !Empleado?
//         callback('No existe empleado con tal id'):
//         callback(null, Empleado);
//     }, 2000);    
// }

// getEmpleadoAsincrono(4,(error:string|null, empleado:persona) => {
//     if(error){
//         return console.log(error);
//     }
//     console.log(empleado);
// });

// Segundafunction();