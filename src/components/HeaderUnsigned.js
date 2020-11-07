/* eslint-disable consistent-return */
import { AppBar, Toolbar, Box, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'fixed',
    top: 0,
    background: theme.palette.white,
    height: 64,
  },
  height: {
    height: 64,
  },
  menuIcon: {
    margin: 'auto',
    cursor: 'pointer',
  },
  logoAuth: {
    marginLeft: 4,
    width: 180,
    marginTop: 10,
  },
  appLogo: {
    width: 80,
  },
  spaceHeader: {
    flexGrow: 1,
  },
  linkHeader: {
    color: theme.palette.black,
    textDecoration: 'none',
    marginLeft: '10px',
  },
}));

const HeaderUnsigned = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position="fixed">
      <Toolbar className={classes.height}>
        <RouterLink to="/login" style={{ textDecoration: 'none' }}>
          <Box
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img
              alt="Logo"
              src={`${process.env.PUBLIC_URL}/assets/images/logo.png`}
              className={classes.appLogo}
              style={{ textDecoration: 'none' }}
            />
            <Typography variant="h2">AgroTecx</Typography>
          </Box>
        </RouterLink>

        <div className={classes.spaceHeader} />
        <>
          <RouterLink to="/login" className={classes.linkHeader}>
            <Button color="inherit">Entrar</Button>
          </RouterLink>
          <RouterLink to="/register" className={classes.linkHeader}>
            <Button color="inherit">Criar conta</Button>
          </RouterLink>
        </>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderUnsigned;
