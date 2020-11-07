/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable import/no-unresolved */
import {
  Typography,
  Box,
  Card,
  IconButton,
  CardActions,
  Button,
  Grid,
  Divider,
  TextField,
} from '@material-ui/core';
import NumberFormat from 'react-number-format';
import { FavoriteRounded, ShoppingCartRounded } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import PropTypes from 'prop-types';

const useStyles = makeStyles(() => ({
  media: {
    width: 200,
  },
  listContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 500,
    maxHeight: 750,
    marginTop: 10,
  },
  overflowList: {
    height: 500,
    maxWidth: 700,
    minWidth: 650,
    overflowY: 'auto',
  },
  cardProduct: {
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: 550,
    margin: '15px 10px',
    overFlowY: 'scroll',
  },
}));

const Orders = () => {
  const classes = useStyles();

  const NumberFormatCustom = props => {
    const { inputRef, onChange, ...other } = props;

    return (
      <NumberFormat
        {...other}
        getInputRef={inputRef}
        onValueChange={values => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        thousandSeparator
        sepa
        isNumericString
        value="0"
        prefix="R$ "
        suffix=".00"
      />
    );
  };

  NumberFormatCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  return (
    <Box
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Grid container spacing={4} style={{ marginTop: '5%' }}>
        <Grid md={5} sm={12} item>
          <Card>
            <Box
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Typography style={{ marginLeft: 20, padding: 10 }} variant="h2">
                Anuncios
              </Typography>
            </Box>
            <Divider style={{ width: '100%', marginTop: 10 }} />
            <Box className={classes.listContainer}>
              <Box className={classes.overflowList}>
                <Card className={classes.cardProduct}>
                  <img
                    className={classes.media}
                    src={`${process.env.PUBLIC_URL}/assets/images/priceBrackground.jpg`}
                    alt="Paella dish"
                  />
                  <Box>
                    <Typography variant="h4" style={{ textAlign: 'center' }}>
                      Mandioca
                    </Typography>
                    <Typography
                      variant="body1"
                      style={{ textAlign: 'justify', padding: 5 }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec auctor, erat at viverra feugiat, leo dui volutpat
                      dui, nec commodo odio odio sit amet nisl.
                    </Typography>
                    <Box
                      style={{
                        width: '100%',
                      }}
                    >
                      <CardActions
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}
                      >
                        <IconButton aria-label="add to favorites">
                          <FavoriteRounded />
                        </IconButton>
                        <Button
                          size="small"
                          variant="contained"
                          color="primary"
                          startIcon={<ShoppingCartRounded />}
                        >
                          Adicionar ao carrinho
                        </Button>
                      </CardActions>
                    </Box>
                  </Box>
                </Card>
                <Card className={classes.cardProduct}>
                  <img
                    className={classes.media}
                    src={`${process.env.PUBLIC_URL}/assets/images/priceBrackground.jpg`}
                    alt="Paella dish"
                  />
                  <Box>
                    <Typography variant="h4" style={{ textAlign: 'center' }}>
                      Mandioca
                    </Typography>
                    <Typography
                      variant="body1"
                      style={{ textAlign: 'justify', padding: 5 }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec auctor, erat at viverra feugiat, leo dui volutpat
                      dui, nec commodo odio odio sit amet nisl.
                    </Typography>
                    <Box
                      style={{
                        width: '100%',
                      }}
                    >
                      <CardActions
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}
                      >
                        <IconButton aria-label="add to favorites">
                          <FavoriteRounded />
                        </IconButton>
                        <Button
                          size="small"
                          variant="contained"
                          color="primary"
                          startIcon={<ShoppingCartRounded />}
                        >
                          Adicionar ao carrinho
                        </Button>
                      </CardActions>
                    </Box>
                  </Box>
                </Card>
              </Box>
            </Box>
          </Card>
        </Grid>
        <Grid md={7} sm={12} item>
          <Card>
            <Box
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Typography style={{ marginLeft: 20, padding: 10 }} variant="h2">
                Criar anuncio
              </Typography>
            </Box>
            <Box style={{ padding: 20 }}>
              <TextField
                style={{ marginBottom: 5 }}
                variant="outlined"
                label="Nome do produto"
                placeholder="Nome do produto"
                fullWidth
              />
              <TextField
                style={{ marginTop: 5 }}
                variant="outlined"
                maxLength={1500}
                fullWidth
                rowsMax={15}
                rows={5}
                multiline
                label="Descrição do produto"
                placeholder="Descrição do produto"
              />
              <Box
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  marginTop: 10,
                }}
              >
                <TextField
                  variant="outlined"
                  label="Preço"
                  placeholder="Preço"
                  InputProps={{
                    inputComponent: NumberFormatCustom,
                  }}
                />
              </Box>
              <Button
                variant="contained"
                style={{ marginTop: 10 }}
                fullWidth
                color="primary"
              >
                Criar anuncio
              </Button>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Orders;
