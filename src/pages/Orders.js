/* eslint-disable jsx-a11y/iframe-has-title */
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles(theme => ({
  typographyForm: {
    marginLeft: theme.spacing(12),
    marginRight: theme.spacing(12),
    marginTop: theme.spacing(8),
  },
}));

const Orders = () => {
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.typographyForm} variant="h3">
        Entrar no agroTecx
      </Typography>
    </>
  );
};

export default Orders;
