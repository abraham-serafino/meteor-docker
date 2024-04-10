import React from "react"
import { onPageLoad } from "meteor/server-render"
import ReactDOMServer from "react-dom/server"
import { StaticRouter } from "react-router-dom/server"
import { Headers, Response } from "node-fetch"
import App from "/imports/App/App.routes";
import SerafinoModel from "/imports/Serafinos/Serafinos.model"
import noop from "/imports/util/noop"

global.Headers = Headers
global.Response = Response

const serverData = {
	App() {
		return { title: "Meteor Docker" }
	},

	"/serafinos"() {
		return { serafinos: SerafinoModel.getAll() }
	}
}

onPageLoad(async (sink) => {
	const preloadedState = {
		...serverData.App(),
		...(serverData[sink.request?.path] || noop) ()
	}

	sink.renderIntoElementById("app", ReactDOMServer.renderToString(
		<StaticRouter location={sink.request.url}><App data={preloadedState} /></StaticRouter>
	))

	sink.appendToBody(`
		<script>
			window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
		</script>
  	`)
})
