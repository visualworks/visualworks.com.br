import React from "react";
import App from "app";

export default class Layout extends App {
    render() {
        return (
            <section className="hero is-primary is-fullheight">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="is-clearfix logo-visualworks">
                            <img src="/img/logo-visual-works.png" alt="Visual Works" title="Visual Works" />
                        </div>
                        <div className="columns is-centered has-text-left">
                            <div className="column is-one-third">
                                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                    <div className="is-invisible">
                                        <input type="hidden" name="cmd" value="_s-xclick" />
                                        <input type="hidden" name="hosted_button_id" value="TPMXBSQ39T4E2" />
                                        <input type="hidden" name="currency_code" value="BRL" />
                                        <input type="hidden" name="on0" value="Escolha seu plano abaixo:" />
                                        <input type="hidden" name="on2" value="URL (Ex.: www.seusite.com.br)" />
                                    </div>
                                    <div className="field">
                                        <label className="label">Escolha seu plano de hospedagem abaixo:</label>
                                        <div className="control">
                                            <select name="os0" className="select">
                                                <option value="Mensal">Mensal : R$49,90 BRL - monthly</option>
                                                <option value="Anual">Anual : R$538,92 BRL - yearly</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="label">Nome Completo</label>
                                        <div className="control">
                                            <input type="text" name="os1" maxLength="200" className="input" />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="label">URL (Ex.: www.seusite.com.br)</label>
                                        <div className="control">
                                            <input type="text" name="os2" maxLength="200" className="input" />
                                        </div>
                                    </div>
                                    <div className="control">
                                        <button name="submit" className="button is-primary is-inverted">Submit</button>
                                    </div>
                                    <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-foot">
                    <div className="container has-text-centered">
                        <div className="fb-like" data-href="https://www.facebook.com/visualworks.web" data-layout="button" data-action="recommend" data-size="large" data-show-faces="false" data-share="false"></div>
                    </div>
                </div>
            </section>
        );
    }
}