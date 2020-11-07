/* eslint-disable jsx-a11y/iframe-has-title */
import {
  Typography,
  Box,
  Card,
  IconButton,
  CardActions,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from '@material-ui/core';
import { FavoriteRounded, ShoppingCartRounded } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';

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
    maxWidth: 800,
    minWidth: 750,
    overflowY: 'auto',
  },
  cardProduct: {
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: '15px 0',
    overFlowY: 'scroll',
  },
}));

const Products = () => {
  const classes = useStyles();
  const [values, setValues] = useState({
    uf: '',
    name: '',
  });

  const handleChangeValues = name => event => {
    setValues({
      ...values,
      [name]: event.target.value,
    });
  };

  const options = [
    {
      item: 'Selecione',
      value: '',
    },
    {
      item: 'Acre',
      value: 'Acre',
    },
    {
      item: 'Alagoas',
      value: 'Alagoas',
    },
    {
      item: 'Amapá',
      value: 'Amapá',
    },
    {
      item: 'Amazonas',
      value: 'Amazonas',
    },
    {
      item: 'Bahia',
      value: 'Bahia',
    },
    {
      item: 'Ceará',
      value: 'Ceara',
    },
    {
      item: 'Distrito Federal',
      value: 'Distrito Federal',
    },
    {
      item: 'Espírito Santo',
      value: 'Espírito Santo',
    },
    {
      item: 'Goiás',
      value: 'Goiás',
    },
    {
      item: 'Maranhão',
      value: 'Maranhão',
    },
    {
      item: 'Mato Grosso',
      value: 'Mato Grosso',
    },
    {
      item: 'Mato Grosso do Sul',
      value: 'Mato Grosso do Sul',
    },
    {
      item: 'Minas Gerais',
      value: 'Minas Gerais',
    },
    {
      item: 'Pará',
      value: 'Pará',
    },
    {
      item: 'Paraíba',
      value: 'Paraíba',
    },
    {
      item: 'Paraná',
      value: 'Paraná',
    },
    {
      item: 'Pernambuco',
      value: 'Pernambuco',
    },
    {
      item: 'Piauí',
      value: 'Piauí',
    },
    {
      item: 'Rio de Janeiro',
      value: 'Rio de Janeiro',
    },
    {
      item: 'Rio Grande do Norte',
      value: 'Rio Grande do Norte',
    },
    {
      item: 'Rio Grande do Sul',
      value: 'Rio Grande do Sul',
    },
    {
      item: 'Rondônia',
      value: 'Rondônia',
    },
    {
      item: 'Roraima',
      value: 'Roraima',
    },
    {
      item: 'Santa Catarina',
      value: 'Santa Catarina',
    },
    {
      item: 'São Paulo',
      value: 'São Paulo',
    },
    {
      item: 'Sergipe',
      value: 'Sergipe',
    },
    {
      item: 'Tocantins',
      value: 'Tocantins',
    },
  ];
  return (
    <Box
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Card style={{ width: '60%', marginTop: '5%', padding: 30 }}>
        <Box
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography style={{ marginLeft: 10 }} variant="h3">
            Produtos
          </Typography>
          <Box>
            <TextField
              variant="outlined"
              placeholder="nome do produto"
              label="Nome do produto"
              value={values.name}
              onChange={handleChangeValues('name')}
              style={{ marginRight: 20 }}
            />
            <FormControl variant="outlined" style={{ width: 100 }}>
              <InputLabel id="state">Estado</InputLabel>
              <Select
                labelId="state"
                label="Estado"
                id="demo-simple-select"
                value={values.uf}
                style={{ width: 200 }}
                variant="outlined"
                onChange={handleChangeValues('uf')}
              >
                {options.map(opt => (
                  <MenuItem value={opt.value}>{opt.item}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <div />
          <div />
        </Box>
        <Box className={classes.listContainer}>
          <Box className={classes.overflowList}>
            <Card className={classes.cardProduct}>
              <img
                className={classes.media}
                src={`${process.env.PUBLIC_URL}/assets/images/priceBrackground.jpg`}
                alt="Paella dish"
              />
              <Box style={{ width: 500 }}>
                <Typography variant="h4" style={{ textAlign: 'center' }}>
                  Mandioca
                </Typography>
                <Typography
                  variant="body1"
                  style={{ textAlign: 'justify', padding: 10 }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  auctor, erat at viverra feugiat, leo dui volutpat dui, nec
                  commodo odio odio sit amet nisl.
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
    </Box>
  );
};

export default Products;
