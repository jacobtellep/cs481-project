import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DailyJobReport from "./components/DailyJobReport";
import GetDailyJobReport from "./components/GetDailyJobReport";
import NavBar from "./components/NavBar";
import Forms from "./components/Forms";
import CreateForm from "./components/CreateForm";
import ViewForm from "./components/ViewForm";

import JSAform from './components/JSAform';
import GetJSAform from './components/GetJSAform';

import InspectionForm from './components/InspectionForm';
import GetInspectionForm from './components/GetInspectionForm';

import Logout from "./components/Logout";
import LoginButton from "./components/LoginButton";
import Login from "./components/Login";
import LogoutButton from "./components/LogoutButton";


const App = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/createdailyjobreport" component={DailyJobReport} />
          <Route path="/getdailyjobreport" component={GetDailyJobReport} />

          <Route path="/createjobsafetyanalysis" component={JSAform} />
          <Route path="/getjobsafetyanalysis" component={GetJSAform} />

          <Route path="/createinspectionform" component={InspectionForm} />
          <Route path="/getinspectionform" component={GetInspectionForm} />

          <Route path="/forms" exact component={Forms} />
          <Route path="/createform" component={CreateForm} />
          <Route path="/viewform" component={ViewForm} />



          <Route path="/logout" component={Logout} />
          <Route path="/login" component={Login} />
          <Route path="/" exact>
            <LoginButton />
            <br></br>
            <LogoutButton />
            <br></br>

            Home Page
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
