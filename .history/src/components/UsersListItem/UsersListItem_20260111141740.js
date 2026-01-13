import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';


const Wrapper = styled.div`
    background-color: #fff;
    width: 25%;
    padding: 40px 30px;
    border-radius: 25px;
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