import { call, put, takeEvery } from 'redux-saga/effects'
import * as ActionType from '../ActionType'

function* fetchUser(action) {
    try {
       const user = yield call(LoginApi(), action.payload);
       yield put({type: ActionType.EMAIL_VERIFY, user: user});
    } catch (e) {
       yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
}
 
function* mySaga() {
    yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
}

 export default mySaga;