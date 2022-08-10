import * as ActionType from '../ActionType'

const initialState ={
    isLoading: false,
    user: null,
    error: ''
}

export const LoginReducer = (state = initialState, action) => {
    switch(action.type){
        case ActionType.LOGINUP_USER :
            return {
                ...state,
                isLoading: false,
                user: action.payload,
                error: ''
            }
        default :
            return state;
    }
}