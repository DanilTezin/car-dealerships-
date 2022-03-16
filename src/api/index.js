import { dealer  } from "./data";

const DELAY = 2000

export const getDealers = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve(dealer)
        }, DELAY)
    })
}

export const getDealerById = (id) =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            let candidate = dealer.find(e => e.id === id)
            console.log(candidate)
            if(candidate){
                resolve(candidate)
            }else{
                reject(`Нет дилера с таким id ${id}!`)
            }

        }, DELAY)
    })
}

