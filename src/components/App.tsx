import * as React from "react";
import * as B from "./bootstrap/Bootstrap";

const { Component } = React;

class App extends Component<{}, {}> {
    render() {
        return (
            <B.Container>
                <B.Jumbotron>
                    <h1>React App on TypeScript</h1>
                    <sub>with Bootstrap4 and font-awesome managed by Yarn!</sub>
                </B.Jumbotron>
            </B.Container>
        );
    }
}

export default App;