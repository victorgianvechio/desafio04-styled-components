import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #app {
    height: 100%;
  }

  body {
    background: #f2f2f2;
    -webkit-font-smoothing: antialiased !important;
    font-family: Arial, Helvetica, sans-serif;
  }
`;
