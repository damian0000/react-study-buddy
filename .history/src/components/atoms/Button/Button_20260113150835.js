import React from 'react';
import PropTypes from 'prop-types'
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg';
import { StyleButton } from './Button.styles';

const alertMe = () => alert('test');

const button = () => {
    return (
        <StyleButton onClick={alert}>
            <DeleteIcon />
        </StyleButton>
    )
}

export default button;