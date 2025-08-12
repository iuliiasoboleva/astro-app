import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root { color-scheme: dark; }

  *, *::before, *::after { box-sizing: border-box; }

  html, body, #root { height: 100%; }

  body {
    margin: 0;
    background: white;
    color: black;
    font-family: 'Inter Tight', system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica, Arial, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a { color: inherit; text-decoration: none; }
  button { font: inherit; cursor: pointer; }
  ::selection { background: white; color: #fff; }
`;
