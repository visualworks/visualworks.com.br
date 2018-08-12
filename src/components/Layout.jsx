import React from "react";
import App from "app";
import Navbar from "components/Navbar";
import About from "components/About";
import Skills from "components/Skills";
import Subscriptions from "components/Subscriptions";

export default class Layout extends App {
    render() {
        return (
            <section className="hero is-primary is-fullheight">
                <div className="hero-header"><Navbar /></div>
                <div className="hero-body">
                    <div className="container">
                        <About />
                        <Subscriptions />
                        <Skills />
                    </div>
                </div>
                <div className="hero-foot">
                    <div className="container has-text-centered">
                        <a href="https://gsuite.google.com/intl/pt-BR/landing/partners/referral/trial.html?utm_source=sign-up&utm_medium=referralbutton1&utm_campaign=apps-referral-program&utm_content=R3RD7V8" target="_blank"><img src="https://connect.googleforwork.com/servlet/JiveServlet/showImage/102-18621-1-87860/Copy+of+638303_Copy+of+Sonic_DarwIT_GSuite_PT-BR.jpg" /></a>
                    </div>
                    <div className="container has-text-centered">
                        <div className="fb-like" data-href="https://www.facebook.com/visualworks.web" data-layout="button" data-action="recommend" data-size="large" data-show-faces="false" data-share="false"></div>
                    </div>
                </div>
            </section>
        );
    }
}