import React from "react"
import { onPageLoad } from "meteor/server-render"
import ReactDOMServer from "react-dom/server"
import { StaticRouter } from "react-router-dom/server"
import App from "/imports/App/App.page"

onPageLoad(async (sink) => {
  sink.renderIntoElementById(
    "app",
    ReactDOMServer.renderToString(
      <StaticRouter location={sink.request.url}>
        <App />
      </StaticRouter>
    )
  )
})
