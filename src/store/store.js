import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk  from 'redux-thunk';
import { authReducer } from "../components/auth/reducers/authReducer"
import { uiAuthReducer } from "../components/auth/reducers/UIAuthReducer";

const combinedReducers = combineReducers({
    authReducer : authReducer,
    ui: uiAuthReducer
})

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const reduxStore = createStore(combinedReducers, composeEnhancers(applyMiddleware(thunk)))