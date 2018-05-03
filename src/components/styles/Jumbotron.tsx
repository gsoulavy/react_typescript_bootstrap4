import * as React from "react";
import Container from "./../bootstrap/layout/Container";
import Jumbotron from "./../bootstrap/Jumbotron";

const Styles: React.StatelessComponent<{}> = () => {
    return (
        <div>
            <Container applyClass="">
                <Jumbotron>
                    <h1>React App on TypeScript</h1>
                    <sub>with Bootstrap4 and font-awesome managed by Yarn!</sub>
                </Jumbotron>
            </Container>
        </div>
    );
}

export default Styles;