"use strict";
import React from "react";

export default class Footer extends React.Component {
    protected year: number;

    constructor(props: object) {
        super(props);
        const dDate = new Date();
        this.year = dDate.getUTCFullYear();
    }

    public createContent(): JSX.Element {
        return (<footer className="footer">
            <div className="container">
                <div className="columns">
                    <div className="column is-one-quarter">
                        <a href="https://gsuite.google.com/intl/pt-BR/landing/partners/referral/trial.html?utm_source=sign-up&utm_medium=referralbutton1&utm_campaign=apps-referral-program&utm_content=R3RD7V8"
                           target="_blank" rel="external,noopener,noreferrer"><img
                            src="/img/g-suite-referral-pt_BR.jpg" alt="G Suite - Inicie sua avaliação gratuita aqui"
                            title="G Suite - Inicie sua avaliação gratuita aqui"/></a>
                    </div>
                    <div className="column has-text-centered is-lowercase has-text-weight-light">
                        <p>Visual Works {this.year} - Todos os Direitos Reservados - Henrique Mattos</p>
                    </div>
                    <div className="column is-one-quarter">
                        <div className="is-clearfix">
                            <figure className="image is-128x128 is-pulled-right">
                                <a href="https://www.youracclaim.com/badges/0401b2de-d17f-4ff0-83dc-bd618e8b94b5?source=linked_in_profile"
                                   target="_blank">
                                    <img
                                        src="https://images.youracclaim.com/size/680x680/images/6774b3bf-7a82-4d40-a2d1-86b412635bae/AWS-SolArchitect-Associate.png"
                                        alt="AWS Solutions Architect Certified"
                                        title="AWS Solutions Architect Certified"/>
                                </a>
                            </figure>
                            <figure className="image is-128x128 is-pulled-right">
                                <a href="https://www.youracclaim.com/badges/8106710e-3b3a-4491-909e-a8c41f3a3026?source=linked_in_profile"
                                   target="_blank">
                                    <img
                                        src="https://images.youracclaim.com/size/680x680/images/2a15d440-edbe-44a2-890f-0a0caf7e1442/AWS-Developer-Associate.png"
                                        alt="AWS Developer Certified" title="AWS Developer Certified"/>
                                </a>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </footer>);
    }

    public render(): JSX.Element {
        return this.createContent();
    }
}