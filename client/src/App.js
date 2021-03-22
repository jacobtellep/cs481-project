import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import DailyJobReport from './components/DailyJobReport';
import GetDailyJobReport from './components/GetDailyJobReport';
import NavBar from './components/NavBar';
import Forms from './components/Forms';
import CreateForm from './components/CreateForm';
import ViewForm from './components/ViewForm';
import Logout from './components/Logout';
import Login from './components/Login';
import Pricing from './components/Pricing';
import ViewPricing from './components/ViewPricing';
import JSAform from './components/JSAform';
import GetJSAform from './components/GetJSAform';
import Inspection from './components/InspectionForm';
import GetInspection from './components/GetInspectionForm';
import { useAuth0 } from '@auth0/auth0-react';
import Loading from './components/Loading';
import logo from './HGCARTE.jpg';

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

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
          <ProtectedRoute path="/getjobsafetyanalysis" component={GetJSAform} />
          <ProtectedRoute path="/createinspection" component={Inspection} />
          <ProtectedRoute path="/getinspection" component={GetInspection} />
          <ProtectedRoute path="/forms" exact component={Forms} />
          <ProtectedRoute path="/createform" component={CreateForm} />
          <ProtectedRoute path="/viewform" component={ViewForm} />
          <ProtectedRoute path="/pricing" component={Pricing} />
          <ProtectedRoute path="/viewpricing" component={ViewPricing} />
          <Route path="/logout" component={Logout} />
          <Route path="/login" component={Login} />
          <Route path="/" exact>
            <img style={{ padding: '10px', width: '100px' }} src={logo} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
