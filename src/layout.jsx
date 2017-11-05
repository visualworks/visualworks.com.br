import React from "react";
import App from "app";

export default class Layout extends App {
    render() {
        return (
            <section className="hero is-primary is-fullheight">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div><img src="/img/logo-visual-works.png" alt="Visual Works" title="Visual Works" /></div>
                    </div>
                </div>
                <div className="hero-foot">
                    <div className="container has-text-centered">
                        <div class="fb-like" data-href="https://www.facebook.com/visualworks.web" data-layout="button" data-action="recommend" data-size="large" data-show-faces="false" data-share="false"></div>
                    </div>
                </div>
            </section>
        );
    }
}