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
          <Route path="/forms" exact component={Forms} />
          <Route path="/createform" component={CreateForm} />
          <Route path="/viewform" component={ViewForm} />
          <Route path="/" exact>
            Home Page
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
