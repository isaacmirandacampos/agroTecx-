import { Box, Drawer, List, ListItem, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { PeopleAltRounded, Description } from '@material-ui/icons';
import clsx from 'clsx';
import React, { forwardRef } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  elementDrawer: {
    top: 64,
    height: 'calc(100% - 64px)',
    boxShadow: '2px 0px 1px -1px rgba(0,0,0,0.2)',
    display: 'flex',
    maxWidth: '20%',
  },
  drawerOpen: {
    width: '18em',
    minWidth: '80px',
    overflowX: 'hidden',
  },
  drawerClose: {
    overflowX: 'hidden',
    width: '4em',
    minWidth: '70px',
  },
  sidebarContent: {
    backgroundColor: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(2),
  },
  sidebarHeader: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 'fit-content',
  },
  elementAvatar: {
    width: 60,
    height: 60,
  },
  typographyName: {
    marginTop: theme.spacing(1),
  },
  elementDivider: {
    margin: theme.spacing(2, 0),
  },
  elementItem: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0,
  },
  elementActive: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    '& $elementIcon': {
      color: theme.palette.primary.main,
    },
  },
  elementButton: {
    padding: '10px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    fontSize: 18,
    width: '100%',
    fontWeight: theme.typography.fontWeightMedium,
  },
  elementIcon: {
    color: theme.palette.icon,
    width: 24,
    height: 24,
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(4),
  },
  divFixed: {
    height: 24,
  },
  centralize: {
    width: 180,
    height: 200,
    display: 'flex',
    flexDirection: 'column',
    marginTop: 25,
    boderBox: '1.5px solid black',
    boxShadow: '2px 2px 17px #BABABA',
    padding: 10,
    borderRadius: 3,
  },
  iconCircle: {
    backgroundColor: '#13523B',
    height: 40,
    width: 40,
    borderRadius: '50%',
    display: 'flex',
    alignItens: 'center',
    justifyContent: 'center',
    margin: '5px auto',
  },
  iconCircleButton: {
    cursor: 'pointer',
    backgroundColor: '#13523B',
    height: 40,
    width: 40,
    borderRadius: '50%',
    display: 'flex',
    alignItens: 'center',
    justifyContent: 'center',
    margin: '5px auto',
  },
  star: {
    color: '#E9D35E',
    margin: 'auto',
    height: 30,
    width: 30,
  },
  iconCircleButtonMinus: {
    cursor: 'pointer',
    backgroundColor: '#13523B',
    height: 20,
    width: 20,
    borderRadius: '50%',
    display: 'flex',
    alignItens: 'center',
    justifyContent: 'center',
    margin: '5px auto',
  },
  starMinus: {
    color: '#E9D35E',
    margin: 'auto',
    height: 15,
    width: 15,
  },
  title: {
    color: '#13523B',
    fontWeight: 'bold',
    fontSize: 12,
    letterSpacing: 0.4,
    margin: '14px 0px 5px',
  },
  description: {
    marginBottom: 14,
  },
  upBtn: {
    width: 84,
    margin: '5px auto',
  },
}));

const CustomNavLink = forwardRef((props, ref) => (
  <div ref={ref} style={{ flexGrow: 1 }}>
    <NavLink {...props} />
  </div>
));

const NavBar = () => {
  const classes = useStyles();
  const navbar = useSelector(state => state.navbar.open);

  const pages = [
    {
      title: 'Clientes',
      href: '/admin/clients',
      icon: <PeopleAltRounded />,
    },
    {
      title: 'Blog',
      href: '/admin/blog',
      icon: <Description />,
    },
  ];
  return (
    <>
      <Drawer
        variant="permanent"
        open={navbar}
        className={clsx({
          [classes.drawerOpen]: navbar,
          [classes.drawerClose]: !navbar,
        })}
        classes={{
          paper: clsx(classes.elementDrawer, {
            [classes.drawerOpen]: navbar,
            [classes.drawerClose]: !navbar,
          }),
        }}
      >
        <Box className={classes.sidebarContent}>
          <List className={classes.elementList}>
            {pages.map(page => (
              <ListItem
                className={classes.elementItem}
                disableGutters
                key={page.title}
              >
                <Button
                  activeClassName={classes.elementActive}
                  className={classes.elementButton}
                  component={CustomNavLink}
                  to={page.href}
                >
                  <Box className={classes.elementIcon}>{page.icon}</Box>
                  {page.title}
                </Button>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default NavBar;
