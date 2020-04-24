import {Observer, fromEvent} from "rxjs";
import {displaylog} from "./../utils/utils";

const observer: Observer<any>  = {
    next:(value) => console.log(`[Next], ${(value)}`),
    error: (error) => console.error(`[Error Observable]`, error),
    complete: () => displaylog("[Complete]"),
};

const src1$ = fromEvent <MouseEvent> (document, "click"); // es parecido a la funcion add eventlistener
const src2$ = fromEvent <KeyboardEvent> (document, "keyup"); //cuando se presiona una tecla

src1$.subscribe((value) => {
    console.log(value.x);
    console.log(value.y);
});

src1$.subscribe(({x,y}) => {
    console.log(x);
    console.log(y);
});

src2$.subscribe ((event)=> {
    console.log(event.keyCode);
});
//estructuracion
src2$.subscribe (({keyCode})=> {
    console.log(keyCode);
});

