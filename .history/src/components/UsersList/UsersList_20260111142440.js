import React from 'react';
import PropTypes from 'prop-types';
import { users } from 'data/users';
import UsersListItem from 'components/UsersListItem/UsersListItem';
import styled from 'styled-components';


const Wrapper = styled.div`
    background-color: #fff;
    width: 100%;
    padding: 40px 30px;
    border-radius: 25px;
    box-shadow: 0 5px 15px -10px rgba(0,0,0,0.5);
`;

const UsersList = () => {
    return (
        <>
            <ul>
                {/* {users.map(({name, average, attendance})=>(
                    <UsersListItem/>
                ))} */}

                {users.map((userData) => (
                    <UsersListItem userData={userData} />
                ))}
            </ul>
        </>
    );
};

export default UsersList;