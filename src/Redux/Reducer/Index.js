import { combineReducers } from "redux";
import { AlertReducer } from "./alert.reducer";
import { Counterreducer } from "./Counter.reducer";
import { LoginReducer } from "./login.reducer";

export const rootreducer = combineReducers({
    counter : Counterreducer,
    auth : LoginReducer,
    alert : AlertReducer
  })