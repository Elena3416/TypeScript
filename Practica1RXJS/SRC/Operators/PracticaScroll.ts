import {displaylog, lorem} from "../utils/utils";
import {pluck,map,tap} from "rxjs/operators";
import {fromEvent } from "rxjs";
/*************************************************
Crear el navbar desde typescript
*************************************************/
const ul = document.createElement('ul');
ul.classList.add("navbar");
const ArrayLinks:Array<string> = ['Inicio', 'Sobre Nosotros', 'Productos', 'Contactanos'];

ArrayLinks.forEach((link) => {
    const li = document.createElement('li');
    li.innerText = link;
    ul.appendChild(li);
});
document.querySelector('body')?.insertBefore(ul,document.querySelector('h1'));

/*************************************************
crear el navbar
*************************************************/
const progressBar = document.createElement('div');
progressBar.classList.add('progress-bar');
document.querySelector('body')?.insertBefore(progressBar, document.querySelector('h1'));

/*************************************************
Crear el parrafo
*************************************************/
const p = document.createElement('p');
p.innerText= lorem;
displaylog(p.innerText);

/*************************************************
Clientheight el tamaño de la pantalla del scroll
scroptop, con referencia al top de la pagina cuanto se ha movido el scroll
*************************************************/
//Mostrar la info del scroll
const scroll$ = fromEvent(document,"scroll");

//funcion que realice el calculo
const calcularScroll = (event:any) => {
    const {scrollTop, scrollHeight, clientHeight} = event; 
    console.log(scrollTop, scrollHeight,clientHeight);
    return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

scroll$.pipe(
pluck('target', "documentElement"), //Tenias solo document y es documentElement
map((eventFilter:any) => calcularScroll(eventFilter)),
tap((value) => console.log(value))
).subscribe((porcentaje) => {
    if(porcentaje >= 1){
        ul.style.display = "flex";
    }else{
        ul.style.display = "none";
    }
    ul.style.display = "none";
    progressBar.style.width = `${porcentaje}%`;
});

