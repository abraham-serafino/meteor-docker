import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { onPageLoad } from "meteor/server-render"
import App from "/imports/App/App.page"

import "@mantine/core/styles.css"

onPageLoad(() => {
  ReactDOM.createRoot(document.getElementById("react-target")).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
})
