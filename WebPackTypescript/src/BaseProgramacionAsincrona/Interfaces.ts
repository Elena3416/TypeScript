export interface Alumnos{
    id: number;
    Nombre:string;
    idCarrera: number; 
}

export interface Carrera{
    idCarrera: number;
    Carrera:string;
    idCentroEstudios:number;
}

export interface CentroEstudios{
    id:number;
    Nombre:string;
}