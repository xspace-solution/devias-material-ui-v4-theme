import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: theme.spacing(4),
    marginBottom: theme.spacing(2)
  }
}));

const List = ({
  variant: Component,
  children,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <Component
      className={classes.root}
      {...rest}
    >
      {children}
    </Component>
  );
}

List.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['ul', 'ol'])
};

List.defaultProps = {
  variant: 'ul'
};

export default List;
