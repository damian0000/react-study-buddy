import React from 'react';
import PropTypes from 'prop-types';
import { users } from 'data/users';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import styled from 'styled-components';


const Wrapper = styled.div`
    background-color: #fff;
    width: 100%;
    max-width: 500px;
    padding: 40px 30px;
    border-radius: 25px;
    box-shadow: 0 5px 15px -10px rgba(0,0,0,0.5);
`;

const StyledList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;
const UsersList = () => {
    return (
        <Wrapper>
            <StyledList>
                {/* {users.map(({name, average, attendance})=>(
                    <UsersListItem/>
                ))} */}

                {users.map((userData) => (
                    <UsersListItem userData={userData} />
                ))}
            </StyledList>
        </Wrapper>
    );
};

export default UsersList;