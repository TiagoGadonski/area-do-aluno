import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    width: 100%;
    font-family: Arial, sans-serif; 
  }
`;

export const ContainerNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 30px;
`;

export const ContainerImagem = styled.div`
  height: 300px;
  width: 100%;
  background-color: #30a7a0;
`;

export const Container = styled.div`
  display: flex;
`;
