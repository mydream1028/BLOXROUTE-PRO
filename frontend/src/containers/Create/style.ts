import styled from 'styled-components';

export const Container = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 40px;
    height: 100%;
`;

export const Row = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 20px;
`

export const CreateButton = styled.button`
    padding: 16px;
    border-radius: 8px;
    width: 160px;
    background:  ${({ theme: { colors } }) => colors.lightPrimary};
    border: none;
    color: white;
    &:focus{
        outline: none;
    };
    &:hover{
        background:  ${({ theme: { colors } }) => colors.primary};
    };
`;
