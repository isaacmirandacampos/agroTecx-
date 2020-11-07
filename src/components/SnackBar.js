/* eslint-disable arrow-parens */

import { Snackbar } from '@material-ui/core';
import { teal, red, orange } from '@material-ui/core/colors';
import { Alert } from '@material-ui/lab';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { closeSnackbar } from '../store/ducks/snackbar';

export default function SnackBar() {
  const dispatch = useDispatch();
  const snackbar = useSelector(state => state.snackbar);

  const { open, text, severity } = snackbar;

  const getColor = () => {
    switch (true) {
      case severity === 'error':
        return red[500];
      case severity === 'warning':
        return orange[300];
      default:
        return teal[500];
    }
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(closeSnackbar());
  };
  return (
    <>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        onClose={handleClose}
        autoHideDuration={3000}
      >
        <Alert
          style={{ background: `${getColor()}` }}
          elevation={6}
          variant="filled"
          severity={severity}
        >
          {text}
        </Alert>
      </Snackbar>
    </>
  );
}
