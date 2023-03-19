import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  SvgIcon,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: 'flex-start',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}));

const ActionButton = ({
  icon: iconProp,
  children,
  ...rest
}) => {
  const classes = useStyles();

  const Icon = iconProp ? (
    <SvgIcon fontSize="small">
      {iconProp}
    </SvgIcon>
  ) : null;

  return (
    <Button
      className={classes.root}
      fullWidth
      variant="contained"
      size="small"
      startIcon={Icon}
      {...rest}
    >
      {children}
    </Button>
  );
};

ActionButton.propTypes = {
  icon: PropTypes.element,
  children: PropTypes.node
};

export default ActionButton;
