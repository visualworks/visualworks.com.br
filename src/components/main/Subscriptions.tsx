"use strict";
import React from "react";
import Products from "components/main/Products";
import IState from "types/IState";

export default class Subscriptions extends React.Component<any, any> {
    public state: IState;

    constructor(props: object) {
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

    public render(): JSX.Element {
        return this.createContent();
    }

    public createContent(): JSX.Element {
        return (<section className="content">
            <form id={"form-subscriptions"} className={"form"}>
                <div className={"columns"}>
                    <div className={"column"}>
                        <Products onAddProducts={this.onAddProducts}/>
                    </div>
                    <div className={"column is-one-third"}>
                        <fieldset disabled={this.state.disabledFormSubscriptions}>
                            {this.formStripe()}
                        </fieldset>
                    </div>
                </div>
            </form>
        </section>);
    }

    public onClickSubmit(event: React.FormEvent<HTMLButtonElement>): void {
        event.preventDefault();
    }

    public onAddProducts(): void {
        this.setState({
            disabledFormSubscriptions: !this.state.disabledFormSubscriptions
        });
    }

    protected customerData(): JSX.Element {
        return (<div className={"content"}>
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
        </div>);
    }

    protected paymentData(): JSX.Element {
        return (<div className={"content"}>
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

    protected _billingData(): JSX.Element {
        return (<div className={"content"}>
            <h3 className={"is-size-5"}>Dados para cobrança</h3>
            <div className={"field"}>
                <div className={"control"}>
                    <input type={"text"} name={"customer_address"} placeholder={"Endereço"} className={"input"}/>
                </div>
            </div>
            <div className={"columns"}>
                <div className={"column"}>
                    <div className={"field"}>
                        <p className={"control is-expanded"}>
                            <input type={"text"} name={"customer_address"} placeholder={"Rio de Janeiro"}
                                   className={"input"}/>
                        </p>
                    </div>
                </div>
                <div className={"column is-one-quarter"}>
                    <div className={"field"}>
                        <p className={"control"}>
                            <input type={"text"} name={"customer_address"} placeholder={"RJ"} className={"input"}/>
                        </p>
                    </div>
                </div>
                <div className={"column"}>
                    <div className={"field"}>
                        <p className={"control"}>
                            <input type={"text"} name={"customer_address"} placeholder={"22012-123"}
                                   className={"input"}/>
                        </p>
                    </div>
                </div>
            </div>
        </div>);
    }

    protected formStripe(): JSX.Element {
        return (
            <section className={""}>
                {this.customerData()}
                {this.paymentData()}
                {this._billingData()}
                <div className={"field"}>
                    <div className="control">
                        <a href={"https://stripe.com/br"} target={"_blank"}><img src={"/img/powered_by_stripe.png"}
                                                                                 alt={"Powered by Stripe"}/></a>
                        <button onClick={this.onClickSubmit} name="submit"
                                className="button is-primary is-pulled-right">Assinar
                        </button>
                    </div>
                </div>
            </section>);
    }

}