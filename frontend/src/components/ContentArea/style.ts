import styled from "styled-components";

export const StyledContentArea = styled.textarea`
    padding: 8px 16px;
    height: 100%;
    border-radius: 8px;
    resize: vertical;
    &:focus{
        outline: none;
    };
`

export const StyledForm = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  gap: 10px;
`;

export const StyledError = styled.p`
  text-align: center;
  color: red;
  font-size: medium;
`;
