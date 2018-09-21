import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "../App";
import { StyleSheet } from "aphrodite";

StyleSheet.rehydrate((window as any).APHRODITE_STYLES);
ReactDOM.hydrate(<App />, document.getElementById("root"));
