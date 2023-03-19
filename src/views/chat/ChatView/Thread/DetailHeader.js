import React, {
  useState,
  useRef
} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  ListItemIcon,
  ListItemText,
  SvgIcon,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Avatar,
  Box,
  makeStyles,
  Typography
} from '@material-ui/core';
import { AvatarGroup } from '@material-ui/lab';
import {
  Archive as ArchiveIcon,
  BellOff as BellOffIcon,
  Camera as CameraIcon,
  MoreVertical as MoreIcon,
  Phone as PhoneIcon,
  Slash as SlashIcon,
  Trash as TrashIcon
} from 'react-feather';

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: 'center',
    backgroundColor: theme.palette.background.default,
    borderBottom: `1px solid ${theme.palette.divider}`,
    display: 'flex',
    flexShrink: 0,
    minHeight: 64,
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(1)
  },
  smallAvatar: {
    height: 30,
    width: 30,
    '&:first-child': {
      marginTop: 10
    }
  }
}));

const DetailHeader = ({
  className,
  participants,
  ...rest
}) => {
  const classes = useStyles();
  const moreRef = useRef(null);
  const [openMenu, setOpenMenu] = useState(false);

  // We hardcode the current user ID because the mocked that is not in sync with the auth provider.
  // When implementing this app with a real database, replace this ID with the ID from Auth Context.
  const otherParticipants = participants.filter((participant) => participant.id !== '5e86809283e28b96d2d38537');
  const displayNames = otherParticipants.reduce((names, participant) => [...names, participant.name], []).join(', ');

  const handleMenuOpen = () => {
    setOpenMenu(true);
  };

  const handleMenuClose = () => {
    setOpenMenu(false);
  };

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Box
        alignItems="center"
        display="flex"
      >
        <AvatarGroup
          classes={{ avatar: otherParticipants.length > 1 ? classes.smallAvatar : null}}
          max={2}
        >
          {otherParticipants.map((participant) => (
            <Avatar
              alt="Person"
              key={participant.id}
              src={participant.avatar}
            />
          ))}
        </AvatarGroup>
        <Typography
          color="textPrimary"
          variant="h5"
        >
          {displayNames}
        </Typography>
      </Box>
      <Box flexGrow={1} />
      <IconButton>
        <SvgIcon fontSize="small">
          <PhoneIcon />
        </SvgIcon>
      </IconButton>
      <IconButton>
        <SvgIcon fontSize="small">
          <CameraIcon />
        </SvgIcon>
      </IconButton>
      <Tooltip title="More options">
        <IconButton
          onClick={handleMenuOpen}
          ref={moreRef}
        >
          <SvgIcon fontSize="small">
            <MoreIcon />
          </SvgIcon>
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={moreRef.current}
        keepMounted
        elevation={1}
        onClose={handleMenuClose}
        open={openMenu}
      >
        <MenuItem>
          <ListItemIcon>
            <SvgIcon fontSize="small">
              <SlashIcon />
            </SvgIcon>
          </ListItemIcon>
          <ListItemText primary="Block contact" />
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <SvgIcon fontSize="small">
              <TrashIcon />
            </SvgIcon>
          </ListItemIcon>
          <ListItemText primary="Delete thread" />
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <SvgIcon fontSize="small">
              <ArchiveIcon />
            </SvgIcon>
          </ListItemIcon>
          <ListItemText primary="Archive thread" />
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <SvgIcon fontSize="small">
              <BellOffIcon />
            </SvgIcon>
          </ListItemIcon>
          <ListItemText primary="Mute notifications" />
        </MenuItem>
      </Menu>
    </div>
  );
};

DetailHeader.propTypes = {
  className: PropTypes.string,
  participants: PropTypes.array
};

DetailHeader.defaultProps = {
  participants: []
};

export default DetailHeader;
