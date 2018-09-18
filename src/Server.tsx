import * as React from 'react';
import express from 'express';
import path from 'path';
import { renderToString } from 'react-dom/server';
import { BaseLayout } from './BaseLayout';
import { StyleSheet, StyleSheetServer } from 'aphrodite/no-important';

const app = express();

app.use(express.static(path.resolve(__dirname, "../dist")));

app.get("/*", (_request, response) => {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end(htmlTemplate(<BaseLayout />));
});

app.listen(2048);
console.log("Server started on 2048");

function htmlTemplate(reactDom: React.ReactElement<any>) {
    const { html, css } = StyleSheetServer.renderStatic(() => renderToString(reactDom));

    return `
    <!DOCTYPE html>
    <HTML>
        <HEAD>
            <meta charset="utf-8">
            <title>React Server Rendered!</title>
            <style data-aphrodite>${css.content}</style>
        </HEAD>
        <BODY>
            <div id="app">${html}</div>
        </BODY>
    </HTML>
    `
}