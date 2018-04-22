import * as React from "react";

class App extends React.Component<{}, {}> {
    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1>React App on TypeScript</h1>
                    <sub>with Bootstrap4 and font-awesome managed by Yarn!</sub>
                </div>
            </div>);
    }
}

export default App;