import {Observer, fromEvent, interval, timer} from "rxjs";
import {displaylog} from "./utils/utils";
import {sample, switchMap} from "rxjs/operators";

const observer: Observer<any>  = {
    next:(value) => displaylog(`[Next] ${JSON.stringify(value)}`),
    error: (error) => console.error(`[Error Observable]`, error),
    complete: () => displaylog("[Complete]"),
};
