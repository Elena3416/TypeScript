/*************************************************
Demostracion de funcion sincrona
Funcion sincrona, realiza todas las funciones, pero las realiza de acuerdo al orden que se 
tiene, y las otras funciones tienen que esperar a que termine la primera funcion 
*************************************************/
function primera(){
    setTimeout(() => {
        console.log('Primera Función');
    }, 1000);
};

function segunda(){
    setTimeout(() => {
        
    }, 5000);
    console.log('Segunda Función');
}

function tercera(){
    setTimeout(() => {
        console.log('Tercera Función');
    }, 2000);
}

primera();
segunda();
tercera();

/*************************************************
Funcion Asincrona
 Realiza todas las funciones, y esta vez no se tiene que esperar a que termine la primera 
 funcion para continuar con las demas funciones.
Termina la funcion mas rapida
*************************************************/

