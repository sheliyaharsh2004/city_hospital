import { call, put, takeEvery, all } from 'redux-saga/effects'
import { LoginApi, SignupApi } from '../../common/api/login.api';
import { resetAlert, setAlert } from '../Action/alert.action';
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
      console.log(user);
   } catch (e) {
      console.log(e);
   }
}
 
function* watchsage() {
   yield takeEvery(ActionType.LOGIN_USER, loginsaga);
}

function* signInsaga() {
   yield takeEvery(ActionType.SIGNUP_USER, signUpSaga);
}

export function* loginsagaCall () {
   yield all ([
      watchsage(),
      signInsaga()
   ])
}