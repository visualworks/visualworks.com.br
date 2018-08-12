import React from "react";
import App from "app";

export default class Navbar extends App {
    constructor(props) {
        super(props);
        this.navbar = this.createContent();
    }
    createContent() {
        const navbarContent = <div className="container">
            {this.createLogo()}
            {this.createMenu()}
        </div>;
        return navbarContent;
    }
    createLogo() {
        const logo = <h1 className="logo title is-1"><a className="navbar-item" href="https://www.visualworks.com.br">Visual Works</a></h1>;
        const navbarBrand = <div className="navbar-brand">{logo}</div>;
        return navbarBrand;
    }
    createMenu() {
        const navbarMenu = <div className="navbar-menu">
            <div className="navbar-end">
                <a className="navbar-item" href="https://linkedin.com/in/henriqueamattos" target="_blank">
                    <span className="icon">
                        <i className="fab fa-linkedin"></i>
                    </span>
                </a>
                <a className="navbar-item" data-social-network="Twitter" data-social-action="tweet" data-social-target="https://www.visualworks.com.br" target="_blank" href="https://twitter.com/henriqueamattos">
                    <span className="icon">
                        <i className="fab fa-twitter"></i>
                    </span>
                </a>
                <a className="navbar-item" href="https://github.com/visualworks" target="_blank">
                    <span className="icon">
                        <i className="fab fa-github"></i>
                    </span>
                </a>
                <a className="navbar-item" href="https://facebook.com/visualworks.web" target="_blank">
                    <span className="icon">
                        <i className="fab fa-facebook"></i>
                    </span>
                </a>
            </div>
        </div >;
        return navbarMenu;
    }
    render() {
        return (<nav className="navbar" role="navigation" aria-label="main navigation">{this.navbar}</nav>);
    }
}