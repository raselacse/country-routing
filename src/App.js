import './App.css';
import Main from './Components/Main/Main';
import {BrowserRouter as Router, Switch, Route, Link, useRouteMatch} from "react-router-dom";
import CountryInfo from './Components/CountryInfo/CountryInfo';

function App() {
  return (
    <>
      <Router>
        <Switch>
            <Route exact path="/">
              <Main/>
            </Route>
            <Route path="/:name">
              <CountryInfo></CountryInfo>
            </Route>
            <Route path="*">
              <h1>404</h1>
            </Route>
        </Switch>
    </Router>
    </>
  );
}

export default App;
