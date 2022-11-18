import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

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
      --input-error: #F71735;
      --text-default: #656565;
      --background-list: #D1DCE32E;
      --title-list: #3D75BB;
      --text-list: #5D9CEC;
      --background-modal: #f2f2f2ab;
    }
`
