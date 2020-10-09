"use strict";
import React from "react";
import Hero from "components/main/Hero";
import About from "components/main/About";
import Subscriptions from "components/main/Subscriptions";

export default class Content extends React.Component {
    constructor(props: Object) {
        super(props);
    }

    protected createContent(): JSX.Element {
        return (<div>
            <Hero/>
            <section className={"section"}>
                <div className="container">
                    <About/>
                </div>
            </section>
            <section className={"section is-hidden"}>
                <div className="container">
                    <Subscriptions/>
                </div>
            </section>
        </div>);
    }

    public render(): JSX.Element {
        return this.createContent();
    }
}