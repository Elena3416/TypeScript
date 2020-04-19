/**
 * If Ternario
 * Nose puede utilizar cuando solo queremos el if, 
 * tiene que tener el true and false or false = null
 */

//  const NumeroRandom = Math.floor(Math.random() * 10);
//  console.log(NumeroRandom);

//  if(NumeroRandom>=6){
//      alert(`Pasaste con calificacion ${NumeroRandom}`);
//  }else{
//      alert(`No pasaste con calificacion ${NumeroRandom}`);
//  }
 //Ternario Basico
//  NumeroRandom>=6? 
//  alert(`Pasaste con calificacion ${NumeroRandom}`)
//  :alert(`No pasaste con calificacion ${NumeroRandom}`);;

let Numero = 11;

let NumeroObtenido = Numero == 5 || Numero == 10 ? "Cinco" 
                : Numero == 7 ? "Siete"
                : Numero == 11 ? "Once"
                : "Es otro numero";

if(Numero == 5){
    NumeroObtenido = "Cinco";
}else if(Numero== 7){
    NumeroObtenido = "Siete";
}else if(Numero == 11){
    NumeroObtenido = "Once"
}else{
    NumeroObtenido = "Es otro numero";
} //Esto representa la condicion de arriba

console.log(NumeroObtenido);



 /**
  * == ===
  * != !==
  * >= >==
  * <= <== 
  * los operadores de la izq comparan el valor de la variable y los operadores 
  * de la derecha comparan si contiene el mismo aparte del valor tipo de dato */                            

  let x: number = 7;
  let y:number = 7;

  x=== y ? 
  alert('Los valores sin operacion restrictivo son iguales') : 
  alert('Los valores con operacion restrictivo no son iguales');