
import { theme } from 'assets/styles/theme';
import styled from 'styled-components';

export const Wrapper = styled.li`
    display: flex;
    align-items: center;
    position: relative;
    margin: 30px 0;

    &:not(:last-child):after{
        content: '';
        position: absolute;
        bottom: -15px;
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
    background-color: ${({ $value, theme }) => {
        if (Number.isNaN($value)) return theme.colors.warning;
        if ($value < 3) return theme.colors.error;
        if ($value < 4.5) return theme.colors.warning;
        return theme.colors.success;
    }};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 15px;
    border: none;

`;

export const Name = styled.p`
    font-size: ${({ props }) => theme.fontSize.l};
    color: ${({ props }) => theme.colors.darkGrey};
    margin: 0;

`;

export const Attendance = styled.p`
    font-size: ${({ props }) => theme.fontSize.s};
    color: ${({ props }) => theme.colors.darkGrey};
    margin: 0;

`;