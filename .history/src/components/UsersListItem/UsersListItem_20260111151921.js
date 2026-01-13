import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';


const Wrapper = styled.li`
    display: flex;
    align-items: center;
    position: relative;

    &:not(:last-child):after{
        content: '';
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 1px;
        background-color: lightgray;
    }
`;

const StyleButton = styled.button`
    width: 40px;
    height: 40px;
    /* background-color: ${(props) => (props.isSecondary ? '#e7e044' : '#c0c7d6')};
    border-radius: ${({ isSquare }) => (isSquare ? '0px' : '50px')}; */
    background-color: #c0c7d6;
    border-radius: 50px;
    border: none;
    color: white;
`;
const UsersListItem = ({ userData: { average, name, attendance = '0%' } }) => {
    return (
        <Wrapper>
            <div>{average}</div>
            <div>
                <p>{name}</p>
                <p>{attendance}</p>
            </div>
            <StyleButton >X</StyleButton>
            <StyleButton isSecondary isSquare>X</StyleButton>
        </Wrapper>
    );
};


UsersListItem.propTypes = {
    userData: PropTypes.shape({
        average: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        attendance: PropTypes.string,

    })
}
export default UsersListItem;