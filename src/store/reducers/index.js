import { combineReducers } from "redux";
import addDealers from './addDealers'

export default combineReducers({
    dealers: addDealers
})