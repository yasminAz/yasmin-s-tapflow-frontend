import React from "react";
import { Route } from "react-router-dom";
import UnAuthRouteFl from "../util/AuthRouteFl/UnAuthRouteFl";
import { ClRegistrationRoutes } from "./Clients/cl-registration-routes";
import { FlRegistrationRoutes } from "./Freelancers/fl-registration-routes";
import { useSelector } from "react-redux";
import FlDashboard from "../Freelancers/pages/dashboard/dashboard";
import AuthRouteFl from "../util/AuthRouteFl/AuthRouteFl";
import AllRoutes from "./Freelancers/allRoutes";
import FlLandingPage from "../Freelancers/pages/fl-landing-page/fl-landing-page";
import { FlProfileSetup } from "../Freelancers/pages/profile-setup/profile-setup";

function MainRoute() {
  return (
    <div>
      {/* <UnAuthRouteFl path="/flUser" component={AllRoutes} /> */}
      <Route path="/flUser" component={AllRoutes} />
      <Route path="/fl-landing-page" component={FlLandingPage} />
    </div>
  );
}

export default MainRoute;
