import * as React from "react";
import express from "express";
import path from "path";
import { App } from "./App";
import { renderToString } from "react-dom/server";
import { StyleSheetServer } from "aphrodite/no-important";

const APP_ASSIGNED_PORT = 2048;
const app = express();

app.use(express.static(path.resolve(__dirname, "../dist")));

app.get("/*", (_request, response) => {
	response.writeHead(200, { "Content-Type": "text/html" });
	response.end(htmlTemplate(<App />));
});

app.listen(APP_ASSIGNED_PORT);
// tslint:disable-next-line:no-console
console.log("Server started on", APP_ASSIGNED_PORT);

function htmlTemplate(reactDom: React.ReactElement<any>) {
	const { html, css } = StyleSheetServer.renderStatic(() => renderToString(reactDom));
	const stringifiedCss = JSON.stringify(css.renderedClassNames);

	return `
	<!DOCTYPE html>
	<HTML lang="en">
		<HEAD>
			<meta charset="utf-8">
			<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
			<title>React Server Rendered!</title>
			<style data-aphrodite>${css.content}</style>
			<style>
				body {
					margin: 0;
					padding: 0;
					font-family: sans-serif;
				}
			</style>
		</HEAD>
		<BODY>
			<div id="root">${html}</div>
			<script>
				window.APHRODITE_STYLES = ${stringifiedCss};
			</script>
			<script src="./app.bundle.js"></script>
		</BODY>
	</HTML>
	`;
}
