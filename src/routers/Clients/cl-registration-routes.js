import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CLLogin from "../../Clients/pages/cl-login/cl-login";
import CLSignup from "../../Clients/pages/cl-signup/cl-signup";

export const ClRegistrationRoutes = (props) => {
  return (
    <div>
      <Route exact path="/clUser/login">
        <CLLogin />
      </Route>
      <Route exact path="/clUser/signup">
        <CLSignup />
      </Route>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClRegistrationRoutes);
