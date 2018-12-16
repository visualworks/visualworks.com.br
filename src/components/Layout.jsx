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
                        <iframe src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Fvisualworks.web&width=62&layout=button&action=like&size=large&show_faces=false&share=false&height=65&appId=132958300798146" width="62" height="65" style={{border:"none",overflow:"hidden"}} scrolling="no" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                    </div>
                </footer>
            </div>
        );
    }
}