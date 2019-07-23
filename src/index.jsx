import "./scss/style.scss";
import React from "react";
import ReactDOM from "react-dom";
import Layout from "./components/Layout";

const layout = <Layout />;
const targetDiv = document.getElementById("app");
ReactDOM.render(layout, targetDiv);