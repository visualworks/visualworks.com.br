import React from "react";
import App from "../app";

export default class Subscriptions extends App {
    constructor(props) {
        super(props);
        this.form = this.createContent();
    }

    createContent() {
        const subscription = (<div className="content">
            <div className={"columns"}>
                <div className={"column"}>
                    <h2 className="title is-4">Entenda sua hospedagem</h2>
                    <p className="has-text-right">
                        <img src="/img/aws-architecture.png" width="100%"
                             title="Arquitetura básica da hospedagem de aplicação na nuvem"
                             alt="Arquitetura básica da hospedagem de aplicação na nuvem AWS"/>
                    </p>
                </div>
                <div className={"column is-one-third"}>
                    <h2 className="title is-4">Contrate</h2>
                    {this.formStripe()}
                </div>
            </div>
        </div>);
        return subscription;
    }

    productEmail() {
        return (<div>
            <label className={"label"}>E-mails</label>
            <div className={"field"}>
                <div className={"select"}>
                    <select name={"product_emails_qty"}>
                        <option value={0}>0</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                </div>
            </div>
        </div>);
    }

    productHosting() {
        return (<div>
            <label className={"label"}>Hospedagem</label>
            <div className="field">
                <div className={"select"}>
                    <select name={"product_domain_qty"}>
                        <option value={0}>0</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                </div>
            </div>
        </div>);
    }

    productDomain() {
        return (<div>
            <label className={"label"}>Domínios</label>
            <div className="field">
                <div className={"select"}>
                    <select name={"product_domain_qty"}>
                        <option value={0}>0</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                </div>
            </div>
        </div>);
    }

    customerData() {
        return (<div>
                <h3 className={"is-size-5"}>Dados pessoais</h3>
                <div className={"field"}>
                    <div className={"control has-icons-left"}>
                        <input type={"text"} className={"input"} name={"customer_name"}
                               placeholder={"Joao Silva"}/>
                        <span className="icon is-small is-left">
                    <i className="fas fa-user"></i>
                </span>
                    </div>
                </div>
                <div className={"field"}>
                    <div className={"control has-icons-left"}>
                        <input type={"text"} className={"input"} name={"customer_email"}
                               placeholder={"joaosilva@gmail.com"}/>
                        <span className="icon is-small is-left">
                            <i className="fas fa-envelope"></i>
                        </span>
                    </div>
                </div>
            </div>
        );
    }

    paymentData() {
        return (<div>
            <h3 className={"is-size-5"}>Dados para faturamento</h3>
            <div className={"field"}>
                <div className={"control has-icons-left"}>
                    <input type={"text"} className={"input"} name={"customer_creditcard"}
                           placeholder={"5544 3322 0001 1234"}/>
                    <span className="icon is-small is-left">
                            <i className="fas fa-credit-card"></i>
                        </span>
                </div>
            </div>
            <div className={"columns"}>
                <div className={"column"}>
                    <div className={"field"}>
                        <div className={"control has-icons-left"}>
                            <input type={"text"} className={"input"} name={"customer_securitycode"}
                                   placeholder={"765"}/>
                            <span className="icon is-small is-left">
                            <i className="fas fa-shield-alt"></i>
                        </span>
                        </div>
                    </div>
                </div>
                <div className={"column"}>
                    <div className={"field"}>
                        <div className={"control"}>
                            <input type={"text"} className={"input"} name={"customer_expirationdate"}
                                   placeholder={"12/2024"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
    }

    formStripe() {
        return (
            <section className={"box"}>
                <form>
                    {this.customerData()}
                    <h3 className={"is-size-5"}>Produtos</h3>
                    <div className={"columns"}>
                        <div className={"column"}>{this.productHosting()}</div>
                        <div className={"column"}>{this.productDomain()}</div>
                        <div className={"column"}>{this.productEmail()}</div>
                    </div>
                    <div className={"content"}>{this.paymentData()}</div>
                    <div className={"notification"}>
                        <div className="control is-clearfix">
                            Total: R$0,00
                            <button name="submit"
                                    className="button is-primary is-pulled-right">Assinar</button>
                        </div>
                    </div>
                </form>
            </section>
        );
    }

    render() {
        return (this.form);
    }
}