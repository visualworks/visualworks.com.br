"use strict";
import React from "react";
import Products from "components/main/Products";
export default class Subscriptions extends React.Component {
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
            disabledFormSubscriptions: true
        };
        this.onClickSubmit = this.onClickSubmit.bind(this);
        this.onAddProducts = this.onAddProducts.bind(this);
    }
    render() {
        return this.createContent();
    }
    createContent() {
        return (React.createElement("section", { className: "content" },
            React.createElement("form", { id: "form-subscriptions", className: "form" },
                React.createElement("div", { className: "columns" },
                    React.createElement("div", { className: "column" },
                        React.createElement(Products, { onAddProducts: this.onAddProducts })),
                    React.createElement("div", { className: "column is-one-third" },
                        React.createElement("fieldset", { disabled: this.state.disabledFormSubscriptions }, this.formStripe()))))));
    }
    onClickSubmit(event) {
        event.preventDefault();
    }
    onAddProducts() {
        this.setState({
            disabledFormSubscriptions: !this.state.disabledFormSubscriptions
        });
    }
    customerData() {
        return (React.createElement("div", { className: "content" },
            React.createElement("h3", { className: "is-size-5" }, "Dados pessoais"),
            React.createElement("div", { className: "field" },
                React.createElement("div", { className: "control has-icons-left" },
                    React.createElement("input", { type: "text", className: "input", name: "customer_name", placeholder: "Joao Silva" }),
                    React.createElement("span", { className: "icon is-small is-left" },
                        React.createElement("i", { className: "fas fa-user" })))),
            React.createElement("div", { className: "field" },
                React.createElement("div", { className: "control has-icons-left" },
                    React.createElement("input", { type: "text", className: "input", name: "customer_email", placeholder: "joaosilva@gmail.com" }),
                    React.createElement("span", { className: "icon is-small is-left" },
                        React.createElement("i", { className: "fas fa-envelope" }))))));
    }
    paymentData() {
        return (React.createElement("div", { className: "content" },
            React.createElement("h3", { className: "is-size-5" }, "Dados para faturamento"),
            React.createElement("div", { className: "field" },
                React.createElement("div", { className: "control has-icons-left" },
                    React.createElement("input", { type: "text", className: "input", name: "customer_creditcard", placeholder: "5544 3322 0001 1234" }),
                    React.createElement("span", { className: "icon is-small is-left" },
                        React.createElement("i", { className: "fas fa-credit-card" })))),
            React.createElement("div", { className: "columns" },
                React.createElement("div", { className: "column" },
                    React.createElement("div", { className: "field" },
                        React.createElement("div", { className: "control has-icons-left" },
                            React.createElement("input", { type: "text", className: "input", name: "customer_securitycode", placeholder: "765" }),
                            React.createElement("span", { className: "icon is-small is-left" },
                                React.createElement("i", { className: "fas fa-shield-alt" }))))),
                React.createElement("div", { className: "column" },
                    React.createElement("div", { className: "field" },
                        React.createElement("div", { className: "control" },
                            React.createElement("input", { type: "text", className: "input", name: "customer_expirationdate", placeholder: "12/2024" })))))));
    }
    _billingData() {
        return (React.createElement("div", { className: "content" },
            React.createElement("h3", { className: "is-size-5" }, "Dados para cobran\u00E7a"),
            React.createElement("div", { className: "field" },
                React.createElement("div", { className: "control" },
                    React.createElement("input", { type: "text", name: "customer_address", placeholder: "Endereço", className: "input" }))),
            React.createElement("div", { className: "columns" },
                React.createElement("div", { className: "column" },
                    React.createElement("div", { className: "field" },
                        React.createElement("p", { className: "control is-expanded" },
                            React.createElement("input", { type: "text", name: "customer_address", placeholder: "Rio de Janeiro", className: "input" })))),
                React.createElement("div", { className: "column is-one-quarter" },
                    React.createElement("div", { className: "field" },
                        React.createElement("p", { className: "control" },
                            React.createElement("input", { type: "text", name: "customer_address", placeholder: "RJ", className: "input" })))),
                React.createElement("div", { className: "column" },
                    React.createElement("div", { className: "field" },
                        React.createElement("p", { className: "control" },
                            React.createElement("input", { type: "text", name: "customer_address", placeholder: "22012-123", className: "input" })))))));
    }
    formStripe() {
        return (React.createElement("section", { className: "" },
            this.customerData(),
            this.paymentData(),
            this._billingData(),
            React.createElement("div", { className: "field" },
                React.createElement("div", { className: "control" },
                    React.createElement("a", { href: "https://stripe.com/br", target: "_blank" },
                        React.createElement("img", { src: "/img/powered_by_stripe.png", alt: "Powered by Stripe" })),
                    React.createElement("button", { onClick: this.onClickSubmit, name: "submit", className: "button is-primary is-pulled-right" }, "Assinar")))));
    }
}
//# sourceMappingURL=Subscriptions.js.map