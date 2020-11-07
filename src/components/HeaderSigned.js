/* eslint-disable consistent-return */
import {
  AppBar,
  Toolbar,
  Button,
  Tooltip,
  IconButton,
  Typography,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
  Menu,
  ShoppingCartRounded,
  LocalOfferRounded,
  SettingsRounded,
} from '@material-ui/icons';
import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  appBar: {
    background: theme.palette.white,
    zIndex: theme.zIndex.drawer + 1,
    height: 64,
  },
  menuIcon: {
    margin: 'auto',
    cursor: 'pointer',
  },
  logoAuth: {
    marginLeft: 4,
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

const HeaderSigned = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <AppBar className={classes.appBar} position="fixed">
      <Toolbar>
        <Tooltip title="Menu">
          <IconButton aria-label="menu" onClick={() => setOpen(true)}>
            <Menu color="action" className={classes.menuIcon} />
          </IconButton>
        </Tooltip>
        <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
          <Box
            style={{ width: 250, height: '100%', background: '#fefefe' }}
            role="presentation"
          >
            <List style={{ padding: 10, paddingTop: 20 }}>
              <RouterLink to="/products" style={{ textDecoration: 'none' }}>
                <ListItem>
                  <ListItemIcon>
                    <ShoppingCartRounded />
                  </ListItemIcon>
                  <ListItemText>Produtos</ListItemText>
                </ListItem>
              </RouterLink>
              <RouterLink to="/orders" style={{ textDecoration: 'none' }}>
                <ListItem>
                  <ListItemIcon>
                    <LocalOfferRounded />
                  </ListItemIcon>
                  <ListItemText>Anúncios</ListItemText>
                </ListItem>
              </RouterLink>
              <RouterLink to="/settings" style={{ textDecoration: 'none' }}>
                <ListItem>
                  <ListItemIcon>
                    <SettingsRounded />
                  </ListItemIcon>
                  <ListItemText>Configurações</ListItemText>
                </ListItem>
              </RouterLink>
            </List>
          </Box>
        </Drawer>
        <RouterLink to="/products" style={{ textDecoration: 'none' }}>
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
              className={classes.logoAuth}
            />
            <Typography variant="h2">AgroTecx</Typography>
          </Box>
        </RouterLink>

        <div className={classes.spaceHeader} />
        <RouterLink to="/cart" className={classes.linkHeader}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<ShoppingCartRounded style={{ color: '#fff' }} />}
          >
            Carrinho
          </Button>
        </RouterLink>
        <RouterLink to="/login" className={classes.linkHeader}>
          <Button color="inherit">Sair</Button>
        </RouterLink>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderSigned;
