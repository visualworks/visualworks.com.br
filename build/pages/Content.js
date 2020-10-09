"use strict";
import React from "react";
import Hero from "components/main/Hero";
import About from "components/main/About";
import Subscriptions from "components/main/Subscriptions";
export default class Content extends React.Component {
    constructor(props) {
        super(props);
    }
    createContent() {
        return (React.createElement("div", null,
            React.createElement(Hero, null),
            React.createElement("section", { className: "section" },
                React.createElement("div", { className: "container" },
                    React.createElement(About, null))),
            React.createElement("section", { className: "section is-hidden" },
                React.createElement("div", { className: "container" },
                    React.createElement(Subscriptions, null)))));
    }
    render() {
        return this.createContent();
    }
}
//# sourceMappingURL=Content.js.map