import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { useSelector } from "react-redux";

import Header from "./components/Header";
import Home from "./containers/Home";
import Profile from "./containers/Profile";
import { RootState } from "./types";
import { authenticateUser } from "./store/slices/authSlice";
import { useAppDispatch } from "./store/store";

const App = () => {
  const dispatch = useAppDispatch();
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  const handleLogin = () => {
    dispatch(authenticateUser());
  };

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header isAuthenticated={isAuthenticated} handleLogin={handleLogin} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
      </Switch>
      <Redirect to="/" />
    </Router>
  );
};

export default App;
