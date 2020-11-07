/* eslint-disable jsx-a11y/iframe-has-title */
import {
  Typography,
  Box,
  Card,
  IconButton,
  CardActions,
  CardHeader,
  CardContent,
  CardMedia,
  Avatar,
} from '@material-ui/core';
import {
  FavoriteRounded,
  ShopRounded,
  MoreVertRounded,
} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles(theme => ({
  typographyForm: {
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(12),
    marginRight: theme.spacing(12),
  },
}));

const Cart = () => {
  const classes = useStyles();

  return (
    <Box
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Card style={{ width: '75%', marginTop: '5%' }}>
        <Typography className={classes.typographyForm} variant="h3">
          Produtos
        </Typography>

        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertRounded />
              </IconButton>
            }
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
          />
          <CardMedia
            className={classes.media}
            image={`${process.env.PUBLIC_URL}/assets/images/agroBackground.jpg`}
            title="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteRounded />
            </IconButton>
            <IconButton aria-label="share">
              <ShopRounded />
            </IconButton>
          </CardActions>
        </Card>
      </Card>
    </Box>
  );
};

export default Cart;
