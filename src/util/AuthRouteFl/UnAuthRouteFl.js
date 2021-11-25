import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

export const UnAuthRouteFl = ({
  component: Component,
  authenticated,
  ...rest
}) => {
  const userData = useSelector((state) => state.User);
  return (
    <div>
      <Route
        {...rest}
        render={(props) =>
          userData.authenticated === false ? (
            <Redirect to="/fl-landing-page" />
          ) : (
            <Component {...props} />
          )
        }
      />
    </div>
  );
};

// && userData.credentials.type === 0 ?

export default UnAuthRouteFl;
