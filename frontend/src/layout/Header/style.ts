import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    background: ${({ theme: { colors } }) => colors.darkGray};
    color:  ${({ theme: { colors } }) => colors.white};
    padding: 4px 16px;
`

export const StyledLogo = styled.div`
    font-size: large;
`

export const StyledNav = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    gap: 8px;
`

export const HeaderLink = styled(Link)`
    padding:4px 8px;
    border: none;
    text-decoration: none;
    color:  ${({ theme: { colors } }) => colors.white};
    border-radius: 8px;
    &:hover{
        background: ${({ theme: { colors } }) => colors.gray};
    };
`

export const HeaderButton = styled.button`
    padding:4px 8px;
    border: none;
    background: none;
    color:  ${({ theme: { colors } }) => colors.white};
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 16px;
    border-radius: 8px;
    &:hover{
        background: ${({ theme: { colors } }) => colors.gray};
    };
`