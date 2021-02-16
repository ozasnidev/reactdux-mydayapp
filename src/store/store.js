import { createStore, combineReducers } from "redux";
import { authReducer } from "../components/auth/reducers/authReducer"

const combinedReducers = combineReducers({
    authReducer
})

export const reduxStore = createStore(combinedReducers)