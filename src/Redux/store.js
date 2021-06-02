import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { authReducer } from "./auth/reducer";
import { todoReducer } from "./todo/reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    todo: todoReducer,
});

const reduxLogger1 = (store) => (next) => (action) => {
    console.log("Before Dispatch, logger 1 ", action, store.getState());
    const val = next(action);
    console.log("Executed next MIDDLEWARE in Logger 1", store.getState());
    return val;
};

const reduxLogger2 = (store) => (next) => (action) => {
    console.log("Before Dispatch, logger 2 ", action, store.getState());
    const val = next(action);
    console.log("Executed next MIDDLEWARE in Logger 2", store.getState());
    return val;
};

export const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(reduxLogger1, reduxLogger2),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
);
