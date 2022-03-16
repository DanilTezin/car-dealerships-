import { ADD_DEALERS } from "../actionTypes";


export function addDealersAC(dealers){
    return {
        type: ADD_DEALERS,
        payload: dealers
    }
}