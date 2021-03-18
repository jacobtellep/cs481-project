import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import DailyJobReport from "./components/DailyJobReport";
import GetDailyJobReport from "./components/GetDailyJobReport";
import NavBar from "./components/NavBar";
import Forms from "./components/Forms";
import CreateForm from "./components/CreateForm";
import ViewForm from "./components/ViewForm";
import Logout from "./components/Logout";
import Login from "./components/Login";
import Pricing from "./components/Pricing";
import ViewPricing from "./components/ViewPricing";
import JSAform from "./components/JSAform";

const App = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <ProtectedRoute
            path="/createdailyjobreport"
            component={DailyJobReport}
          />
          <ProtectedRoute
            path="/getdailyjobreport"
            component={GetDailyJobReport}
          />
          <ProtectedRoute path="/createjobsafetyanalysis" component={JSAform} />
          <ProtectedRoute path="/forms" exact component={Forms} />
          <ProtectedRoute path="/createform" component={CreateForm} />
          <ProtectedRoute path="/viewform" component={ViewForm} />
          <ProtectedRoute path="/pricing" component={Pricing} />
          <ProtectedRoute path="/viewpricing" component={ViewPricing} />
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
