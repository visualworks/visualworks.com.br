"use strict";
import React from "react";
import Navbar from "components/main/Navbar";

export default class Header extends React.Component {
    constructor(props: object) {
        super(props);
    }

    public createContent(): JSX.Element {
        return (<header>
            <nav className="navbar has-background-primary" role="navigation" aria-label="main navigation">
                <Navbar/>
            </nav>
        </header>);
    }

    public render(): JSX.Element {
        return this.createContent();
    }
}