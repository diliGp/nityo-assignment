import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ROUTE_PATHS } from "./Constants/routes";
import { AppContext } from "./Contexts";
import Login from "./Components/Login";
import Users from "./Components/Users";

function App() {
  const [users, setUsers] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <AppContext.Provider
      value={{ users, currentUser, setUsers, setCurrentUser }}
    >
      <Router>
        {currentUser && currentUser.data.id ? (
          <Redirect to={ROUTE_PATHS.dashboard} />
        ) : (
          <Redirect to={ROUTE_PATHS.login} />
        )}
        <Switch>
          {!currentUser || !currentUser.data.id ? (
            <Route path={ROUTE_PATHS.login} component={Login} />
          ) : (
            <Route path={ROUTE_PATHS.dashboard} component={Users} />
          )}

          <Route path="/" component={Login} exact />
        </Switch>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
