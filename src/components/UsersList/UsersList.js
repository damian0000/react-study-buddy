import React from 'react';
import PropTypes from 'prop-types';
import {users} from 'data/users';
import UsersListItem from 'components/UsersListItem/UsersListItem';

const UsersList = () => {
    return (
        <div>
            <ul>
                {/* {users.map(({name, average, attendance})=>(
                    <UsersListItem/>
                ))} */}

                {users.map((userData)=>(
                    <UsersListItem userData={userData}/>
                ))} 
            </ul>
        </div>
    );
};

export default UsersList;