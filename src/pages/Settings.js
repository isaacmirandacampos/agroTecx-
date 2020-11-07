/* eslint-disable jsx-a11y/iframe-has-title */
import { Card, Box } from '@material-ui/core';
import React from 'react';
import FormSettings from '../components/FormSettings';

const Settings = () => {
  return (
    <Box
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Card style={{ marginTop: '5%', width: '75%', padding: 20 }}>
        <FormSettings />
      </Card>
    </Box>
  );
};

export default Settings;
