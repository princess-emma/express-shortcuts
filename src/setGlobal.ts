import { RequestHandler } from "express";

type Fn = ((...args: any[]) => RequestHandler);
type FnMeta = { name: string, fn: Fn };
type Fns = FnMeta[];

function inject(fns: Fns) {
    let injected = false;
    return function() {
        if(injected) return;
        injected = true;
        for(const { fn, name } of fns) {
            Object.defineProperty(global, name, {
                value: fn,
                writable: false
            })
        }
    }
}
function load(...fns: Fns) {
    return inject(fns);
}


export default load;
