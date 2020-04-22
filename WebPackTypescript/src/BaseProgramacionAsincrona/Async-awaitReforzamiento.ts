import {Alumnos,Carrera,CentroEstudios} from "./Interfaces";

const alumno: Array<Alumnos> = [
    {
        id: 1,
        Nombre: "Alicia Villareal",
        idCarrera: 3
    },
    {
        id: 2,
        Nombre: "Blanca Diaz",
        idCarrera: 2
    },
    {
        id: 3,
        Nombre: "Daniel Palacios",
        idCarrera: 4
    },
    {
        id: 4,
        Nombre: "Victor Lemus",
        idCarrera: 1
    },
    {
        id: 5,
        Nombre: "Karen Sanchez",
        idCarrera: 5
    },
];

const carrera: Array<Carrera> = [
    {
        idCarrera: 1,
        Carrera: "Mercadotecnia",
        idCentroEstudios: 1
    },
    {
        idCarrera: 2,
        Carrera: "Historia",
        idCentroEstudios: 3
    },
    {
        idCarrera: 3,
        Carrera: "Nutricion",
        idCentroEstudios: 2
    },
    {
        idCarrera: 4,
        Carrera: "TICS",
        idCentroEstudios: 1
    },
];

const centroestudios: Array<CentroEstudios> = [
    {
        id: 1,
        Nombre: "Ciencias y tecnologias"
    },
    {
        id: 2,
        Nombre: "Salud"
    },
];

/*************************************************
Nombre de la carrera en la cual estudia el alumno con el id 2
*************************************************/
const GetIdAlumno = async (id:number) => {
    const IdAlumnoBD = alumno.find((alumno) => alumno.id === id);

    if(!IdAlumnoBD){
        throw new Error(`No existe el ID alumno ${id} en la base de datos`);
    }else{
        return IdAlumnoBD;
    }
}

const GetNombreCarrera = async (alumno:Alumnos) => {
    const NombreCarreraBD = carrera.find((carrera) => carrera.idCarrera === alumno.idCarrera);

    if(!NombreCarreraBD){
        throw new Error(`No existe el nombre del carrera con este id ${alumno.idCarrera} 
        en la base de datos`);
    }else{
        return{
            idAlumno: alumno.id,
            NombreCarrera: NombreCarreraBD.Carrera,
        }
    }
}

const GetInformacion = async (id:number) => {
    const Alumno = await GetIdAlumno(id);
    const ImprimirInfo = await GetNombreCarrera(Alumno);

    return `La carrera de ${ImprimirInfo.NombreCarrera} pertenece al alumno con el 
    id ${ImprimirInfo.idAlumno}`;
}

GetInformacion(2)
.then((mensaje) => console.log(mensaje))
.catch((error:Error) => console.log(error.message));

/*************************************************
Nombre del centro a la cual pertenece la carrera de nutricion
*************************************************/
const GetCarrera = async (id:number) => {
    const NombreCarrerasBD = carrera.find((carrera) => carrera.idCarrera === id);

    if(!NombreCarrerasBD){
        throw new Error(`El nombre de la carrera no pertenece a este id ${id} en la base 
        de datos`);
    }else{
        return NombreCarrerasBD;
    }
}

const GetCentroCiencias = async (carrera:Carrera) => {
    const NombreCienciasBD = centroestudios.find((centroestudios) => centroestudios.id 
    === carrera.idCentroEstudios);

    if(!NombreCienciasBD){
        throw new Error(`No existe el centro al que pertenece la carrera con este id 
        ${carrera.idCentroEstudios}`);
    }else{
        return{
            NombreCarrera: carrera.Carrera,
            NombreEstudios: NombreCienciasBD.Nombre,
        }
    }
}

const GetDatos = async (id:number) => {
    const NombreAlumno = await GetCarrera(id);
    const ImprimirNombreCentro = await GetCentroCiencias(NombreAlumno);
    
    return (`El centro de la ${ImprimirNombreCentro.NombreEstudios} pertenece a la 
    carrera de ${ImprimirNombreCentro.NombreCarrera}`);
}

GetDatos(3)
.then((mensaje:string) => console.log(mensaje))
.catch((error:string) => console.log(error));

/*************************************************
Nombre del centro al cual pertenece la carrera del alumno Victor Lemus
*************************************************/
const GetNombreAlumno = async (id:number) => {
    let NombreAlumnoBD = alumno.find((alumno) => alumno.id === id);

    if(!NombreAlumnoBD){
        throw new Error(`No existe el nombre del alumno con este id ${id} en la base de datos`);
    }else{
        return NombreAlumnoBD;
    }
} 

const GetNombreMateria = async (alumno:Alumnos) => {
    let NombreMateriaBD = carrera.find((carrera) => carrera.idCarrera === alumno.idCarrera);

    if(!NombreMateriaBD){
        throw new Error(`No existe el nombre de la materia con este id ${alumno.idCarrera}`);
    }else{
        return NombreMateriaBD;
    }
}

const GetNombreCentros = async (carrera:Carrera) => {
    let CentroEstudiosBD = centroestudios.find((centroestudios) => centroestudios.id 
    === carrera.idCentroEstudios);

    if(!CentroEstudiosBD){
        throw new Error(`No pertenece a ningun centro la carrera con este id 
        ${carrera.idCentroEstudios} en la base de datos`);
    }else{
        return{
            NombreCentro: CentroEstudiosBD.Nombre,
            materia: carrera.Carrera
        }
    }
}

 const getInformation = async (id:number) => {
     const AlumnoName = await GetNombreAlumno(id);
     const NameCarrera = await GetNombreMateria(AlumnoName);
     const ImprimirCentro = await GetNombreCentros(NameCarrera);

    return (`El centro de ${ImprimirCentro.NombreCentro} pertenece a la carrera 
    ${ImprimirCentro.materia} con el nombre del alumno ${AlumnoName.Nombre}`);
 } 

 getInformation(4)
 .then((mensaje:string) => console.log(mensaje))
 .catch((error:string) => console.log(error))