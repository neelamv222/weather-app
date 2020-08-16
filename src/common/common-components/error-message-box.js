import React from 'react';
import { object } from "prop-types";
import { Alert, AlertTitle } from '@material-ui/lab';

const ErrorMessageBox = ({ error }) => {
  const { cod, message } = error || {};
  return (
    <Alert severity="error">
      <AlertTitle>Request failed with Error Code: {cod}: </AlertTitle>
      <strong>{message}</strong>
    </Alert>
  );
}

ErrorMessageBox.propTypes = {
  error: object
};

export default ErrorMessageBox;
