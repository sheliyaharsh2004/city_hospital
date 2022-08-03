import React, { useEffect } from 'react';
import { useSnackbar } from 'notistack';
import { useSelector, useDispatch } from 'react-redux';

function Alert(props) {

    const alert = useSelector(state => state.alert)
    const dispatch = useDispatch()
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    useEffect(() => {
        if(alert.text !== ""){
            enqueueSnackbar(alert,{
                anchorOrigin : {
                    vertical: 'top',
                    horizontal: 'left',
                }
            })
        }
    },[alert.text])

    return (
        <div>
            
        </div>
    );
}

export default Alert;