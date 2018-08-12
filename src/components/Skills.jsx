import React from "react";
import App from "app";

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
            <p>ABAP<progress className="progress has-background-white is-info" value="12" max="100">12%</progress></p>
            <p>CSS<progress className="progress has-background-white is-info" value="80" max="100">80%</progress></p>
            <p>HTML<progress className="progress has-background-white is-info" value="92" max="100">92%</progress></p>
            <p>Java<progress className="progress has-background-white is-info" value="32" max="100">32%</progress></p>
            <p>JavaScript<progress className="progress has-background-white is-info" value="87" max="100">87%</progress></p>
            <p>PHP<progress className="progress has-background-white is-info" value="75" max="100">81%</progress></p>
            <p>Shell/Bash<progress className="progress has-background-white is-info" value="62" max="100">62%</progress></p>
            <p>SQL<progress className="progress has-background-white is-info" value="68" max="100">68%</progress></p>
        </div>
        return developerContent;
    }
    createAdministratorContent() {
        const administratorContent = <div className="content">
            <p>Apache HTTP Server<progress className="progress has-background-white is-info" value="84" max="100">84%</progress></p>
            <p>CentOS/RHEL<progress className="progress has-background-white is-info" value="81" max="100">81%</progress></p>
            <p>Docker<progress className="progress has-background-white is-info" value="88" max="100">88%</progress></p>
            <p>Git<progress className="progress has-background-white is-info" value="91" max="100">91%</progress></p>
            <p>HANA<progress className="progress has-background-white is-info" value="64" max="100">64%</progress></p>
            <p>macOS<progress className="progress has-background-white is-info" value="86" max="100">86%</progress></p>
            <p>MariaDB/MySQL<progress className="progress has-background-white is-info" value="83" max="100">83%</progress></p>
            <p>NodeJS<progress className="progress has-background-white is-info" value="74" max="100">74%</progress></p>
            <p>OpenSuSE/SEL<progress className="progress has-background-white is-info" value="78" max="100">78%</progress></p>
            <p>VSFTPD<progress className="progress has-background-white is-info" value="71" max="100">71%</progress></p>
            <p>Windows 10<progress className="progress has-background-white is-info" value="75" max="100">75%</progress></p>
        </div>;
        return administratorContent;
    }
    createFrameworkContent() {
        const frameworkContent = <div className="content">
            <div>
                <p>Bulma<progress className="progress has-background-white is-info" value="94" max="100">94%</progress></p>
                <p>HANA XS<progress className="progress has-background-white is-info" value="88" max="100">88%</progress></p>
                <p>jQuery<progress className="progress has-background-white is-info" value="97" max="100">97%</progress></p>
                <p>Magento<progress className="progress has-background-white is-info" value="73" max="100">73%</progress></p>
                <p>ReactJS<progress className="progress has-background-white is-info" value="83" max="100">83%</progress></p>
                <p>SAPUI5/OpenUI5<progress className="progress has-background-white is-info" value="98" max="100">98%</progress></p>
                <p>Webpack<progress className="progress has-background-white is-info" value="76" max="100">76%</progress></p>
                <p>WordPress<progress className="progress has-background-white is-info" value="92" max="100">92%</progress></p>
                <p>Zend Framework<progress className="progress has-background-white is-info" value="82" max="100">82%</progress></p>
            </div>
        </div>;
        return frameworkContent;
    }
    createCloudContent() {
        const cloudContent = <div className="content">
            <div>
                <p>AWS ACM<progress className="progress has-background-white is-info" value="96" max="100">96%</progress></p>
                <p>AWS CloudFront<progress className="progress has-background-white is-info" value="87" max="100">87%</progress></p>
                <p>AWS EC2<progress className="progress has-background-white is-info" value="78" max="100">78%</progress></p>
                <p>AWS ElastiCache<progress className="progress has-background-white is-info" value="86" max="100">86%</progress></p>
                <p>AWS IAM<progress className="progress has-background-white is-info" value="77" max="100">77%</progress></p>
                <p>AWS RDS<progress className="progress has-background-white is-info" value="82" max="100">82%</progress></p>
                <p>AWS Route53<progress className="progress has-background-white is-info" value="94" max="100">94%</progress></p>
                <p>AWS S3<progress className="progress has-background-white is-info" value="75" max="100">75%</progress></p>
                <p>AWS SES<progress className="progress has-background-white is-info" value="93" max="100">93%</progress></p>
                <p>AWS VPC<progress className="progress has-background-white is-info" value="67" max="100">67%</progress></p>
                <p>G Suite<progress className="progress has-background-white is-info" value="97" max="100">97%</progress></p>
            </div>
        </div>;
        return cloudContent;
    }
    render() {
        return (this.skills);
    }
}