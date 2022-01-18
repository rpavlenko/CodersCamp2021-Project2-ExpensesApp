import React from 'react'
import { StyledInput } from './Input.style'


const Input = ({ type, placeholder }) => {
    return (
        <StyledInput type={type} placeholder={placeholder} />
    );
};
export default Input
