import {Observer, interval } from "rxjs";
import {displaylog} from "../utils/utils";

const observer: Observer<any>  = {
    next:(value) => displaylog(`[Next], ${(value)}`),
    error: (error) => console.error(`[Error Observable]`, error),
    complete: () => displaylog("[Complete]"),
};
/*funcion asincrona, ya que primero ejecular los displaylog y despues el observer ya que el observer
es una funcion ilimitada hasta que uno detenga la funcion*/
const src$ = interval(3000);

displaylog("Inicio");
src$.subscribe(observer);
displaylog("Final");



