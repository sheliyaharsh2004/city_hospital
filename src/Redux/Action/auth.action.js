import * as ActionType from '../ActionType'

export const LoginUser = (data) => (disaptch) => {
    disaptch({type : ActionType.LOGIN_USER, payload : data})
}

export const EmailVerify = (user) => (disaptch) => {
    disaptch({type : ActionType.EMAIL_VERIFY, payload : user})
}