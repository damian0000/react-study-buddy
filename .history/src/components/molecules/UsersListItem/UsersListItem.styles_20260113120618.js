
import { theme } from 'assets/styles/theme';
import styled from 'styled-components';

export const Wrapper = styled.li`
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

export const Average = styled.output`
    font-size: ${({ props }) => theme.fontSize.m};
    color: ${({ props }) => theme.colors.white};
    width: 34px;
    height: 34px;
    //padding: 16px 8px;
    background-color: ${({ props }) => theme.colors.success};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 10px;
    border: none;

`;