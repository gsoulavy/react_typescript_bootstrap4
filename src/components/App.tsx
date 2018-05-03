import * as React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Jumbotron from "./styles/Jumbotron";
import Intro from "./Intro";
const { Component } = React;

class App extends Component<{}, {}> {
    render() {
        return (
            <Router>
                <div>
                    <nav className="nav navbar-expand-lg navbar-light bg-light mb-4">
                        <a className="navbar-brand" href="#">Bootstrap4</a>
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Intro</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/styles">Styles</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to={`/layout`}>Layout</Link>
                            </li>
                        </ul>
                    </nav>
                    <Route exact path="/" component={Intro}/>
                    <Route path="/styles" component={Jumbotron} />
                    <Route path="/layout" render={() => (
                        <h1>Bootstrap Layout</h1>
                    )}/>

                </div>
            </Router>
        );
    }
}

export default App;