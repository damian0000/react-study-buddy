import React from 'react';
import PropTypes from 'prop-types'
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg';
import { StyleButton } from './Button.styles';

const button = () => {
    return (
        <StyleButton>
            <DeleteIcon />
        </StyleButton>
    )
}

export default button;