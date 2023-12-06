import styled from 'styled-components';

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  position: fixed;
`;

export const Spinner = styled.div`
  border: 4px solid #f3f3f3; /* Light gray border */
  border-top: 4px solid #3498db; /* Blue border on top */
  border-radius: 50%; /* Make it round */
  width: 30px;
  height: 30px;
  animation: spin 1s linear infinite; /* Apply rotation animation */
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;