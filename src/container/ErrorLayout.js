/* eslint-disable consistent-return */
import { CssBaseline, Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';

import HeaderUnsigned from '../components/HeaderUnsigned';

const useStyles = makeStyles(() => ({
  gridContainer: {
    height: '100vh',
  },
}));

export default function ErrorLayout({ children }) {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Box>
        <HeaderUnsigned />
        <Grid container className={classes.gridContainer}>
          {children}
        </Grid>
      </Box>
    </>
  );
}

ErrorLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
