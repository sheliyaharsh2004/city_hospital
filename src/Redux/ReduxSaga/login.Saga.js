import { call, put, takeEvery, all } from 'redux-saga/effects'
import { LoginApi, LoguotApi, SignupApi } from '../../common/api/login.api';
import { history } from '../../history';
import { resetAlert, setAlert } from '../Action/alert.action';
import { LoggedoutUser, LoginupUser } from '../Action/auth.action';
import * as ActionType from '../ActionType'

function* signUpSaga(action) {
   try {
      const user = yield call(SignupApi, action.payload);
      yield put(setAlert({text:user.payload, color:"success"}));
      yield put({type: ActionType.EMAIL_VERIFY, user: user});
   } catch (e) {
      yield put(setAlert({text:e.payload, color:"error"}))
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

function* loginsaga(action) {
   try {
      const user = yield call(LoginApi, action.payload);
      history.push('/')
      yield put(setAlert({text: "Login Successfully", color:"success"}));
      yield put(LoginupUser(user.user))
      console.log(user);
   } catch (e) {
      yield put(setAlert({text:e.payload, color:"error"}))
      console.log(e);
   }
}

function* loguot(action) {
   try {
      const user = yield call(LoguotApi, action.payload)
      history.push('/')
      yield put(setAlert({text: user.payload, color:"success"}));
      yield put(LoggedoutUser())
   } catch (e) {
      yield put(setAlert({text:e.payload, color:"error"}))
   }
}
 
function* watchsage() {
   yield takeEvery(ActionType.LOGIN_USER, loginsaga);
}

function* signInsaga() {
   yield takeEvery(ActionType.SIGNUP_USER, signUpSaga);
}

function* loguotsaga() {
   yield takeEvery(ActionType.LOGUOT_USER, loguot);
}

export function* loginsagaCall () {
   yield all ([
      watchsage(),
      signInsaga(),
      loguotsaga()
   ])
}