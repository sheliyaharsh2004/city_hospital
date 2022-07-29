import { combineReducers } from "redux";
import { Counterreducer } from "./Counter.reducer";
import { LoginReducer } from "./login.reducer";

export const rootreducer = combineReducers({
    counter : Counterreducer,
    auth : LoginReducer
  })