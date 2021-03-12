import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import Header from "./components/Header";
import Home from "./containers/Home";
import Profile from "./containers/Profile";

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header isAuthenticated />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
      </Switch>
      <Redirect to="/" />
    </Router>
  );
};

export default App;
