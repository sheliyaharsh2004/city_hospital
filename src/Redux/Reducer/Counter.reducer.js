import * as ActionType from '../ActionType'

const initalstate = {
    counter : 0
}

export const Counterreducer  = (state=initalstate , action) => {

    switch (action.type) {
        case ActionType.INCREMENT_COUNTER :
            return {
                ...state,
                counter : state.counter +1
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