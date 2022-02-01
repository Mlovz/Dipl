import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #000;
  }
  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;
    width: 100%;
    height: 100%;
  }
  *, button, input {
    border: 0;
    background: none;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, Arial, sans-serif;
  }
  html {
    background: var(--primary);
  }
  body{
    background: var(--gray_bg);
  }
  a{
    text-decoration: none;
  }
  input, button{
    outline: none;
    border: none;

  }
  :root {
    --white: #fff;
    --twitter: #33A1F2;
    --gray: #dbdbdb;
    --gray_light: #f7f9f9;
    --gray_dark: #eff3f4;
    --orange: #ff4d00;
    --gray_bg: #f2f4f5;
  }
`;
