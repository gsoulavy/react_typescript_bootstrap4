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
                    <div>Before links</div>
                    <Link to="/home">Home</Link>
                    <Link to="/jumbotron">Jumbi</Link>
                    <Link to={`/tosome/${5}`}>5</Link>
                    <div>After links</div>
                    <Route path="/jumbotron" component={Jumbo} />
                    <Route path="/tosome/:id" component={Some} />
                    <Route path="/home" render={() => <div>Home</div>}/>
                    <div>After routes</div>
                </div>
            </Router>
        );
    }
}

const Some = ({ match }) => {
    return (
        <div>
            The id is: {match.params.id}
        </div>);
}

export default App;