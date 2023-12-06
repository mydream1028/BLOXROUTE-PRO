import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  width: 420px;
  box-shadow: rgb(0 0 0 /16%) 1px 1px 10px;
  padding: 30px 0px;
  border-radius: 8px;
`;

export const FormContent = styled.div`
  padding: 0px 12%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const FormTitle = styled.h1`
  text-align: center;
  font-weight: 700;
`;

export const FormButton = styled.button`
  border: none;
  color: white;
  padding: 12px 0px;
  font-size: large;
  background:  ${({ theme: { colors } }) => colors.lightPrimary};
  transition: all;
  border-radius: 8px;
  &:hover {
    background:  ${({ theme: { colors } }) => colors.primary};
  }
`;
