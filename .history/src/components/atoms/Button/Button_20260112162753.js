import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg';
import { theme } from 'assets/styles/theme';

const StyleButton = styled.button`
    width: 40px;
    height: 40px;
    /* background-color: ${(props) => (props.isSecondary ? '#e7e044' : '#c0c7d6')};
    border-radius: ${({ isSquare }) => (isSquare ? '0px' : '50px')}; */
    background-color: ${({ props }) => theme.colors.grey};
    border-radius: 50px;
    border: none;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;

    svg{
        width: 100%;
        height: 100%;
    }
`;

const button = () => {
    return (
        <StyleButton>
            <DeleteIcon />
        </StyleButton>
    )
}

export default button;