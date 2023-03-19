import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import { Lightbox } from 'react-modal-image';
import {
  Avatar,
  Box,
  Link,
  Typography,
  makeStyles
} from '@material-ui/core';
import useAuth from 'src/hooks/useAuth';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(2),
    display: 'flex'
  },
  avatar: {
    height: 32,
    width: 32
  },
  image: {
    cursor: 'pointer',
    height: 'auto',
    maxWidth: '100%',
    width: 380
  }
}));

const MessageItem = ({
  className,
  message,
  thread,
  ...rest
}) => {
  const classes = useStyles();
  const { user } = useAuth();
  const [selectedImage, setSelectedImage] = useState(null);

  // Since chat mock db is not synced with external auth providers
  // we set the user details from user auth state instead of thread participants
  const sender = thread.participants.find((_participant) => _participant.id === message.senderId);
  const senderDetails = message.senderId === '5e86809283e28b96d2d38537'
    ? {
      avatar: user.avatar,
      name: 'Me',
      type: 'user'
    } : {
      avatar: sender.avatar,
      name: sender.name,
      type: 'contact'
    };

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Box
        display="flex"
        maxWidth={500}
        ml={senderDetails.type === 'user' ? 'auto' : 0}
      >
        <Avatar
          className={classes.avatar}
          src={senderDetails.avatar}
        />
        <Box ml={2}>
          <Box
            bgcolor={senderDetails.type === 'user' ? 'secondary.main' : 'background.default'}
            borderRadius="borderRadius"
            boxShadow={1}
            color={senderDetails.type === 'user' ? 'secondary.contrastText' : 'text.primary'}
            px={2}
            py={1}
          >
            <Link
              color="inherit"
              component={RouterLink}
              to="#"
              variant="h6"
            >
              {senderDetails.name}
            </Link>
            <Box mt={1}>
              {message.contentType === 'image' ? (
                <Box
                  mt={2}
                  onClick={() => setSelectedImage(message.body)}
                >
                  <img
                    alt="Attachment"
                    className={classes.image}
                    src={message.body}
                  />
                </Box>
              ) : (
                  <Typography
                    color="inherit"
                    variant="body1"
                  >
                    {message.body}
                  </Typography>
                )}
            </Box>
          </Box>
          <Box
            mt={1}
            display="flex"
            justifyContent="flex-end"
          >
            <Typography
              noWrap
              color="textSecondary"
              variant="caption"
            >
              {moment(message.createdAt).fromNow()}
            </Typography>
          </Box>
        </Box>
      </Box>
      {selectedImage && (
        <Lightbox
          large={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
};

MessageItem.propTypes = {
  className: PropTypes.string,
  message: PropTypes.object.isRequired,
  thread: PropTypes.object.isRequired
};

export default MessageItem;
