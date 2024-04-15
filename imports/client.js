import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { onPageLoad } from "meteor/server-render"
import App from "/imports/App/App.routes"

onPageLoad(() => {
  const preloadedState = window.__PRELOADED_STATE__
  delete window.__PRELOADED_STATE__

  ReactDOM.createRoot(document.getElementById("react-target")).render(
    <BrowserRouter>
      <App data={preloadedState} />
    </BrowserRouter>
  )
})
