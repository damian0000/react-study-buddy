
import { theme } from 'assets/styles/theme';
import styled from 'styled-components';

export const StyleButton = styled.button`
    width: 40px;
    height: 40px;
    /* background-color: ${(props) => (props.isSecondary ? '#e7e044' : '#c0c7d6')};
    border-radius: ${({ isSquare }) => (isSquare ? '0px' : '50px')}; */
    background-color: ${({ props }) => theme.colors.grey};
    border-radius: 50px;
    border: none;
    color: white;
    margin-left: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    svg{
        width: 100%;
        height: 100%;
    }
`;