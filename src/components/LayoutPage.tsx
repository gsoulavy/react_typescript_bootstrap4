import * as React from "react";
import Container from "./bootstrap/layout/Container";
import Jumbotron from "./bootstrap/layout/Jumbotron";

const LayoutPage: React.StatelessComponent<{}> = () => {
    return (
        <div>
            <Container applyClass="">
                <Jumbotron>
                    <h1>Layout</h1>
                    <sub>With bootstrap 4</sub>
                </Jumbotron>
            </Container>
        </div>
    );
};

export default LayoutPage;