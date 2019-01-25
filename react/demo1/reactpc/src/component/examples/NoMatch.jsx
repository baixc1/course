import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";

function NoMatchExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/old-match">Old Match, to be redirected</Link>
          </li>
          <li>
            <Link to="/will-match">Will Match</Link>
          </li>
          <li>
            <Link to="/will-not-match">Will Not Match</Link>
          </li>
          <li>
            <Link to="/also/will/not/match">Also Will Not Match</Link>
          </li>
        </ul>
        {/* A <Route> with no path prop or a <Redirect> with no from prop will always match the current location. */}
        <Switch>
          <Route path="/" exact component={Home} />
          {/* match a location when rendering a <Redirect> inside of a <Switch>. */}
          <Redirect from="/old-match" to="/will-match" />
          <Route path="/will-match" component={WillMatch} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <p>
      A <code>&lt;Switch></code> renders the first child <code>&lt;Route></code>{" "}
      that matches. A <code>&lt;Route></code> with no <code>path</code> always
      matches.
    </p>
  );
}

function WillMatch() {
  return <h3>Matched!</h3>;
}

//function components  props
function NoMatch({ location }) {
  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

export default NoMatchExample;