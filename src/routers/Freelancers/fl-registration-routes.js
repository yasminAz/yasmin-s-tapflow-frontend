import React from "react";
import { connect } from "react-redux";
import FLLogin from "../../Freelancers/pages/fl-login/fl-login";
import FLSignup from "../../Freelancers/pages/fl-signup/fl-signup";
import { AgencySetup } from "../../Freelancers/pages/agency-setup/agency-setup";

import { Route } from "react-router-dom";
import AuthRouteFl from "../../util/AuthRouteFl/AuthRouteFl";
import FlLandingPage from "../../Freelancers/pages/fl-landing-page/fl-landing-page";
import FlProfileSetup from "../../Freelancers/pages/profile-setup/profile-setup";

export const FlRegistrationRoutes = (props) => {
  return (
    <div>
      {/* <AuthRouteFl exact path="/flUser/login" component={FLLogin} />
      <AuthRouteFl exact path="/flUser/signup" component={FLSignup} /> */}
      {/* <Route path="/flUser/login">
        <FLLogin />
      </Route>
      <Route path="/flUser/signup">
        <FLSignup />
      </Route> */}
      {/* <AuthRouteFl
        exact
        path="/flUser/profile-setup"
        component={FlProfileSetup}
      /> */}
      {/* <AuthRouteFl exact path="/fl-landing-page" component={FlLandingPage} /> */}

      {/* <Route path="/flUser/profile-setup">
        <ProfileSetup />
      </Route> */}

      {/* <Route path="/flUser/agency-setup">
        <AgencySetup />
      </Route> */}
    </div>
  );
};

export default FlRegistrationRoutes;
