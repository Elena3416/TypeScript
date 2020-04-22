/*********************Interface****************************
Es una declaracion de como esta compuesto el objeto
Solo puede declarar datos, se puede declarar funciones, pero no operaciones 
Para importar se importan todos las propiedades
*************************************************/
//declarar una interface
export interface persona {

    nombre:string,
    edad:number,
    sexo:string,
    id:number
};
//export interface, se le indica que se va a utilizar en otro archivo

export interface Salario{
    id:number,
    salario:number,
}