import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Button,
  Drawer,
  Grid,
  Hidden,
  SvgIcon,
  Typography,
  makeStyles
} from '@material-ui/core';
import {
  Check as CheckIcon,
  X as XIcon,
  Trash as TrashIcon
} from 'react-feather';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2)
  },
  actions: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > * + *': {
      marginLeft: theme.spacing(2)
    }
  }
}));

const BulkOperations = ({
  className,
  onDelete,
  onMarkPaid,
  onMarkUnpaid,
  open,
  selected,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <Drawer
      anchor="bottom"
      open={open}
      PaperProps={{ elevation: 1 }}
      variant="persistent"
    >
      <div
        className={clsx(classes.root, className)}
        {...rest}
      >
        <Grid
          alignItems="center"
          container
          spacing={2}
        >
          <Hidden smDown>
            <Grid
              item
              md={3}
            >
              <Typography
                color="textSecondary"
                variant="subtitle1"
              >
                {selected.length}
                {' '}
                selected
              </Typography>
            </Grid>
          </Hidden>
          <Grid
            item
            md={6}
            xs={12}
          >
            <div className={classes.actions}>
              <Button
                onClick={onMarkPaid}
                startIcon={
                  <SvgIcon fontSize="small" >
                    <CheckIcon />
                  </SvgIcon>
                }
              >
                Mark Paid
              </Button>
              <Button
                onClick={onMarkUnpaid}
                startIcon={
                  <SvgIcon fontSize="small" >
                    <XIcon />
                  </SvgIcon>
                }
              >
                Mark Unpaid
              </Button>
              <Button
                onClick={onDelete}
                startIcon={
                  <SvgIcon fontSize="small" >
                    <TrashIcon />
                  </SvgIcon>
                }
              >
                Delete
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
    </Drawer>
  );
}

BulkOperations.propTypes = {
  className: PropTypes.string,
  onDelete: PropTypes.func,
  onMarkPaid: PropTypes.func,
  onMarkUnpaid: PropTypes.func,
  open: PropTypes.bool,
  selected: PropTypes.array.isRequired
};

BulkOperations.defaultProps = {
  onDelete: () => {},
  onMarkPaid: () => {},
  onMarkUnpaid: () => {},
  open: false
};

export default BulkOperations;
