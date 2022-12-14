import { createGlobalStyle } from "styled-components";

export const GlobaStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }

  html {
    min-height: 100vh;
  }

  body {
    background-color: #f4f5f7;
  }
`;
