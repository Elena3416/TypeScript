import { Alumnos, Carrera, CentroEstudios } from "./Interfaces";

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
Promise para el Nombre de la carrera en cual estudia el alumno con el id 2
*************************************************/
interface ResolveFinalCarrera {
    idCarrera: number;
    NombreCarrera: string;
}

const getIdAlumno = (id: number): Promise<Alumnos> => {
    return new Promise((resolve, reject) => {
        const IdAlumnoBD = alumno.find((alumno) => alumno.id === id);

        !IdAlumnoBD ?
            reject(`No se ha encontrado al alumno con este id ${id} en la base de datos`) :
            resolve(IdAlumnoBD);
    });
};

const getNombreCarrera = (alumno: Alumnos): Promise<ResolveFinalCarrera> => {
    return new Promise((resolve, reject) => {
        const idCarreraBD = carrera.find((carrera) => carrera.idCarrera === alumno.idCarrera);

        !idCarreraBD ?
            reject(`No se encontro la carrera para este alumno ${alumno.idCarrera} en la bd`) :
            resolve({
                idCarrera: alumno.idCarrera,
                NombreCarrera: idCarreraBD.Carrera,
            });
        console.log(idCarreraBD);
    });
};

getIdAlumno(2)
    .then((resolve) => {
        console.log(resolve);

        getNombreCarrera(resolve)
            .then((resolve) => {
                console.log(`El nombre de la ${resolve.NombreCarrera} en la cual estudia el alumno 
        con el id ${resolve.idCarrera}`);
            })
            .catch((reject: string) => {
                console.log(reject);
            });
    })
    .catch((reject) => {
        console.error(reject);
    });

/*************************************************
Nombre del centro a la cual pertenece la carrera de Nutricion
*************************************************/

interface ResolveFinalCentroEstudios {
    idCarrera: number,
    NombreCentro: string
}

const getIdCarrera = (id: number): Promise<Carrera> => {
    return new Promise((resolve, reject) => {
        let IdCarrerasBD = carrera.find((carrera) => carrera.idCarrera === id);

        !IdCarrerasBD ?
            reject(`No se encuentra la carrera con este id ${id} en la bd`) :
            resolve(IdCarrerasBD);
    });
};

const getNombreCentroEstudios = (carrera: Carrera): Promise<ResolveFinalCentroEstudios> => {
    return new Promise((resolve, reject) => {
        let NombreCentroBD = centroestudios.find((centroestudios) => centroestudios.id ===
            carrera.idCentroEstudios);

        !NombreCentroBD ?
            reject(`No se encuentra el centro de estudios ${carrera.idCentroEstudios} en la bd`) :
            resolve({
                idCarrera: carrera.idCentroEstudios,
                NombreCentro: NombreCentroBD.Nombre,
            });

        console.log(NombreCentroBD);
    });
};

getIdCarrera(3)
    .then((resolve) => {
        console.log(resolve);

        getNombreCentroEstudios(resolve)
            .then((resolve) => {
                console.log(`El nombre del centro de la ${resolve.NombreCentro} pertence a la 
            carrera de ${resolve.idCarrera}`);
            })
            .catch((reject: string) => console.log(reject))

            .catch((reject: string) => {
                console.log(reject);
            });
    });

/*************************************************
Nombre del centro al cual pertenece la carrera del alumno Victor Lemus
*************************************************/
interface FinalCentroAlumno {
    Carrera: string,
    centroestudios: string,
    Nombre: string,
}

const getNombreAlumno = (id: number): Promise<Alumnos> => {
    return new Promise((resolve, reject) => {
        let NombreAlumnoBD = alumno.find((alumno) => alumno.id === id);

        !NombreAlumnoBD ?
            reject(`No existe el nombre con este id ${id}`) :
            resolve(NombreAlumnoBD);
    });
};

const getCarrera = (alumno: Alumnos): Promise<Carrera> => {
    return new Promise((resolve, reject) => {
        let CarrerasBD = carrera.find((carrera) => carrera.idCarrera === alumno.idCarrera);

        !CarrerasBD ?
            reject(`No se encontro una carrera con este id ${alumno.idCarrera} en la bd`) :
            resolve(CarrerasBD);
    });
};

const getCentrodeEstudios = (carrera: Carrera): Promise<FinalCentroAlumno> => {
    return new Promise((resolve, reject) => {
        let CentrodeEstudiosBD = centroestudios.find((centroestudios) => centroestudios.id
            === carrera.idCentroEstudios);

        !CentrodeEstudiosBD ?
            reject(`No coincide el centro con esta carrera ${carrera.idCentroEstudios} en la bd`) :
            resolve({
                Carrera: carrera.Carrera,
                centroestudios: CentrodeEstudiosBD.Nombre,
                Nombre: CentrodeEstudiosBD.Nombre,
            });
        console.log(CentrodeEstudiosBD);
    });
};

getNombreAlumno(4)
    .then((resolvealumno) => {
        console.log(resolvealumno);

        getCarrera(resolvealumno)
            .then((resolveCarrera) => {
                console.log(resolveCarrera);

                getCentrodeEstudios(resolveCarrera)
                    .then((resolveCentro) => {
                        console.log(`El nombre del centro ${resolveCentro.centroestudios} a la cual pertenece
            la carrera ${resolveCentro.Carrera} del alumno ${resolvealumno.Nombre}`);
                    })
                    .catch((reject: string) => console.log((reject))
                    )
                    .catch((reject: string) => {
                        console.log(reject);
                    })
            })
            .catch((reject: string) => {
                console.log(reject);
            });
    });
