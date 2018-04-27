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
            </Bs4.ContainerFluid>
        );
    }
}

export default App;