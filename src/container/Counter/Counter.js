import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementcounter, decrementcounter } from '../../Redux/Action/Counter.action';

function Counter(props) {

    const dispatch = useDispatch()
    const con = useSelector(state => state.counter)

    const handleincrementcounter =() => {
        dispatch(incrementcounter())
    }
    const handledecremetcounter =() => {
        dispatch(decrementcounter())
    }

    return (
        <div className="text-center container d-flex align-items-center">
            <button 
                className="appointment-btn border-0 m-2"
                type="button"   
                onClick={()=> handleincrementcounter()}>
                <b>+</b>
            </button>
            <b><p className='mb-2 mt-2'>{con.counter}</p></b>
            <button 
                className="appointment-btn border-0 m-2" 
                type="button"
                onClick={()=> handledecremetcounter()}>
                <b>-</b>
            </button>
        </div>
    );
}

export default Counter;