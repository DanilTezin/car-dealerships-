import { ADD_DEALERS } from "../actionTypes";

let initialState = []


export default function addDealers(state = initialState, action){

    switch (action.type) {
        case ADD_DEALERS:
            return [...state, ...action.payload ]
        default:
            break;
    }
    return state
}