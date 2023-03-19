import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';
import { Rating } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  root: {},
  rating: {
    marginLeft: theme.spacing(2),
    fontWeight: theme.typography.fontWeightBold
  }
}));

const OverallReviews = ({
  className,
  rating,
  reviewsCount,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent>
        <Grid
          alignItems="center"
          container
          spacing={3}
        >
          <Grid item>
            <Typography
              variant="h5"
              color="textPrimary"
            >
              Overall Reviews
            </Typography>
          </Grid>
          <Grid item>
            <Box
              display="flex"
              alignItems="center"
            >
              <Rating value={rating} />
              <Typography
                className={classes.rating}
                variant="h6"
                color="textPrimary"
              >
                {rating.toFixed(1)}
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <Typography
              color="textSecondary"
              variant="body2"
            >
              {reviewsCount}
              {' '}
              reviews in total
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

OverallReviews.propTypes = {
  className: PropTypes.string,
  rating: PropTypes.number.isRequired,
  reviewsCount: PropTypes.number.isRequired
};

export default OverallReviews;
