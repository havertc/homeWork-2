import { combineReducers, createStore } from "redux";
import counterReducer from "./reducers/counterReducer";
import todoReducer from "./reducers/todoReducer";

const root=combineReducers({
    counter:counterReducer,
    todos:todoReducer
})

const store=createStore(root)

export default store