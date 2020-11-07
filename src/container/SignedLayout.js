/* eslint-disable consistent-return */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { CssBaseline, Box, colors } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';

import HeaderSigned from '../components/HeaderSigned';

const useStyles = makeStyles(theme => ({
  elementBox: {
    padding: theme.spacing(4),
    background: colors.grey[100],
    height: '100vh',
    overFlow: 'hidden',
  },
  gridContainerClose: {
    height: '100%',
    paddingTop: 64,
    paddingLeft: 72,
  },
  gridContainerOpen: {
    height: '100%',
    paddingTop: 64,
    paddingLeft: 240,
  },
}));

export default function SignedLayout({ children }) {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Box style={{ height: '100%' }}>
        <HeaderSigned />
        <Box className={classes.elementBox}>{children}</Box>
      </Box>
    </>
  );
}

SignedLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
