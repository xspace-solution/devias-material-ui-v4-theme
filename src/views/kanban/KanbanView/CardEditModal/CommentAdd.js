import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useSnackbar } from 'notistack';
import {
  Avatar,
  TextField,
  makeStyles
} from '@material-ui/core';
import { useDispatch } from 'src/store';
import useAuth from 'src/hooks/useAuth';
import { addComment } from 'src/slices/kanban';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center'
  },
  field: {
    marginLeft: theme.spacing(2)
  }
}));

const CommentAdd = ({ cardId, className, ...rest }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { user } = useAuth();
  const { enqueueSnackbar } = useSnackbar();
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    event.persist();
    setMessage(event.target.value);
  };

  const handleKeyUp = async (event) => {
    try {
      event.persist();

      if (event.keyCode === 13 && message) {
        await dispatch(addComment(cardId, message));
        setMessage('');
        enqueueSnackbar('Comment added', {
          variant: 'success'
        });
      }
    } catch (err) {
      console.error(err);
      enqueueSnackbar('Something went wrong', {
        variant: 'error'
      });
    }
  };

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Avatar
        alt="Person"
        src={user.avatar}
      />
      <TextField
        fullWidth
        className={classes.field}
        value={message}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
        placeholder="Write a comment..."
        variant="outlined"
      />
    </div>
  );
}

CommentAdd.propTypes = {
  cardId: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default CommentAdd;
