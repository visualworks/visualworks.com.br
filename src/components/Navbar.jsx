import React from "react";
import App from "app";

export default class Navbar extends App {
    constructor(props) {
        super(props);
        this.navbar = this.createContent();
    }
    createContent() {
        return <div className="container">
            {this.createLogo()}
            {this.createMenu()}
        </div>;
    }
    createLogo() {
        const logo = (<h1 className="logo title is-1 is-size-2-mobile is-marginless"><a className="navbar-item has-text-white is-paddingless" href="https://www.visualworks.com.br" rel="external,noopener,noreferrer">Visual Works</a></h1>);
        return (<div className="navbar-brand">{logo}</div>);
    }
    createMenu() {
        return (<div className="navbar-menu is-hidden-mobile">
            <div className="navbar-end">
                <a className="navbar-item has-text-white" href="https://linkedin.com/in/henriqueamattos" target="_blank">
                    <span className="icon">
                        <i className="fab fa-linkedin"></i>
                    </span>
                </a>
                <a className="navbar-item has-text-white" data-social-network="Twitter" data-social-action="tweet" data-social-target="https://www.visualworks.com.br" target="_blank" href="https://twitter.com/henriqueamattos" rel="external,noopener,noreferrer">
                    <span className="icon">
                        <i className="fab fa-twitter"></i>
                    </span>
                </a>
                <a className="navbar-item has-text-white" href="https://github.com/visualworks" target="_blank" rel="external,noopener,noreferrer">
                    <span className="icon">
                        <i className="fab fa-github"></i>
                    </span>
                </a>
                <a className="navbar-item has-text-white" href="https://facebook.com/visualworks.web" target="_blank" rel="external,noopener,noreferrer">
                    <span className="icon">
                        <i className="fab fa-facebook"></i>
                    </span>
                </a>
                <figure className="image is-128x128 is-pulled-right">
                    <a href="https://www.certmetrics.com/amazon/public/badge.aspx?i=1&t=c&d=2018-12-14&ci=AWS00450486" target="_blank">
                        <img src="https://www.certmetrics.com/api/ob/image/amazon/c/1" alt="AWS Solutions Architect Certified" title="AWS Solutions Architect Certified" />
                    </a>
                </figure>
                <figure className="image is-128x128 is-pulled-right">
                    <a href="https://www.certmetrics.com/amazon/public/badge.aspx?i=2&t=c&d=2019-03-07&ci=AWS00450486" target="_blank">
                        <img src="https://www.certmetrics.com/api/ob/image/amazon/c/2" alt="AWS Developer Certified" title="AWS Developer Certified" />
                    </a>
                </figure>
            </div>
        </div >);
    }
    render() {
        return this.navbar;
    }
}