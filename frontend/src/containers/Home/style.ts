import styled from "styled-components";

export const Home = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  margin-top: 50px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  gap: 16px;
`;

export const SearchForm = styled.form`
  display: flex;
  gap: 20px;
`;

export const SearchButton = styled.button`
  background:  ${({ theme: { colors } }) => colors.lightPrimary};
  border: none;
  border-radius: 8px;
  padding: 0px 16px;
  color: white;
  &:hover {
    background:  ${({ theme: { colors } }) => colors.primary};
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  grid-gap: 10px;
  padding: 10px;
  background: ${({ theme: { colors } }) => colors.lightGray};
  border-radius: 8px;
  @media (max-width: 1440px) {
    grid-template-columns: auto auto auto;
  }
  @media (max-width: 960px) {
    grid-template-columns: auto auto;
  }
  @media (max-width: 640px) {
    grid-template-columns: auto;
  }
`;

export const Pagination = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const Select = styled.select`
  min-width: 80px;
  width: max-content;
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: ${({ theme: { colors } }) => colors.white};
  color: ${({ theme: { colors } }) => colors.titan};
  outline: none;
  transition: border-color 0.3s;
  &:hover,
  &:focus {
    border-color: #66afe9;
  }
`;

export const Option = styled.option`
  background-color: ${({ theme: { colors } }) => colors.white};
  color: ${({ theme: { colors } }) => colors.titan};
  padding: 10px;
`;

export const Page = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const PageButton = styled.button`
  border: none;
  border-radius: 8px;
  padding: 10px;
  transition: all;
  transition-duration: 200ms;
  &:hover {
    background:  ${({ theme: { colors } }) => colors.gray};
    color: white;
  }
`;

interface ModalProps {
  toggle: string | null;
}

export const Modal = styled.div<ModalProps>`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(8px);
  transition: all;
  transition-duration: 200ms;
  opacity: ${(props) => (props.toggle ? 1 : 0)};
  pointer-events: ${(props) => (props.toggle ? "auto" : "none")};
`;

export const ModalCard = styled.div`
  background-color: #fefefe;
  margin: 150px auto;
  border: 1px solid #888888;
  border-radius: 8px;
  width: 60%;
  max-height: 640px;
`;

export const ModalHeader = styled.div`
  border-radius: 8px 8px 0px 0px;
  border-bottom: 1px solid #888888;
  padding: 24px;
  text-align: left;
`;

export const ModalBody = styled.textarea`
  padding: 24px;
  text-align: left;
  width: -webkit-fill-available;
  height: 456px;
  resize: none;
  border: none;
  color: black;
`;

export const ModalFooter = styled.div`
  border-radius: 0px 0px 8px 8px;
  border-top: 1px solid #888888;
  padding: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CloseButton = styled.button`
  border: none;
  background:  ${({ theme: { colors } }) => colors.lightRed};
  color: white;
  padding: 8px;
  border-radius: 4px;
  transition: all;
  transition-duration: 200ms;
  &:hover{
    background:  ${({ theme: { colors } }) => colors.red};
  }
`