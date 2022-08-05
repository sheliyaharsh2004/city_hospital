import * as ActionType from '../ActionType'

const initalstate = {
    text : "",
    color : ""
}

export const AlertReducer  = (state=initalstate , action) => {

    switch (action.type) {
        case ActionType.SET_ALERT :
            return {
                ...state,
                text: action.payload.text ,
                color: action.payload.color
            }
        case ActionType.RESET_ALERT :
            return {
                ...state,
                text: '',
                color: ''
            }   
        default : 
            return state;     
    }
}