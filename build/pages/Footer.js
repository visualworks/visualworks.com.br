"use strict";
import React from "react";
export default class Footer extends React.Component {
    constructor(props) {
        super(props);
        const dDate = new Date();
        this.year = dDate.getUTCFullYear();
    }
    createContent() {
        return (React.createElement("footer", { className: "footer" },
            React.createElement("div", { className: "container" },
                React.createElement("div", { className: "columns" },
                    React.createElement("div", { className: "column is-one-quarter" },
                        React.createElement("a", { href: "https://gsuite.google.com/intl/pt-BR/landing/partners/referral/trial.html?utm_source=sign-up&utm_medium=referralbutton1&utm_campaign=apps-referral-program&utm_content=R3RD7V8", target: "_blank", rel: "external,noopener,noreferrer" },
                            React.createElement("img", { src: "/img/g-suite-referral-pt_BR.jpg", alt: "G Suite - Inicie sua avalia\u00E7\u00E3o gratuita aqui", title: "G Suite - Inicie sua avalia\u00E7\u00E3o gratuita aqui" }))),
                    React.createElement("div", { className: "column has-text-centered is-lowercase has-text-weight-light" },
                        React.createElement("p", null,
                            "Visual Works ",
                            this.year,
                            " - Todos os Direitos Reservados - Henrique Mattos")),
                    React.createElement("div", { className: "column is-one-quarter" },
                        React.createElement("div", { className: "is-clearfix" },
                            React.createElement("figure", { className: "image is-128x128 is-pulled-right" },
                                React.createElement("a", { href: "https://www.youracclaim.com/badges/0401b2de-d17f-4ff0-83dc-bd618e8b94b5?source=linked_in_profile", target: "_blank" },
                                    React.createElement("img", { src: "https://images.youracclaim.com/size/680x680/images/6774b3bf-7a82-4d40-a2d1-86b412635bae/AWS-SolArchitect-Associate.png", alt: "AWS Solutions Architect Certified", title: "AWS Solutions Architect Certified" }))),
                            React.createElement("figure", { className: "image is-128x128 is-pulled-right" },
                                React.createElement("a", { href: "https://www.youracclaim.com/badges/8106710e-3b3a-4491-909e-a8c41f3a3026?source=linked_in_profile", target: "_blank" },
                                    React.createElement("img", { src: "https://images.youracclaim.com/size/680x680/images/2a15d440-edbe-44a2-890f-0a0caf7e1442/AWS-Developer-Associate.png", alt: "AWS Developer Certified", title: "AWS Developer Certified" })))))))));
    }
    render() {
        return this.createContent();
    }
}
//# sourceMappingURL=Footer.js.map