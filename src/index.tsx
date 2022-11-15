import React from "react"
import ReactDOM from "react-dom/client"

import App from "./App"
import Providers from "./providers"

import { GlobalStyle } from "./style/GlobalStyle"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <Providers>
      <GlobalStyle />
      <App />
    </Providers>
  </React.StrictMode>
)
