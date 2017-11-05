import React from "react";
import ReactDOM from "react-dom";
import Layout from "layout.jsx";

import "css/style.scss";

const layout = <Layout />;

ReactDOM.render(
    layout,
    document.getElementById("index")
);