import * as React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import IntroPage from "./IntroPage";
import LayoutPage from "./LayoutPage";;
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
                                <Link className="nav-link" to="/layout">Layout</Link>
                            </li>
                        </ul>
                    </nav>
                    <Route exact path="/" component={IntroPage}/>
                    <Route path="/layout" component={LayoutPage} />
                </div>
            </Router>
        );
    }
}

export default App;