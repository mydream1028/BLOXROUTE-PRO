import styled from "styled-components";

export const StyledFormInput = styled.input`
  padding: 12px;
  border: 1px solid ${({ theme: { colors } }) => colors.gray};
  border-radius: 8px;
  color: ${({ theme: { colors } }) => colors.gray};
  font-size: large;
  &:focus {
    outline-color: ${({ theme: { colors } }) => colors.lightPrimary};
  }
`;

export const StyledForm = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 10px;
`;

export const StyledError = styled.p`
  text-align: center;
  color: red;
  font-size: medium;
`;
