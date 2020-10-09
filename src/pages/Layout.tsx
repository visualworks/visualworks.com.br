"use strict";
import React from "react";
import Header from "pages/Header";
import Content from "pages/Content";
import Footer from "pages/Footer"

export default class Layout extends React.Component {
    constructor(props: object) {
        super(props);
    }

    public createContent(): JSX.Element {
        return (<div>
            <Header/>
            <Content/>
            <Footer/>
        </div>);
    }

    public render(): JSX.Element {
        return this.createContent();
    }
}