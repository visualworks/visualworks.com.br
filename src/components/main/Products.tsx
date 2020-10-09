"use strict";
import React from "react";
import IState from "types/IState";

interface Props {
    onAddProducts: Function
}

export default class Products extends React.Component<Props, any> {
    public onAddProducts: Function;
    public state: IState;

    constructor(props: Props) {
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

    public render(): JSX.Element {
        return this.createContent();
    }

    public createContent(): JSX.Element {
        return (<div>
            <div className={"columns is-vcentered"}>
                <div className={"column is-one-third"}>
                    <figure className="image">
                        <img src={"/img/bg-card-domain@2x.png"} alt={"Compre Domínios .com e .com.br"}/>
                    </figure>
                </div>
                <div className={"column"}>
                    {this._createProductsDomain()}
                    {this._createProductsHosting()}
                    {this._createProductsEmail()}
                </div>
            </div>
            {this._createProductsTotal()}
        </div>);
    }

    public onBlurDomainName(event: React.FormEvent<HTMLInputElement>): void {
        event.preventDefault();
        this.onAddProducts();
    }

    public onChangeDomainSelection(event: React.FormEvent<HTMLSelectElement>): void {
        event.preventDefault();
        this.setState({
            priceDomain: event.currentTarget.value === ".com" ? this.state.priceDomainCom : this.state.priceDomainComBr
        });
    }

    protected _createProductsDomain(): JSX.Element {
        return (<div className={"column"}>
            <div className={"content"}>
                <h3 className={"is-size-5"}>
                    Domínio &nbsp;
                    <span className="tag is-rounded">€{this.state.priceDomain}/ano</span>
                </h3>
                <div className={"field has-addons"}>
                    <p className="control">
                        <a className="button is-static">
                            www.
                        </a>
                    </p>
                    <p className="control is-expanded">
                        <input type="text" name={"product_domain_name"} onBlur={this.onBlurDomainName}
                               className="input" placeholder="mybusinessname"/>
                    </p>
                    <div className="control">
                        <div className={"select"}>
                            <select name={"products_domain_extension"}
                                    onChange={this.onChangeDomainSelection}>
                                <option value={".com.br"}>.com.br</option>
                                <option value={".com"}>.com</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
    }

    protected _createProductsHosting(): JSX.Element {
        return (<div className={"column"}>
            <h3 className={"is-size-5"}>
                Hospedagem &nbsp;
                <span className="tag is-rounded">€{this.state.priceHostingDynamic}/mês</span>
            </h3>
            <div className="is-light is-info">
                <div className={"field"}>
                    <div className={"control"}>
                        <label className={"checkbox"}>
                            <input type={"checkbox"} name={"products_hosting"}/>
                            &nbsp; Dinâmica: Apache HTTP Server, PHP, MariaDB, Memcached, CDN e SSL.
                        </label>
                    </div>
                </div>
            </div>
        </div>);
    }

    protected _createProductsEmail(): JSX.Element {
        return (<div className={"column"}>
            <h3 className={"is-size-5"}>
                E-mail &nbsp;
                <span className="tag is-rounded">€{this.state.priceEmail}/mês</span>
            </h3>
            <div className={"field has-addons"}>
                <p className="control">
                    <input type="text" name={"products_email_username"} className="input" placeholder="myusername"/>
                </p>
                <p className="control">
                    <a className="button is-static">
                        @
                    </a>
                </p>
                <p className="control">
                    <input type="text" name={"products_email_domain"} className="input"
                           placeholder="mybusinessname.com"/>
                </p>
            </div>
            <p>
                <small>
                    <span className={"icon"}>
                        <i className="fas fa-info-circle"></i>
                    </span>
                    Selecione/preencha apenas os serviços que deseja contratar.
                </small>
            </p>
        </div>);
    }

    protected _createProductsTotal(): JSX.Element {
        return (<div className={"notification is-light"}>
            <p>Total: <strong>€{this.state.priceTotalYearly}/ano </strong>
                e <strong>€{this.state.priceTotalMonthly}/mês</strong>.<br/><small>Não há cobranças de taxas ou
                    impostos.</small></p>
        </div>);
    }
}