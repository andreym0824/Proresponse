import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import createReducer from "./createReducer";
import { useDispatch as useReduxDispatch, useSelector as useReduxSelector } from "react-redux";

const InitStore = (initialState = {}) => {
    const reducer = createReducer();

    const composeEnhancers = composeWithDevTools({
        trace: true,
        traceLimit: 25,
    });

    const store = createStore(
        reducer,
        initialState,
        composeEnhancers(applyMiddleware(thunk))
        // composeWithDevTools(applyMiddleware(thunk))
    );

    return store;
};

export const useSelector = useReduxSelector;

export const useDispatch = () => useReduxDispatch();

export const store = InitStore();
