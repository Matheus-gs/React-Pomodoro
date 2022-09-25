import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }
`;

export const Container = styled.div`
  min-width: 100%;
  max-width: 1300px;
  height: 100vh;
  padding: 0.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #0f0c29;
  background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29);
  background: linear-gradient(to right, #24243e, #302b63, #0f0c29);
  color: #e8e8e8;
`;
