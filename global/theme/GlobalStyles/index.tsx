import { createGlobalStyle } from "styled-components";
import { AppTheme } from "../";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    overflow-y: scroll;
    scrollbar-width: none; 
    -ms-overflow-style: none; 
    ::-webkit-scrollbar { 
    width: 0;
    height: 0;
    }
  }
  
  body {
    background: ${AppTheme.colors.lightSkyBlue};
    font-family: 'sans-serif';
    padding: 20px;
  }

  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }
`;
