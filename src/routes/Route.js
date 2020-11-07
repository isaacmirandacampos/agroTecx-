/* eslint-disable no-nested-ternary */
/* eslint-disable consistent-return */

import PropTypes from 'prop-types';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import SignedLayout from '../container/SignedLayout';
import UnsignedLayout from '../container/UnsignedLayout';

const RouteWrapper = ({ component: Component, isPrivate, ...rest }) => {
  const signed = true;

  if (!signed && isPrivate) {
    return <Redirect to="/login" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/products" />;
  }

  const Layout = isPrivate ? SignedLayout : UnsignedLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};

export default RouteWrapper;
