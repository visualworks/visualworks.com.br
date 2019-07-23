import React from "react";
import App from "../app";

export default class Skills extends App {
    constructor(props) {
        super(props);
        this.skills = this.createContent();
    }
    createContent() {
        const skills = <div className="content">
            <h2 className="title is-2">especialidades</h2>
            <p>Conheça abaixo algumas das tecnologias que temos mais experiência. Caso precise de algum serviço específico ou queria informaçõe sobre determinada tecnologia, entre em contato pelo e-mail <a href="mailto:comercial@visualworks.com.br">comercial@visualworks.com.br</a>.</p>
            <div className="columns">
                <div className="column">
                    <h3 className="title is-3">linguagens</h3>
                    {this.createDeveloperContent()}
                </div>
                <div className="column">
                    <h3 className="title is-3">OS &amp; server</h3>
                    {this.createAdministratorContent()}
                </div>
                <div className="column">
                    <h3 className="title is-3">frameworks</h3>
                    {this.createFrameworkContent()}
                </div>
                <div className="column">
                    <h3 className="title is-3">cloud</h3>
                    {this.createCloudContent()}
                </div>
            </div>
        </div>;
        return skills;
    }
    createDeveloperContent() {
        const developerContent = <div className="content">
            <p>ABAP</p>
            <p>CSS</p>
            <p>HTML</p>
            <p>Java</p>
            <p>JavaScript</p>
            <p>PHP</p>
            <p>Shell/Bash</p>
            <p>SQL</p>
        </div>
        return developerContent;
    }
    createAdministratorContent() {
        const administratorContent = <div className="content">
            <p>Apache HTTP Server</p>
            <p>CentOS/RHEL</p>
            <p>Docker</p>
            <p>Git</p>
            <p>HANA</p>
            <p>macOS</p>
            <p>MariaDB/MySQL</p>
            <p>NodeJS</p>
            <p>OpenSuSE/SEL</p>
            <p>VSFTPD</p>
            <p>Windows 10</p>
        </div>;
        return administratorContent;
    }
    createFrameworkContent() {
        const frameworkContent = <div className="content">
            <div>
                <p>Bulma</p>
                <p>HANA XS</p>
                <p>jQuery</p>
                <p>Magento</p>
                <p>ReactJS</p>
                <p>SAPUI5/OpenUI5</p>
                <p>Webpack</p>
                <p>WordPress</p>
                <p>Zend Framework</p>
            </div>
        </div>;
        return frameworkContent;
    }
    createCloudContent() {
        const cloudContent = <div className="content">
            <div>
                <p>AWS ACM</p>
                <p>AWS CloudFront</p>
                <p>AWS EC2</p>
                <p>AWS ElastiCache</p>
                <p>AWS IAM</p>
                <p>AWS RDS</p>
                <p>AWS Route53</p>
                <p>AWS S3</p>
                <p>AWS SES</p>
                <p>AWS VPC</p>
                <p>G Suite</p>
            </div>
        </div>;
        return cloudContent;
    }
    render() {
        return (this.skills);
    }
}