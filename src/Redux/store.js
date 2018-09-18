import { createStore } from 'redux'
import streamApp from "./Reducers/modelReducer"

const store = createStore(
        streamApp,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default store;
