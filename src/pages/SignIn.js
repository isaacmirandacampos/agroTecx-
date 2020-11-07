/* eslint-disable jsx-a11y/iframe-has-title */
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

import FormSignIn from '../components/FormSignIn';

const useStyles = makeStyles(theme => ({
  typographyForm: {
    marginLeft: theme.spacing(12),
    marginRight: theme.spacing(12),
    marginTop: theme.spacing(8),
  },
}));

const SignIn = () => {
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.typographyForm} variant="h3">
        Entrar no AgroTecx
      </Typography>
      <FormSignIn />
    </>
  );
};

export default SignIn;
