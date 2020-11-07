import {
  Typography,
  Link,
  Button,
  Box,
  TextField,
  FormControl,
  OutlinedInput,
  InputLabel,
  IconButton,
  InputAdornment,
} from '@material-ui/core';
import { VisibilityRounded, VisibilityOffRounded } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import propTypes from 'prop-types';
import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  elementForm: {
    marginLeft: theme.spacing(12),
    marginRight: theme.spacing(12),
  },
  textField: {
    marginTop: theme.spacing(2),
  },
  buttonSignIn: {
    margin: theme.spacing(1, 0),
  },
  textPassword: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  textSignUp: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  recapcha: {
    marginTop: theme.spacing(1),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const FormSignIn = ({ onSubmit }) => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const verifyRecapchaAndInvalid = () => {
    if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email) ||
      password.length < 6
    ) {
      return true;
    }
    return false;
  };

  const classes = useStyles();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <Box className={classes.elementForm} noValidate>
      <TextField
        className={classes.textField}
        name="email"
        placeholder="E-mail"
        label="E-mail"
        variant="outlined"
        value={email}
        onChange={e => setEmail(e.target.value)}
        fullWidth
      />

      <FormControl
        fullWidth
        variant="outlined"
        className={clsx(classes.margin, classes.textField)}
      >
        <InputLabel htmlFor="standard-adornment-password">Senha</InputLabel>
        <OutlinedInput
          id="standard-adornment-password"
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={e => setPassword(e.target.value)}
          labelWidth={40}
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

      <Button
        className={classes.buttonSignIn}
        color="primary"
        disabled={verifyRecapchaAndInvalid()}
        onClick={() => onSubmit({ email, password })}
        fullWidth
        size="large"
        variant="contained"
      >
        Entrar
      </Button>

      <Typography className={classes.textSignUp} variant="body1">
        Não tem uma conta?{' '}
        <Link
          component={RouterLink}
          to="/register"
          underline="always"
          variant="h6"
        >
          Criar conta
        </Link>
      </Typography>
    </Box>
  );
};

FormSignIn.propTypes = {
  onSubmit: propTypes.func.isRequired,
};

export default FormSignIn;
