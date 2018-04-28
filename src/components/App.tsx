import * as React from "react";
import * as Bs4 from "./bootstrap/Bootstrap";

const { Component } = React;

class App extends Component<{}, {}> {
    render() {
        return (
            <Bs4.ContainerFluid>
                <Bs4.Jumbotron>
                    <h1>React App on TypeScript</h1>
                    <sub>with Bootstrap4 and font-awesome managed by Yarn!</sub>
                </Bs4.Jumbotron>
                <Bs4.Row>
                    <Bs4.Col>Hi from first</Bs4.Col>
                    <Bs4.Col md={3}>Hi from second</Bs4.Col>
                    <Bs4.Col md={"auto"}>Hi from second</Bs4.Col>
                </Bs4.Row>
            </Bs4.ContainerFluid>
        );
    }
}

export default App;