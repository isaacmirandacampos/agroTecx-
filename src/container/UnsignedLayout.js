/* eslint-disable consistent-return */
import { CssBaseline, Box, Grid, Card, colors } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';

import HeaderUnsigned from '../components/HeaderUnsigned';

const useStyles = makeStyles(() => ({
  gridContainer: {
    height: '100vh',
    paddingTop: '64px',
    overflow: 'hidden',
  },
  gridImage: {
    background: colors.grey[100],
    textAlign: 'center',
    margin: '0 auto',
  },
  cardElement: {
    height: '100%',
    width: '100%',
  },
  sizeImage: {
    height: '100%',
    width: '100%',
  },
}));

export default function UnsignedLayout({ children }) {
  const classes = useStyles();

  const imageBackground = () => {
    const randomImages = [
      'priceBrackground.jpg',
      'agroBackground.jpg',
      'gãoBackground.jpg',
    ];

    return `${process.env.PUBLIC_URL}/assets/images/${
      randomImages[Math.floor(Math.random() * randomImages.length)]
    }`;
  };

  return (
    <>
      <CssBaseline />
      <Box>
        <HeaderUnsigned />
        <Grid container className={classes.gridContainer}>
          <Grid item sm={false} md={6} className={classes.gridImage}>
            <img
              src={imageBackground()}
              className={classes.sizeImage}
              alt="background"
            />
          </Grid>
          <Grid item sm={12} md={6} className={classes.gridForm}>
            <Card className={classes.cardElement}>{children}</Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

UnsignedLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
