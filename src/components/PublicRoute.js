import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

// Component ----------------------------------------------------------

function PublicRoute({ component: Component, layout: Layout, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

// Proptypes ----------------------------------------------------------

PublicRoute.propTypes = {
  component: PropTypes.func.isRequired,
  layout: PropTypes.func.isRequired,
};

export default PublicRoute;
