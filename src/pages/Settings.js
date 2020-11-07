/* eslint-disable jsx-a11y/iframe-has-title */
import { Card, Box, Grid, Button } from '@material-ui/core';
import React from 'react';
import Cards from 'react-credit-cards';
import FormSettings from '../components/FormSettings';
import 'react-credit-cards/es/styles-compiled.css';

const Settings = () => {
  return (
    <Box
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Grid container spacing={4} style={{ marginTop: '5%' }}>
        <Grid item md={7} sm={12}>
          <Card style={{ padding: 20 }}>
            <FormSettings />
          </Card>
        </Grid>
        <Grid item md={5} sm={12}>
          <Card
            style={{
              padding: 20,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Cards expiry="" name="" number="4242 4242 4242 4242" />
            <Button
              variant="contained"
              style={{ marginTop: 10 }}
              color="primary"
            >
              Adicionar cartão
            </Button>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Settings;
