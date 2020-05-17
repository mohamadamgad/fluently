import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Test from "./Test";
import HomePage from "./HomePage";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/test" component={Test} />
                </Switch>
            </header>
        </div>
    );
}

export default App;
