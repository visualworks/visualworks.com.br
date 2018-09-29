import React from "react";
import App from "app";
import Navbar from "components/Navbar";
import About from "components/About";
import Skills from "components/Skills";
import Subscriptions from "components/Subscriptions";

export default class Layout extends App {
    render() {
        return (
            <div>
                <section className="section">
                    <nav className="navbar is-primary" role="navigation" aria-label="main navigation"><Navbar /></nav>
                    <div className="container">
                        <About />
                        <Subscriptions />
                        <Skills />
                    </div>
                </section>
                <footer className="footer is-primary">
                    <div className="content has-text-centered">
                        <div>
                            <a href="https://gsuite.google.com/intl/pt-BR/landing/partners/referral/trial.html?utm_source=sign-up&utm_medium=referralbutton1&utm_campaign=apps-referral-program&utm_content=R3RD7V8" target="_blank" rel="external,noopener,noreferrer"><img src="/img/g-suite-referral-pt_BR.jpg" alt="G Suite - Inicie sua avaliação gratuita aqui" title="G Suite - Inicie sua avaliação gratuita aqui" /></a>
                        </div>
                        <div className="fb-like" data-href="https://www.facebook.com/visualworks.web" data-layout="button" data-action="recommend" data-size="large" data-show-faces="false" data-share="false"></div>
                    </div>
                </footer>
            </div>
        );
    }
}