/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import {
  Box,
  Button,
  TextField,
  FormControl,
  InputLabel,
  InputAdornment,
  OutlinedInput,
  IconButton,
  Typography,
  Select,
  MenuItem,
} from '@material-ui/core';
import { VisibilityOffRounded, VisibilityRounded } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  elementForm: {
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(12),
    marginRight: theme.spacing(12),
  },
  textField: {
    marginTop: theme.spacing(2),
  },
  selectField: {
    marginTop: theme.spacing(1),
  },
  boxPhone: {
    display: 'flex',
    flexDirection: 'row',
  },
  phoneState: {
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  centerButton: {
    margin: '16px auto 0 auto',
    display: 'block',
  },
  recapcha: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
}));

const FormSignUp = () => {
  const classes = useStyles();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    segment: '',
    uf: '',
  });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChangeValues = name => event => {
    setValues({
      ...values,
      [name]: event.target.value,
    });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const options = [
    {
      item: 'Selecione',
      value: '',
    },
    {
      item: 'Agropecuária',
      value: 'Agropecuaria',
    },
    {
      item: 'supermercado',
      value: 'Supermercado',
    },
    {
      item: 'Varejo',
      value: 'Varejo',
    },
    {
      item: 'Atacado',
      value: 'Atacado',
    },
  ];

  const states = [
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
    <form className={classes.elementForm} noValidate>
      <Typography variant="h3">Crie sua conta</Typography>
      <TextField
        className={classes.textField}
        variant="outlined"
        name="name"
        placeholder="Nome completo"
        label="Nome completo"
        value={values.name}
        onChange={handleChangeValues('name')}
        fullWidth
      />

      <TextField
        className={classes.textField}
        variant="outlined"
        name="email"
        id="email"
        placeholder="E-mail"
        label="E-mail"
        value={values.email}
        onChange={handleChangeValues('email')}
        fullWidth
      />
      <Box style={{ display: 'flex', alignItems: 'center' }}>
        <FormControl variant="outlined" fullWidth style={{ marginTop: 15 }}>
          <InputLabel id="states">Estado</InputLabel>
          <Select
            labelId="states"
            label="Estado"
            id="demo-simple-select"
            value={values.uf}
            variant="outlined"
            onChange={handleChangeValues('uf')}
            style={{ marginRight: 20 }}
          >
            {states.map(opt => (
              <MenuItem value={opt.value}>{opt.item}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl variant="outlined" fullWidth style={{ marginTop: 15 }}>
          <InputLabel id="segment">Segmento</InputLabel>
          <Select
            labelId="segment"
            label="Segmento"
            id="demo-simple-select"
            value={values.segment}
            variant="outlined"
            onChange={handleChangeValues('segment')}
          >
            {options.map(opt => (
              <MenuItem value={opt.value}>{opt.item}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <FormControl
        fullWidth
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
      >
        <InputLabel htmlFor="standard-adornment-password">
          Digite uma senha
        </InputLabel>
        <OutlinedInput
          id="standard-adornment-password"
          labelWidth={110}
          type={showPassword ? 'text' : 'password'}
          value={values.password}
          onChange={handleChangeValues('password')}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? (
                  <VisibilityRounded />
                ) : (
                  <VisibilityOffRounded />
                )}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <FormControl
        fullWidth
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
      >
        <InputLabel htmlFor="standard-adornment-confirmPassword">
          Confirmar senha
        </InputLabel>
        <OutlinedInput
          labelWidth={105}
          id="standard-adornment-confirmPassword"
          type={showConfirmPassword ? 'text' : 'password'}
          value={values.confirmPassword}
          onChange={handleChangeValues('confirmPassword')}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                onMouseDown={handleMouseDownPassword}
              >
                {showConfirmPassword ? (
                  <VisibilityRounded />
                ) : (
                  <VisibilityOffRounded />
                )}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <Box>
        <Button
          variant="contained"
          color="primary"
          className={classes.centerButton}
          disabled={
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email) ||
            !values.password ||
            !values.confirmPassword
          }
        >
          Salvar edição
        </Button>
      </Box>
    </form>
  );
};

export default FormSignUp;
