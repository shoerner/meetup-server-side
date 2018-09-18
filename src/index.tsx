import express from 'express';
import path from 'path';
import * as React from 'react';
import { renderToString } from 'react-dom/server';

const app = express();

app.use(express.static(path.resolve(__dirname, "../dist")));

app.get( "/*", (request, response) => {
    const reactDom = renderToString(<BaseLayout />);

    response.writeHead(200, {"Content-Type": "text/html"});
    response.end(htmlTemplate(reactDom));
});

app.listen(2048);

function htmlTemplate(reactDom: React.ReactNode) {
    return `
        <!DOCTYPE html>
        <HTML>
            <HEAD>
                <meta charset="utf-8">
                <title>React Server Rendered!</title>
            </HEAD>
            <BODY>
                <div id="App"> ${reactDom}</div>
                <script src="./app.bundle.js"></script>
            </BODY>
        </HTML>
    `
}