import React from 'react';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg';
import { StyleButton } from './Button.styles';

const alertMe = () => alert('test');

const button = () => {
    return (
        <StyleButton onClick={alertMe}>
            <DeleteIcon />
        </StyleButton>
    )
}

export default button;