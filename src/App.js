import React from "react";
import FLLogin from "./Freelancers/pages/fl-login/fl-login";
import FLSignup from "./Freelancers/pages/fl-signup/fl-signup";
import CLLogin from "./Clients/pages/cl-login/cl-login";
import CLSignup from "./Clients/pages/cl-signup/cl-signup";
import CreateCompany from "./Clients/pages/cl-creatCom/cl-create";
import CLStartProj from "./Clients/pages/cl-StartProject/cl-startProj";
import { FlSignupinRoutes } from "./routers/Freelancers/fl-registration-routes";
import { ClSignupinRoutes } from "./routers/Clients/cl-registration-routes";
import LandingPage from "./landing-page/pages/landing-page";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeaderNav from "./landing-page/components/header-nav/header-nav";
import { FlDashboard } from "./Freelancers/pages/dashboard/dashboard";
import CLMemberInfo from "./Clients/pages/cl-signup/cl-memberInfo";
import CLdashboard from "./Clients/pages/cl-dashboard/cl-dashboard";
import ContinueTo from "./Clients/pages/continue";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import MainRoute from "./routers/mainRoutes";
import FlProfileSetup from "./Freelancers/pages/profile-setup/profile-setup";
import AgencySetup from "./Freelancers/pages/agency-setup/agency-setup";
import FlLandingPage from "./Freelancers/pages/fl-landing-page/fl-landing-page";
import { ExploreProject } from "./Freelancers/pages/fl-explore-projects/fl-explore-projects";
import FlMainContainer from "./Freelancers/pages/fl-main-container/fl-main-container";

axios.defaults.baseURL = "http://207.154.230.96/";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";

axios.defaults.withCredentials = true;

const App = () => (
  /*

vgfsdgbdfhbfdgn


  */
  <Switch>
    {/* <Route path="/flUser/dashboard" component={FlDashboard} />
    <Route path="/flUser/explore-projects" component={ExploreProject} /> */}
    {/* <Route path="/flUser/main" component={FlMainContainer} /> */}
    <Route exact path="/">
      <LandingPage />
    </Route>
    <Route exact path="/clUser/login">
      <CLLogin />
    </Route>
    <Route exact path="/clUser/signup">
      <CLSignup />
    </Route>
    <Route exact path="/clUser/Dash">
      <CLdashboard />
    </Route>
    <Route exact path="/clUser/signup/memberInfo">
      <CLMemberInfo />
    </Route>
    <MainRoute />
    <Route exact path="/clUser/Create-Company">
      <CreateCompany />
    </Route>
    <Route exact path="/clUser/Start-Project">
      <CLStartProj />
    </Route>

    <Route exact path="/clUser/continue">
      <ContinueTo />
    </Route>
    <Route exact path="/fl-landing-page">
      <FlLandingPage />
    </Route>
  </Switch>
);

export default App;

{
  /* <Route exact path="/flUser/login">
        <FLLogin />
      </Route>
      <Route exact path="/flUser/signup">
        <FLSignup />
      </Route> */
}
{
  /* <Route exact path="/clUser/login">
        <CLLogin />
      </Route>
      <Route exact path="/clUser/signup">
        <CLSignup />
      </Route> */
}
