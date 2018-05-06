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
                <code className="language-html" data-lang="html">
                    <div>
                        <span className="nt">&lt;div</span>
                        <span className="na">class=</span>
                        <span className="s">"col"</span>
                        <span className="nt">&gt;</span>
                        One of three columns
                    <span className="nt">&lt;/div&gt;</span>
                    </div>
                </code>
            </Container>
        </Container>
    );
};

export default IntroPage;
