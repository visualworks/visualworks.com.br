"use strict";
import React from "react";
export default class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            priceDomain: 7.00,
            priceDomainCom: 13.00,
            priceDomainComBr: 7.00,
            priceHostingStatic: 3.50,
            priceHostingDynamic: 5.50,
            priceEmail: 6.50,
            priceTotalYearly: 0.00,
            priceTotalMonthly: 0.00,
            disabledFormSubscriptions: false
        };
        this.onAddProducts = props.onAddProducts.bind(this);
        this.onBlurDomainName = this.onBlurDomainName.bind(this);
        this.onChangeDomainSelection = this.onChangeDomainSelection.bind(this);
    }
    render() {
        return this.createContent();
    }
    createContent() {
        return (React.createElement("div", null,
            React.createElement("div", { className: "columns is-vcentered" },
                React.createElement("div", { className: "column is-one-third" },
                    React.createElement("figure", { className: "image" },
                        React.createElement("img", { src: "/img/bg-card-domain@2x.png", alt: "Compre Domínios .com e .com.br" }))),
                React.createElement("div", { className: "column" },
                    this._createProductsDomain(),
                    this._createProductsHosting(),
                    this._createProductsEmail())),
            this._createProductsTotal()));
    }
    onBlurDomainName(event) {
        event.preventDefault();
        this.onAddProducts();
    }
    onChangeDomainSelection(event) {
        event.preventDefault();
        this.setState({
            priceDomain: event.currentTarget.value === ".com" ? this.state.priceDomainCom : this.state.priceDomainComBr
        });
    }
    _createProductsDomain() {
        return (React.createElement("div", { className: "column" },
            React.createElement("div", { className: "content" },
                React.createElement("h3", { className: "is-size-5" },
                    "Dom\u00EDnio \u00A0",
                    React.createElement("span", { className: "tag is-rounded" },
                        "\u20AC",
                        this.state.priceDomain,
                        "/ano")),
                React.createElement("div", { className: "field has-addons" },
                    React.createElement("p", { className: "control" },
                        React.createElement("a", { className: "button is-static" }, "www.")),
                    React.createElement("p", { className: "control is-expanded" },
                        React.createElement("input", { type: "text", name: "product_domain_name", onBlur: this.onBlurDomainName, className: "input", placeholder: "mybusinessname" })),
                    React.createElement("div", { className: "control" },
                        React.createElement("div", { className: "select" },
                            React.createElement("select", { name: "products_domain_extension", onChange: this.onChangeDomainSelection },
                                React.createElement("option", { value: ".com.br" }, ".com.br"),
                                React.createElement("option", { value: ".com" }, ".com"))))))));
    }
    _createProductsHosting() {
        return (React.createElement("div", { className: "column" },
            React.createElement("h3", { className: "is-size-5" },
                "Hospedagem \u00A0",
                React.createElement("span", { className: "tag is-rounded" },
                    "\u20AC",
                    this.state.priceHostingDynamic,
                    "/m\u00EAs")),
            React.createElement("div", { className: "is-light is-info" },
                React.createElement("div", { className: "field" },
                    React.createElement("div", { className: "control" },
                        React.createElement("label", { className: "checkbox" },
                            React.createElement("input", { type: "checkbox", name: "products_hosting" }),
                            "\u00A0 Din\u00E2mica: Apache HTTP Server, PHP, MariaDB, Memcached, CDN e SSL."))))));
    }
    _createProductsEmail() {
        return (React.createElement("div", { className: "column" },
            React.createElement("h3", { className: "is-size-5" },
                "E-mail \u00A0",
                React.createElement("span", { className: "tag is-rounded" },
                    "\u20AC",
                    this.state.priceEmail,
                    "/m\u00EAs")),
            React.createElement("div", { className: "field has-addons" },
                React.createElement("p", { className: "control" },
                    React.createElement("input", { type: "text", name: "products_email_username", className: "input", placeholder: "myusername" })),
                React.createElement("p", { className: "control" },
                    React.createElement("a", { className: "button is-static" }, "@")),
                React.createElement("p", { className: "control" },
                    React.createElement("input", { type: "text", name: "products_email_domain", className: "input", placeholder: "mybusinessname.com" }))),
            React.createElement("p", null,
                React.createElement("small", null,
                    React.createElement("span", { className: "icon" },
                        React.createElement("i", { className: "fas fa-info-circle" })),
                    "Selecione/preencha apenas os servi\u00E7os que deseja contratar."))));
    }
    _createProductsTotal() {
        return (React.createElement("div", { className: "notification is-light" },
            React.createElement("p", null,
                "Total: ",
                React.createElement("strong", null,
                    "\u20AC",
                    this.state.priceTotalYearly,
                    "/ano "),
                "e ",
                React.createElement("strong", null,
                    "\u20AC",
                    this.state.priceTotalMonthly,
                    "/m\u00EAs"),
                ".",
                React.createElement("br", null),
                React.createElement("small", null, "N\u00E3o h\u00E1 cobran\u00E7as de taxas ou impostos."))));
    }
}
//# sourceMappingURL=Products.js.map