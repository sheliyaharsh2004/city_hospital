import React from 'react';
import { FormfeedStyle, InputBoxStyle } from './inputbox.style';

function InputBox({children , error=false , errormessage="" , ...rest}) {
    return (
        <>
            <InputBoxStyle {...rest}>
                {children}
            </InputBoxStyle >
        
            <FormfeedStyle error={error}>
                {errormessage}
            </FormfeedStyle>
        </>
    );
}

export default InputBox;