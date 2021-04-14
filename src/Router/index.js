import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "Page/Home";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path={"/"} exact>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
