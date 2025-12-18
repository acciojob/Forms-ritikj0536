import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Form from "./Form";
import FormRef from "./FormRef";
import FormState from "./FormState";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link id="form-link" to="/">Form</Link>
        <Link id="form-ref-link" to="/ref">Form Ref</Link>
        <Link id="form-state-link" to="/state">Form State</Link>
      </nav>

      <Switch>
        <Route exact path="/" component={Form} />
        <Route path="/ref" component={FormRef} />
        <Route path="/state" component={FormState} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
