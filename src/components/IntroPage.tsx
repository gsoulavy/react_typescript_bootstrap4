import * as React from "react";
import Container from "./bootstrap/layout/Container";
import Jumbotron from "./bootstrap/layout/Jumbotron";

const IntroPage: React.StatelessComponent<{}> = () => {
    return (
        <Container>
            <Jumbotron>
                <h1>Bootstrap 4 components with React and Typescript</h1>
            </Jumbotron>
            <Container>
                <div className="highlight">
                    <pre>
                        <code className="language-html" data-lang="html">
                            <span className="nt">&lt;Container </span>
                            <span className="na">className=</span>
                            <span className="s">"main"</span>
                            <span className="nt">&gt;</span><br/><span>&nbsp;&nbsp;</span>
                            <span className="nt">&lt;Row </span>
                            <span className="na">className=</span>
                            <span className="s">"row"</span>
                            <span className="nt">&gt;</span><br/><span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>
                            <span className="nt">&lt;Col </span>
                            <span className="na">className=</span>
                            <span className="s">"col align-self-start"</span>
                            <span className="nt">&gt;</span><br/><span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>
                            One of three columns<br/><span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>
                            <span className="nt">&lt;/Col&gt;</span><br/><span>&nbsp;&nbsp;</span>
                            <span className="nt">&lt;Col </span>
                            <span className="na">className=</span>
                            <span className="s">"col align-self-center"</span>
                            <span className="nt">&gt;</span><br/><span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>
                            One of three columns<br/><span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>
                            <span className="nt">&lt;/Col&gt;</span><br/><span>&nbsp;&nbsp;</span>
                            <span className="nt">&lt;Col </span>
                            <span className="na">className=</span>
                            <span className="s">"col align-self-end"</span>
                            <span className="nt">&gt;</span><br/><span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>
                            One of three columns<br/><span>&nbsp;&nbsp;</span>
                            <span className="nt">&lt;/Col&gt;</span>
                            <span className="nt">&lt;/Row&gt;</span><br/>
                            <span className="nt">&lt;/Container&gt;</span><br/>
                        </code>
                    </pre>
                </div>
            </Container>
        </Container>
    );
};

export default IntroPage;
