import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

export const AuthRouteFl = ({
  component: Component,
  authenticated,
  ...rest
}) => {
  const userData = useSelector((state) => state.User);
  return (
    <div>
      <Route
        {...rest}
        render={(props) => {
          if (
            userData.authenticated === true &&
            userData.credentials.type === 1
          ) {
            <Redirect to="/flUser/dashboard" />;
          } else if (userData.authenticated === false) {
            <Redirect to="/fl-landing-page" />;
          } else {
            <Component {...props} />;
          }
        }}
      />
    </div>
  );
};

export default AuthRouteFl;

{
  /* <Route
{...rest}
render={(props) =>
  userData.authenticated === true &&
  userData.credentials[0].type === 1 ? (
    <Redirect to="/flUser/dashboard" />
  ) : (
    <Component {...props} />
  )
}
/> */
}

// AuthRoute.propTypes = {
//     user: PropTypes.object.isRequired
// }

// const mapStateToProps = (state) => ({
//     authenticated: state.user.authenticated
// })

// export default connect(mapStateToProps)(AuthRoute);
