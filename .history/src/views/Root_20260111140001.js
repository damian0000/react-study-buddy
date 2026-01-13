import React from 'react';
import PropTypes from 'prop-types'
import UsersList from 'components/UsersList/UsersList';
import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: #f7f8fa;
    display: flex;
`;
const Root = () => {
    return (
        <>
            <UsersList />
        </>
    );
};


export default Root;