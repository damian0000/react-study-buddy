import React from 'react';
import PropTypes from 'prop-types'
import UsersList from 'components/organisms/UsersList/UsersList';
import styled from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';

const Wrapper = styled.div`
    background-color: #f7f8fa;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`;
const Root = () => {
    return (
        <>
            <GlobalStyle>
                <Wrapper>
                    <UsersList />
                </Wrapper>
            </GlobalStyle>
        </>
    );
};


export default Root;