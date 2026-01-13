import React from 'react';
import PropTypes from 'prop-types'
import UsersList from 'components/organisms/UsersList/UsersList';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';

const Wrapper = styled.div`
    background-color: ${({ props }) => theme.colors.lightGrey};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`;
const Root = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Wrapper>
                <UsersList />
            </Wrapper>
        </ThemeProvider>
    );
};


export default Root;