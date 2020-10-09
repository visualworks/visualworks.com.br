"use strict";
import React from "react";

export default class Navbar extends React.Component<any, any> {
    constructor(props: object) {
        super(props);
    }

    public render(): JSX.Element {
        return this.createContent();
    }

    public createContent(): JSX.Element {
        return (<div className={"container"}>
            {this.createLogo()}
            {this.createMenu()}
        </div>);
    }

    protected createLogo(): JSX.Element {
        const logo = (<h1 className="logo title is-1 is-size-2-mobile"><a className="navbar-item"
                                                                          href="https://www.visualworks.com.br"
                                                                          rel="external,noopener,noreferrer">Visual
            Works</a></h1>);
        return (<div className="navbar-brand">{logo}</div>);
    }

    protected createMenu(): JSX.Element {
        return (<div className="navbar-menu is-hidden-mobile">
            <div className="navbar-end">
                <div className={"navbar-item is-hidden"}>
                    <button className={"button"} disabled={true} title={"Em breve"}>
                        <span className="icon is-small">
                            <i className={"fas fa-user"}></i>
                        </span>
                        <span>Minha Conta</span>
                    </button>
                </div>
                <a className="navbar-item" href="https://linkedin.com/in/henriqueamattos" target="_blank">
                    <span className="icon">
                        <i className="fab fa-linkedin"></i>
                    </span>
                </a>
                <a className="navbar-item" data-social-network="Twitter" data-social-action="tweet"
                   data-social-target="https://www.visualworks.com.br" target="_blank"
                   href="https://twitter.com/henriqueamattos" rel="external,noopener,noreferrer">
                    <span className="icon">
                        <i className="fab fa-twitter"></i>
                    </span>
                </a>
                <a className="navbar-item" href="https://github.com/visualworks" target="_blank"
                   rel="external,noopener,noreferrer">
                    <span className="icon">
                        <i className="fab fa-github"></i>
                    </span>
                </a>
                <a className="navbar-item" href="https://facebook.com/visualworks.web" target="_blank"
                   rel="external,noopener,noreferrer">
                    <span className="icon">
                        <i className="fab fa-facebook"></i>
                    </span>
                </a>
            </div>
        </div>);
    }
}