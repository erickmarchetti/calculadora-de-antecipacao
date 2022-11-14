import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap');

    * {
      box-sizing: border-box;
      font-family: 'Source Sans Pro', sans-serif;
      margin: 0;
      padding: 0;
      border: 0;
      outline: 0;
    }

    #root {
      width: 100%;
      height: 100%;
    }

    body {
      width: 100vw;
      height: 100vh;
      background-color: var(--background-body);
    }

    button {
      cursor: pointer;
    }

    a {
      text-decoration: none;
    }

    ul, ol, li {
      list-style: none;
    }

    :root {
      --background-body: #F2F2F2;
      --container-border: #D1DCE3;
      --background-list: #D1DCE32E;
      --input-focus: #66AFE9;
      --input-border: #DDE6E9;
      --input-error: #E5534B;
      --text-default: #656565;
      --title-list: #3D75BB;
      --text-list: #5D9CEC;
    }
`
