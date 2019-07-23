import React from "react";
import App from "app";
import Navbar from "./Navbar";
import About from "./About";
import Subscriptions from "./Subscriptions";

export default class Layout extends App {
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar" role="navigation" aria-label="main navigation"><Navbar/></nav>
                </header>
                <div className="container">
                    <About/>
                    <Subscriptions/>
                </div>
                <footer className="footer">
                    <div className="container">
                        <div className="columns">
                            <div className="column is-one-quarter">
                                <a href="https://gsuite.google.com/intl/pt-BR/landing/partners/referral/trial.html?utm_source=sign-up&utm_medium=referralbutton1&utm_campaign=apps-referral-program&utm_content=R3RD7V8"
                                   target="_blank" rel="external,noopener,noreferrer"><img
                                    src="/img/g-suite-referral-pt_BR.jpg" alt="G Suite - Inicie sua avaliação gratuita aqui"
                                    title="G Suite - Inicie sua avaliação gratuita aqui"/></a>
                            </div>
                            <div className="column has-text-centered is-lowercase has-text-weight-light">
                                <p>Visual Works 2019 - Todos os Direitos Reservados - Henrique Mattos</p>
                                <iframe
                                    src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Fvisualworks.web&width=62&layout=button&action=like&size=large&show_faces=false&share=false&height=35&appId=132958300798146"
                                    width="62" height="35" style={{border: "none", overflow: "hidden"}} scrolling="no"
                                    frameBorder="0" allowTransparency="true" allow="encrypted-media"></iframe>
                            </div>
                            <div className="column is-one-quarter">
                                <div className="is-clearfix">
                                    <figure className="image is-128x128 is-pulled-right">
                                        <a href="https://www.certmetrics.com/amazon/public/badge.aspx?i=1&t=c&d=2018-12-14&ci=AWS00450486"
                                           target="_blank">
                                            <img src="https://www.certmetrics.com/api/ob/image/amazon/c/1"
                                                 alt="AWS Solutions Architect Certified"
                                                 title="AWS Solutions Architect Certified"/>
                                        </a>
                                    </figure>
                                    <figure className="image is-128x128 is-pulled-right">
                                        <a href="https://www.certmetrics.com/amazon/public/badge.aspx?i=2&t=c&d=2019-03-07&ci=AWS00450486"
                                           target="_blank">
                                            <img src="https://www.certmetrics.com/api/ob/image/amazon/c/2"
                                                 alt="AWS Developer Certified" title="AWS Developer Certified"/>
                                        </a>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}