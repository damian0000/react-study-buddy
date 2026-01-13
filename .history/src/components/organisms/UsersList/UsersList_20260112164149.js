import React from 'react';
import PropTypes from 'prop-types';
import { users } from 'data/users';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper, StyledList } from './UsersList.styles';

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