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
                            <span className="nt">&gt;</span>
                            One of three columns
                            <span className="nt">&lt;/Container&gt;</span>
                        </code>
                    </pre>
                </div>
            </Container>
        </Container>
    );
};

export default IntroPage;
