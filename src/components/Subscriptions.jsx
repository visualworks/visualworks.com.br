import React from "react";
import App from "app";

export default class Subscriptions extends App {
    constructor(props) {
        super(props);
        this.form = this.createContent();
    }
    createContent() {
        const subscription = <div className="content">
            <h2 className="title is-2">assinaturas</h2>
            <div className="columns">
                <div className="column is-one-third">
                    <p>Se você já sabe qual serviço escolher, faça sua assinatura preenchendo o formulário ao lado com a segurança PayPal.</p>
                    <p>Somente válido para hospedagem e registro de domínios. Para solução de e-mails G Suite ou desenvolver um site, por favor entre em contato através do e-mail <a href="mailto:comercial@visualworks.com.br">comercial@visualworks.com.br</a>.</p>                        
                    <div className="columns is-centered">
                        <div className="column">
                            <span className="icon is-large">
                                <i className="fab fa-3x fa-paypal"></i>
                            </span>
                        </div>
                        <div className="column">
                            <span className="icon is-large">
                                <i className="fab fa-3x fa-cc-amex"></i>
                            </span>
                        </div>
                        <div className="column">
                            <span className="icon is-large">
                                <i className="fab fa-3x fa-cc-visa"></i>
                            </span>
                        </div>
                        <div className="column">
                            <span className="icon is-large">
                                <i className="fab fa-3x fa-cc-mastercard"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="column">
                    {this.formPayPal()}
                </div>
                <div className="column"></div>
            </div>
        </div>;
        return subscription;
    }
    formPayPal() {
        const form = <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
            <div className="is-invisible">
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input type="hidden" name="hosted_button_id" value="TPMXBSQ39T4E2" />
                <input type="hidden" name="currency_code" value="BRL" />
                <input type="hidden" name="on0" value="Escolha seu plano abaixo:" />
                <input type="hidden" name="on1" value="Nome Completo" />
                <input type="hidden" name="on2" value="URL (Ex.: www.seusite.com.br)" />
            </div>
            <div className="field">
                <label className="label">Escolha seu plano de hospedagem abaixo:</label>
                <div className="control">
                    <div className="select">
                        <select name="os0" className="select">
                            <option value="Mensal">Compartilhado: R$49,90 BRL - por mês</option>
                            <option value="Individual">Individual: R$325,92 BRL - por mês</option>
                            <option value="Domínio .com">Domínio .com: R$60,00 BRL - por mês</option>
                            <option value="Domínio .com.br">Domínio .com.br: R$45,00 BRL - por mês</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="field">
                <label className="label">Nome Completo</label>
                <div className="control">
                    <input type="text" name="os1" maxLength="200" className="input" />
                </div>
            </div>
            <div className="field">
                <label className="label">Domínio</label>
                <div className="control">
                    <input type="text" name="os2" maxLength="200" className="input" placeholder="www.seusite.com.br" />
                </div>
            </div>
            <div className="control">
                <button name="submit" className="button is-primary is-inverted">Assinar</button>
            </div>
            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
        </form>;
        return form;
    }
    render() {
        return (this.form);
    }
}