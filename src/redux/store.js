import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import filtersReducer from "./reducers/filters";
import pizzasReducer from "./reducers/pizzas";
import thunk from "redux-thunk";
import cartReducer from "./reducers/cart";

let reducers = combineReducers({
    filters: filtersReducer,
    pizzas: pizzasReducer,
    cart: cartReducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk)));
window.store = store;

export default store;