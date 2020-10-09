"use strict";
import React from "react";
import Header from "pages/Header";
import Content from "pages/Content";
import Footer from "pages/Footer";
export default class Layout extends React.Component {
    constructor(props) {
        super(props);
    }
    createContent() {
        return (React.createElement("div", null,
            React.createElement(Header, null),
            React.createElement(Content, null),
            React.createElement(Footer, null)));
    }
    render() {
        return this.createContent();
    }
}
//# sourceMappingURL=Layout.js.map