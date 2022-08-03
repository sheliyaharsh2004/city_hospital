import { color } from '@mui/system'
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
                text ,
                color
            }
        case ActionType.DECREMENT_COUNTER :
            return {
                ...state,
                counter : state.counter -1
            }   
        default : 
            return state;     
    }
}