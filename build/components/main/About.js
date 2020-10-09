"use strict";
import React from "react";
export default class About extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return this.createContent();
    }
    createContent() {
        return React.createElement("div", { className: "content" },
            React.createElement("div", { className: "columns" },
                React.createElement("div", { className: "column" }, this.aboutServices())));
    }
    aboutEnglish() {
        return React.createElement("div", { className: "content has-text-justified" },
            React.createElement("p", null, "Visual Works started in 2005 as a web development agency by Henrique Mattos, providing micro and small-size business an online platform to advertise their products and services. In the beginning everything was pure PHP and HTML hosted anywhere with a good pricing offer."),
            React.createElement("p", null, "In 2007, Henrique joined AWM, a digital agency with the same purpose and core, but with a partner named Jo\u00E3o Paulo Faria, who was strict about quality and boundaries, pushing web applications to its limit. Jo\u00E3o Paulo became a mentor and his technics absoberd extensively."),
            React.createElement("p", null, "Cloud computing was becoming news in Brazil and AWM rapidly moved all his customer's e-mails to Google Apps, which was free for a certain limit by the time. That was a breakpoint for AWM and the next step was to get rid of the on-premise and dedicated host we had for high monthly fees and move to Rackspace cloud server."),
            React.createElement("p", null, "While working for AWM, Henrique learned how to develop and maitain a software framework as well as provide customer support in different levels. AWM provided an in-house development for a PHP CMS tuning it on the Linux, Apache and MySQL level, all installed and configured by Jo\u00E3o."),
            React.createElement("p", null, "In 2010, when Henrique Mattos left the company (for the third time), he developed Visual Works's first CMS, powered by Zend Framework and decided to host the customer's applications to assure stability and reliability."),
            React.createElement("p", null, "When QGGI, a consortium formed by Queiroz-Galv\u00E3o, Galv\u00E3o & IESA requested an intranet portal for their 2.000+ empoloyees acting in COMPERJ, a requirement for an open-source CMS was key for the first WordPress development at Visual Works. Right after a partnership with Grupo Comunciare and Hiperzoom Comunica\u00E7\u00E3o increased the demand and WordPress became the standard CMS for future projects."),
            React.createElement("p", null, "In 2013, all the projects developed and hosted by Visual Works migrated to AWS, increasing security, reliability and stability, making it possible to serve applications using different edge locations, also increasing performance, and to install SSL certificates for each domain, serving requests over HTTPS even for the smallest project."));
    }
    aboutServices() {
        return React.createElement("div", { className: "content" },
            React.createElement("div", { className: "columns" },
                React.createElement("div", { className: "column" }, this.servicesHosting()),
                React.createElement("div", { className: "column" }, this.servicesEmails()),
                React.createElement("div", { className: "column" }, this.servicesPhp()),
                React.createElement("div", { className: "column" }, this.servicesJavascript())));
    }
    servicesHosting() {
        return React.createElement("div", { className: "card" },
            React.createElement("div", { className: "card-content" },
                React.createElement("div", { className: "has-text-centered" },
                    React.createElement("p", null,
                        React.createElement("span", { className: "icon is-large" },
                            React.createElement("i", { className: "fab fa-3x fa-aws" }))),
                    React.createElement("h3", { className: "is-3" }, "Hospedagem")),
                React.createElement("p", null, "Infraestrutura para sua aplica\u00E7\u00E3o na nuvem, incluindo banco de dados, certificados de seguran\u00E7a, CDN e registro de dom\u00EDnios atrav\u00E9s da Amazon Web Services (AWS).")));
    }
    servicesEmails() {
        return React.createElement("div", { className: "card" },
            React.createElement("div", { className: "card-content" },
                React.createElement("div", { className: "has-text-centered" },
                    React.createElement("p", null,
                        React.createElement("span", { className: "icon is-large" },
                            React.createElement("i", { className: "fab fa-3x fa-google" }))),
                    React.createElement("h3", { className: "is-3" }, "E-mails")),
                React.createElement("p", null, "Plataforma para comunica\u00E7\u00E3o e gest\u00E3o corporativa contando com e-mails, calend\u00E1rios, gerenciamento de documentos, e bate-papo atrav\u00E9s do G Suite do Google.")));
    }
    servicesPhp() {
        return React.createElement("div", { className: "card" },
            React.createElement("div", { className: "card-content" },
                React.createElement("div", { className: "has-text-centered" },
                    React.createElement("p", null,
                        React.createElement("span", { className: "icon is-large" },
                            React.createElement("i", { className: "fab fa-3x fa-php" }))),
                    React.createElement("h3", { className: "is-3" }, "PHP")),
                React.createElement("p", null, "Desenvolvimento e manuten\u00E7\u00E3o de aplica\u00E7\u00F5es PHP e MySQL/MariaDB, nativas ou em gerenciadores de conte\u00FAdos como WordPress e Magento.")));
    }
    servicesJavascript() {
        return React.createElement("div", { className: "card" },
            React.createElement("div", { className: "card-content" },
                React.createElement("div", { className: "has-text-centered" },
                    React.createElement("p", null,
                        React.createElement("span", { className: "icon is-large" },
                            React.createElement("i", { className: "fab fa-3x fa-node-js" }))),
                    React.createElement("h3", { className: "is-3" }, "NodeJS")),
                React.createElement("p", null, "Desenvolvimento e manuten\u00E7\u00E3o de aplica\u00E7\u00F5es em NodeJS ou similares, em TypeScript e JavaScript, com os principais frameworks, como React, UI5, Express e outros.")));
    }
}
//# sourceMappingURL=About.js.map