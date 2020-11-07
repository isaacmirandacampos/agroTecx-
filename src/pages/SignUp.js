import { Typography, Grid, Box, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import FormSignUp from '../components/FormSignUp';

const useStyles = makeStyles(() => ({
  textLogin: {
    margin: '16px auto 0 auto',
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },
}));

const SignUp = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={4}>
        <Grid item sm={12}>
          <FormSignUp />
          <Box className={classes.textLogin}>
            <Typography variant="body1">
              Já possui uma conta?{' '}
              <Link
                component={RouterLink}
                to="/login"
                underline="always"
                variant="h6"
              >
                Entrar
              </Link>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default SignUp;
