import React from 'react';
import clsx from 'clsx';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormHelperText,
  Link,
  TextField,
  Typography,
  makeStyles
} from '@material-ui/core';
import useAuth from 'src/hooks/useAuth';
import useIsMountedRef from 'src/hooks/useIsMountedRef';

const useStyles = makeStyles((theme) => ({
  root: {},
  googleButton: {
    backgroundColor: theme.palette.common.white
  },
  providerIcon: {
    marginRight: theme.spacing(2)
  },
  divider: {
    flexGrow: 1
  },
  dividerText: {
    margin: theme.spacing(2)
  }
}));

const FirebaseAuthRegister = ({ className, ...rest }) => {
  const classes = useStyles();
  const { createUserWithEmailAndPassword, signInWithGoogle } = useAuth();
  const isMountedRef = useIsMountedRef();

  const handleGoogleClick = async () => {
    try {
      await signInWithGoogle();
    } catch(err) {
      console.error(err);
    }
  };

  return (
    <>
      <Button
        className={classes.googleButton}
        fullWidth
        onClick={handleGoogleClick}
        size="large"
        variant="contained"
      >
        <img
          alt="Google"
          className={classes.providerIcon}
          src="/static/images/google.svg"
        />
        Register with Google
      </Button>
      <Box
        alignItems="center"
        display="flex"
        mt={2}
      >
        <Divider
          className={classes.divider}
          orientation="horizontal"
        />
        <Typography 
          color="textSecondary"
          variant="body1"
          className={classes.dividerText}
        >
          OR
        </Typography>
        <Divider
          className={classes.divider}
          orientation="horizontal"
        />
      </Box>
      <Formik
        initialValues={{
          email: '',
          password: '',
          policy: true,
          submit: null
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
          password: Yup.string().min(7).max(255).required('Password is required'),
          policy: Yup.boolean().oneOf([true], 'This field must be checked')
        })}
        onSubmit={async (values, {
          setErrors,
          setStatus,
          setSubmitting
        }) => {
          try {
            await createUserWithEmailAndPassword(values.email, values.password);

            if (isMountedRef.current) {
              setStatus({ success: true });
              setSubmitting(false);
            }
          } catch (err) {
            console.error(err);
            if (isMountedRef.current) {
              setStatus({ success: false });
              setErrors({ submit: err.message });
              setSubmitting(false);
            }
          }
        }}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          values
        }) => (
          <form
            noValidate
            className={clsx(classes.root, className)}
            onSubmit={handleSubmit}
            {...rest}
          >
            <TextField
              error={Boolean(touched.email && errors.email)}
              fullWidth
              helperText={touched.email && errors.email}
              label="Email Address"
              margin="normal"
              name="email"
              onBlur={handleBlur}
              onChange={handleChange}
              type="email"
              value={values.email}
              variant="outlined"
            />
            <TextField
              error={Boolean(touched.password && errors.password)}
              fullWidth
              helperText={touched.password && errors.password}
              label="Password"
              margin="normal"
              name="password"
              onBlur={handleBlur}
              onChange={handleChange}
              type="password"
              value={values.password}
              variant="outlined"
            />
            <Box
              alignItems="center"
              display="flex"
              mt={2}
              ml={-1}
            >
              <Checkbox
                checked={values.policy}
                name="policy"
                onChange={handleChange}
              />
              <Typography
                variant="body2"
                color="textSecondary"
              >
                I have read the
                {' '}
                <Link
                  component="a"
                  href="#"
                  color="secondary"
                >
                  Terms and Conditions
                </Link>
              </Typography>
            </Box>
            {Boolean(touched.policy && errors.policy) && (
              <FormHelperText error>
                {errors.policy}
              </FormHelperText>
            )}
            {errors.submit && (
              <Box mt={3}>
                <FormHelperText error>
                  {errors.submit}
                </FormHelperText>
              </Box>
            )}
            <Box mt={2}>
              <Button
                color="secondary"
                disabled={isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Register
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </>
  );
};

FirebaseAuthRegister.propTypes = {
  className: PropTypes.string
};

export default FirebaseAuthRegister;
