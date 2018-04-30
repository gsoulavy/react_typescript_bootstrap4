import * as React from "react";
import * as Bs4 from "./bootstrap/Bootstrap";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Jumbo from "./jumbotron/jumbo";
const { Component } = React;

class App extends Component<{}, {}> {
    render() {
        return (
            <Router>
                <div>
                    <Link to="/jumbotron">Jumbi</Link>
                    <Route path="/jumbotron" component={Jumbo} />
                </div>
            </Router>
        );
    }
}

export default App;