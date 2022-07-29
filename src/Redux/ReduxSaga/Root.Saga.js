import { all } from "redux-saga/effects";
import { loginsagaCall } from "./login.Saga";


export function* rootSaga () {
    yield all ([loginsagaCall()])
}