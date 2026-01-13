import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';


const Wrapper = styled.div`
    background-color: #fff;
    width: 100%;
    padding: 40px 30px;
    border-radius: 25px;
    box-shadow: 0 5px 15px -10px rgba(0,0,0,0.5);
`;

const UsersListItem = ({ userData: { average, name, attendance = '0%' } }) => {
    return (
        <Wrapper>
            <li>
                <div>{average}</div>
                <div>
                    <p>{name}</p>
                    <p>{attendance}</p>
                </div>
                <button>
                    X
                </button>
            </li></Wrapper>
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