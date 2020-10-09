"use strict";
import React from "react";

export default class Hero extends React.Component<any, any> {
    constructor(props: object) {
        super(props);
    }

    public render(): JSX.Element {
        return this.createContent();
    }

    public createContent(): JSX.Element {
        return (<section className="hero is-large bg-hero-computing">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">
                        Web & Mobile
                    </h1>
                    <h2 className="subtitle">
                        consultoria, desenvolvimento e hospedagem
                    </h2>
                </div>
            </div>
        </section>);
    }
}