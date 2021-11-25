import React from "react";
import { Route } from "react-router-dom";
// import UnAuthRouteFl from "../util/AuthRouteFl/UnAuthRouteFl";
// import { ClRegistrationRoutes } from "./Clients/cl-registration-routes";
// import { FlRegistrationRoutes } from "./Freelancers/fl-registration-routes";
import { useSelector } from "react-redux";
import FlDashboard from "../../Freelancers/pages/dashboard/dashboard";
import { FlProfileSetup } from "../../Freelancers/pages/profile-setup/profile-setup";
import AgencySetup from "../../Freelancers/pages/agency-setup/agency-setup";
import FlMainContainer from "../../Freelancers/pages/fl-main-container/fl-main-container";

function AllRoutes() {
  return (
    <div>
      {/* <Route path="/flUser/dashboard" component={FlDashboard} />
      <Route path="/flUser/explore-projects" component={ExploreProject} />
       */}
      <Route path="/flUser/main" component={FlMainContainer} />
      <Route path="/flUser/profile-setup" component={FlProfileSetup} />
      <Route path="/flUser/agency-setup" component={AgencySetup} />
    </div>
  );
}

export default AllRoutes;
