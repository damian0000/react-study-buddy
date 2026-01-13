
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
    font-size: 24px;
    font-weight: bold;
    color: #2f80ed;
    margin-right: 16px;
`;