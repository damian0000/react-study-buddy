import React from 'react';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg';
import { StyleButton } from './Button.styles';


const button = (props) => {
    return (
        <StyleButton {...props}>
            <DeleteIcon />
        </StyleButton>
    )
}

export default button;