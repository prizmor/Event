import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import Board from "./boardReducer";

let reducers = combineReducers({
  Board: Board
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;

window.store = store;