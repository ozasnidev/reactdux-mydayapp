import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk  from 'redux-thunk';
import { authReducer } from "../components/auth/reducers/authReducer"

const combinedReducers = combineReducers({
    authReducer : authReducer
})

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const reduxStore = createStore(combinedReducers, composeEnhancers(applyMiddleware(thunk)))