import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  body {
    min-height: 100vh;
    font-family: sans-serif;
    background-color: #fff;
    color: #000;
  }

  h1,
  h2,
  h3,
  p,
  ul {
    margin: 0;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  button {
    cursor: pointer;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyles;
