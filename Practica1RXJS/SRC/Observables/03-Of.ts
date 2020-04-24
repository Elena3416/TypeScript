import {Observer, of} from "rxjs";
import {displaylog} from "../utils/utils";

const observer: Observer<any>  = {
    next:(value) => displaylog(`[Next], ${JSON.stringify(value*10)}`),
    error: (error) => console.error(`[Error Observable]`, error),
    complete: () => displaylog("[Complete]"),
};
const obs$ = of <number> (... [1,2,3,4,5]);

displaylog("Inicio del obs");

obs$.subscribe(observer);

displaylog("Fin del obs");









