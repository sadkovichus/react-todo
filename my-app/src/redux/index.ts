import { createStore, combineReducers } from "redux";
import { MainReducer } from "./reducers/MainReducer";

export const store = createStore(MainReducer);