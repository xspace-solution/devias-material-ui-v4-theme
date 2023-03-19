import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  FormHelperText,
  makeStyles
} from '@material-ui/core';
import useAuth from 'src/hooks/useAuth';
import useIsMountedRef from 'src/hooks/useIsMountedRef';

const useStyles = makeStyles(() => ({
  root: {}
}));

const Auth0Register = ({ className, ...rest }) => {
  const classes = useStyles();
  const { loginWithPopup } = useAuth();
  const [error, setError] = useState(null);
  const isMountedRef = useIsMountedRef();

  const handleRegister = async () => {
    try {
      await loginWithPopup();
    } catch (err) {
      console.error(err);
      if (isMountedRef.current) {
        setError(err.message);
      }
    }
  };

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      {error && (
        <Box my={3}>
          <FormHelperText error>
            {error}
          </FormHelperText>
        </Box>
      )}
      <Box
        display="flex"
        justifyContent="center"
      >
        <Button
          onClick={handleRegister}
          variant="contained"
          color="secondary"
        >
          Register with Auth0
        </Button>
      </Box>
    </div>
  );
};

Auth0Register.propTypes = {
  className: PropTypes.string
};

export default Auth0Register;
