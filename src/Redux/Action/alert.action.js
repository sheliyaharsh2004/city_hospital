import * as ActionType from '../ActionType'

export const setAlert = (data) => (dispatch) => {
    dispatch ({type : ActionType.SET_ALERT, payload : data})
}