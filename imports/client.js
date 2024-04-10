import React from "react"
import * as ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { onPageLoad } from "meteor/server-render"
import App from "/imports/App/App.routes"

onPageLoad(() => {
    const preloadedState = window.__PRELOADED_STATE__
    delete window.__PRELOADED_STATE__

    ReactDOM.hydrateRoot(
        document.getElementById("react-target"),
        <BrowserRouter><App data={preloadedState} /></BrowserRouter>
    )
})
