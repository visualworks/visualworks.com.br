"use strict";
import React from "react";
export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return this.createContent();
    }
    createContent() {
        return (React.createElement("div", { className: "container" },
            this.createLogo(),
            this.createMenu()));
    }
    createLogo() {
        const logo = (React.createElement("h1", { className: "logo title is-1 is-size-2-mobile" },
            React.createElement("a", { className: "navbar-item", href: "https://www.visualworks.com.br", rel: "external,noopener,noreferrer" }, "Visual Works")));
        return (React.createElement("div", { className: "navbar-brand" }, logo));
    }
    createMenu() {
        return (React.createElement("div", { className: "navbar-menu is-hidden-mobile" },
            React.createElement("div", { className: "navbar-end" },
                React.createElement("div", { className: "navbar-item is-hidden" },
                    React.createElement("button", { className: "button", disabled: true, title: "Em breve" },
                        React.createElement("span", { className: "icon is-small" },
                            React.createElement("i", { className: "fas fa-user" })),
                        React.createElement("span", null, "Minha Conta"))),
                React.createElement("a", { className: "navbar-item", href: "https://linkedin.com/in/henriqueamattos", target: "_blank" },
                    React.createElement("span", { className: "icon" },
                        React.createElement("i", { className: "fab fa-linkedin" }))),
                React.createElement("a", { className: "navbar-item", "data-social-network": "Twitter", "data-social-action": "tweet", "data-social-target": "https://www.visualworks.com.br", target: "_blank", href: "https://twitter.com/henriqueamattos", rel: "external,noopener,noreferrer" },
                    React.createElement("span", { className: "icon" },
                        React.createElement("i", { className: "fab fa-twitter" }))),
                React.createElement("a", { className: "navbar-item", href: "https://github.com/visualworks", target: "_blank", rel: "external,noopener,noreferrer" },
                    React.createElement("span", { className: "icon" },
                        React.createElement("i", { className: "fab fa-github" }))),
                React.createElement("a", { className: "navbar-item", href: "https://facebook.com/visualworks.web", target: "_blank", rel: "external,noopener,noreferrer" },
                    React.createElement("span", { className: "icon" },
                        React.createElement("i", { className: "fab fa-facebook" }))))));
    }
}
//# sourceMappingURL=Navbar.js.map