import React from "react";
import App from "../app";

export default class About extends App {
    constructor(props) {
        super(props);
        this.about = this.createContent();
    }
    createContent() {
        const aboutContent = <div className="content">
            <div className="columns">
                {/* <div className="column">{this.aboutEnglish()}</div> */}
                <div className="column">{this.aboutServices()}</div>
            </div>
        </div>;
        return aboutContent;
    }
    aboutEnglish() {
        const aboutEnglish = <div className="content has-text-justified">
            {/* <h2 className="title is-2">história</h2> */}
            <p>Visual Works started in 2005 as a web development agency by Henrique Mattos, providing micro and small-size business an online platform to advertise their products and services. In the beginning everything was pure PHP and HTML hosted anywhere with a good pricing offer.</p>
            <p>In 2007, Henrique joined AWM, a digital agency with the same purpose and core, but with a partner named João Paulo Faria, who was strict about quality and boundaries, pushing web applications to its limit. João Paulo became a mentor and his technics absoberd extensively.</p>
            <p>Cloud computing was becoming news in Brazil and AWM rapidly moved all his customer's e-mails to Google Apps, which was free for a certain limit by the time. That was a breakpoint for AWM and the next step was to get rid of the on-premise and dedicated host we had for high monthly fees and move to Rackspace cloud server.</p>
            <p>While working for AWM, Henrique learned how to develop and maitain a software framework as well as provide customer support in different levels. AWM provided an in-house development for a PHP CMS tuning it on the Linux, Apache and MySQL level, all installed and configured by João.</p>
            <p>In 2010, when Henrique Mattos left the company (for the third time), he developed Visual Works's first CMS, powered by Zend Framework and decided to host the customer's applications to assure stability and reliability.</p>
            <p>When QGGI, a consortium formed by Queiroz-Galvão, Galvão &amp; IESA requested an intranet portal for their 2.000+ empoloyees acting in COMPERJ, a requirement for an open-source CMS was key for the first WordPress development at Visual Works. Right after a partnership with Grupo Comunciare and Hiperzoom Comunicação increased the demand and WordPress became the standard CMS for future projects.</p>
            <p>In 2013, all the projects developed and hosted by Visual Works migrated to AWS, increasing security, reliability and stability, making it possible to serve applications using different edge locations, also increasing performance, and to install SSL certificates for each domain, serving requests over HTTPS even for the smallest project.</p>
        </div>;
        return aboutEnglish;
    }
    aboutServices() {
        const aboutServices = <div>
            {/* <h2 className="title is-2 has-text-white">serviços</h2> */}
            <div className="columns">
                <div className="column">{this.servicesHosting()}</div>
                <div className="column">{this.servicesEmails()}</div>
                <div className="column">{this.servicesPhp()}</div>
                <div className="column">{this.servicesJavascript()}</div>
            </div>
        </div>;
        return aboutServices;
    }
    servicesHosting() {
        const servicesHosting = <div className="card">
            <div className="card-content">
                <div className="has-text-centered">
                    <p>
                        <span className="icon is-large">
                            <i className="fab fa-3x fa-aws"></i>
                        </span>
                    </p>
                    <h3 className="is-3">Hospedagem</h3>
                </div>
                <p>Infraestrutura global para sua aplicação, incluindo banco de dados, certificados SSL e registro de domínios através da Amazon Web Services.</p>
                {/* <p>Leveraging Amazon Web Services to host your application in the cloud. Dedicated services for domains, databases, applications, load balancers, caching, CDN and SSL certificates.</p> */}
            </div>
        </div>;
      return servicesHosting;
    }
    servicesEmails() {
        const servicesEmails = <div className="card">
            <div className="card-content">
                <div className="has-text-centered">
                    <p>
                        <span className="icon is-large">
                            <i className="fab fa-3x fa-google"></i>
                        </span>
                    </p>
                    <h3 className="is-3">E-mails</h3>
                </div>
                <p>Plataforma completa para comunicação e organização corporativa com gerenciamento de e-mails, documentos, calendários, e bate-papo através do G Suite.</p>
                {/* <p>Offering Google's G Suite, your business can rely on a stable and complete suite of communication and productivity tools. including e-mail, calendar, chat, docs, forms, drive and more...</p> */}
            </div>
        </div>;
      return servicesEmails;
    }
    servicesPhp() {
        const servicesPhp = <div className="card">
            <div className="card-content">
                <div className="has-text-centered">
                    <p>
                        <span className="icon is-large">
                            <i className="fab fa-3x fa-php"></i>
                        </span>
                    </p>
                    <h3 className="is-3">PHP</h3>
                </div>
                <p>Desenvolvimento e manutenção de aplicações PHP e MySQL/MariaDB, com opção de cache em memória, incluindo WordPress, Magento, Zend Framework ou nativa.</p>
                {/* <p>Installation, configuration, support and maintenance of WordPress applications. It's free if hosted with us, but you can have our services in your server if preferrable.</p> */}
            </div>
        </div>;
      return servicesPhp;
    }
    servicesJavascript() {
        const servicesPhp = <div className="card">
            <div className="card-content">
                <div className="has-text-centered">
                    <p>
                        <span className="icon is-large">
                            <i className="fab fa-3x fa-node-js"></i>
                        </span>
                    </p>
                    <h3 className="is-3">NodeJS</h3>
                </div>
                <p>Desenvolvimento e manutenção de aplicações em NodeJS ou similares, em TypeScript e JavaScript, com os principais frameworks, como UI5, ReactJS, Express e outros.</p>
                {/* <p>Installation, configuration, support and maintenance of WordPress applications. It's free if hosted with us, but you can have our services in your server if preferrable.</p> */}
            </div>
        </div>;
        return servicesPhp;
    }
    render() {
        return (this.about);
    }
}