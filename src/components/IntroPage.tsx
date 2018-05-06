import * as React from "react";
import Container from "./bootstrap/layout/Container";
import Jumbotron from "./bootstrap/layout/Jumbotron";

const IntroPage: React.StatelessComponent<{}> = () => {
    return (
        <Container>
            <Jumbotron>
                <h1>Bootstrap 4 components with React and Typescript</h1>
            </Jumbotron>
        </Container>
    );
};

export default IntroPage;
