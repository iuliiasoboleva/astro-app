import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
  --font-inter: "Inter Tight", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  --font-sfpro: "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --vh: 1vh;
}

  *, *::before, *::after { box-sizing: border-box; }

* {
  -webkit-tap-highlight-color: transparent;
}

  html, body, #root { height: 100%; }

  body, h1, h2, h3, h4, h5, h6,
  p, figure, blockquote, dl, dd,
  ul, ol, menu { margin: 0; }

  body {
  font-family: var(--font-inter);
    font-weight: 500;
    font-size: 14px;
    line-height: 1.3; 
    color: #ffffff; 
    background: #ffffff;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow: hidden;
   overscroll-behavior: none;
  }

  ul[role="list"],
  ol[role="list"],
  ul, ol { list-style: none; padding-left: 0; }

  a { color: inherit; text-decoration: none; }

  button, input, optgroup, select, textarea {
    font: inherit;
    color: inherit;
    letter-spacing: inherit;
    background: transparent;
  }

  button {
    border: none;
    padding: 0;
    cursor: pointer;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, select, textarea {
  font-size: 14px;
}
`;
