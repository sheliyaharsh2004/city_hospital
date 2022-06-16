import { Input, FormFeedback } from 'reactstrap';
import styled from 'styled-components';

export const InputBoxStyle = styled(Input)`
 
`;

export const FormfeedStyle = styled(FormFeedback)`
    color:red;
    display :${props => props.error ? "block" : "none"}
`;