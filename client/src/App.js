import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DailyJobReport from "./components/DailyJobReport";
import GetDailyJobReport from "./components/GetDailyJobReport";
import NavBar from "./components/NavBar";
import Forms from "./components/Forms";
import CreateForm from "./components/CreateForm";
import ViewForm from "./components/ViewForm";
import Logout from "./components/Logout";
import Login from "./components/Login";
import LoginNavBar from "./components/LoginNavBar";
import { useAuth0 } from "@auth0/auth0-react";

const App = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      <Router>
        <NavBar />
        <LoginNavBar />
        <Switch>
          <Route path="/createdailyjobreport" component={DailyJobReport} />
          <Route path="/getdailyjobreport" component={GetDailyJobReport} />
          <Route path="/forms" exact component={Forms} />
          <Route path="/createform" component={CreateForm} />
          <Route path="/viewform" component={ViewForm} />
          <Route path="/logout" component={Logout} />
          <Route path="/login" component={Login} />
          <Route path="/" exact>
            Home Page
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
