import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core';
import OverallReviews from './OverallReviews';
import ReviewCard from './ReviewCard';

const useStyles = makeStyles((theme) => ({
  root: {},
  review: {
    marginTop: theme.spacing(2)
  }
}));

const Reviews = ({
  className,
  reviews,
  ...rest
}) => {
  const classes = useStyles();
  let rating = reviews.reduce((acc, review) => acc + review.value, 0) / reviews.length;

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <OverallReviews
        rating={rating}
        reviewsCount={reviews.length}
      />
      {reviews.map((review) => (
        <ReviewCard
          className={classes.review}
          key={review.id}
          review={review}
        />
      ))}
    </div>
  );
};

Reviews.propTypes = {
  className: PropTypes.string,
  reviews: PropTypes.array
};

export default Reviews;
