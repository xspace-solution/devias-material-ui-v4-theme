import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Avatar,
  Box,
  Chip,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles
} from '@material-ui/core';
import { AvatarGroup } from '@material-ui/lab';

const getDetails = (thread, currentUserId) => {
  const otherParticipants = thread.participants.filter((participant) => participant.id !== currentUserId);
  const displayNames = otherParticipants.reduce((names, participant) => [...names, participant.name], []).join(', ');
  let displayText = ''
  const lastMessage = thread.messages[thread.messages.length - 1];

  if (lastMessage) {
    const sender = lastMessage.senderId === currentUserId ? 'Me: ' : '';
    const message = lastMessage.contentType === 'image' ? 'Sent a photo' : lastMessage.body;
    
    displayText = `${sender}${message}`
  }

  return {
    otherParticipants,
    displayNames,
    displayText
  };
};

const useStyles = makeStyles((theme) => ({
  active: {
    backgroundColor: theme.palette.action.selected,
    boxShadow: `inset 4px 0px 0px ${theme.palette.secondary.main}`
  },
  smallAvatar: {
    height: 30,
    width: 30,
    '&:first-child': {
      marginTop: 10
    }
  },
  unreadIndicator: {
    height: 18,
    marginTop: 2,
    minWidth: 18,
    padding: 2
  }
}));

const ThreadItem = ({
  active,
  className,
  thread,
  onSelect,
  ...rest
}) => {
  const classes = useStyles();

  // We hardcode the current user ID because the mocked that is not in sync with the auth provider.
  // When implementing this app with a real database, replace this ID with the ID from Auth Context.
  const details = getDetails(thread, '5e86809283e28b96d2d38537');

  return (
    <ListItem
      button
      className={clsx(
        { [classes.active]: active },
        className
      )}
      onClick={onSelect}
      {...rest}
    >
      <ListItemAvatar>
        <AvatarGroup
          classes={{ avatar: details.otherParticipants.length > 1 ? classes.smallAvatar : null }}
          max={2}
        >
          {details.otherParticipants.map((participant) => (
            <Avatar
              alt="Person"
              key={participant.id}
              src={participant.avatar}
            />
          ))}
        </AvatarGroup>
      </ListItemAvatar>
      <ListItemText
        primary={details.displayNames}
        primaryTypographyProps={{
          noWrap: true,
          variant: 'h6',
          color: 'textPrimary'
        }}
        secondary={details.displayText}
        secondaryTypographyProps={{
          noWrap: true,
          variant: 'body2',
          color: 'textSecondary'
        }}
      />
      <Box
        ml={2}
        display="flex"
        flexDirection="column"
        alignItems="flex-end"
      >
        {thread.unreadCount > 0 && (
          <Chip
            className={classes.unreadIndicator}
            color="secondary"
            size="small"
            label={thread.unreadCount}
          />
        )}
      </Box>
    </ListItem>
  );
};

ThreadItem.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  onSelect: PropTypes.func,
  thread: PropTypes.object.isRequired
};

ThreadItem.defaultProps = {
  active: false,
  onSelect: () => { }
};

export default ThreadItem;
