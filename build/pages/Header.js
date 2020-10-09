"use strict";
import React from "react";
import Navbar from "components/main/Navbar";
export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    createContent() {
        return (React.createElement("header", null,
            React.createElement("nav", { className: "navbar has-background-primary", role: "navigation", "aria-label": "main navigation" },
                React.createElement(Navbar, null))));
    }
    render() {
        return this.createContent();
    }
}
//# sourceMappingURL=Header.js.map