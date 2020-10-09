"use strict";
import React from "react";
export default class Hero extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return this.createContent();
    }
    createContent() {
        return (React.createElement("section", { className: "hero is-large bg-hero-computing" },
            React.createElement("div", { className: "hero-body" },
                React.createElement("div", { className: "container" },
                    React.createElement("h1", { className: "title" }, "Web & Mobile"),
                    React.createElement("h2", { className: "subtitle" }, "consultoria, desenvolvimento e hospedagem")))));
    }
}
//# sourceMappingURL=Hero.js.map