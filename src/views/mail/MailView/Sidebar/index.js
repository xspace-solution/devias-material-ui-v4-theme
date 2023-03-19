import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import {
  Drawer,
  Hidden,
  Box,
  List,
  Button,
  Divider,
  makeStyles
} from '@material-ui/core';
import { useDispatch, useSelector } from 'src/store';
import { closeSidebar, openCompose } from 'src/slices/mail';
import LabelItem from './LabelItem';

const useStyles = makeStyles(() => ({
  drawerDesktopRoot: {
    width: 280,
    flexShrink: 0
  },
  drawerDesktopPaper: {
    position: 'relative'
  },
  drawerMobilePaper: {
    position: 'relative',
    width: 280
  },
  drawerMobileBackdrop: {
    position: 'absolute'
  }
}));

const Sidebar = ({ containerRef }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const location = useLocation();
  const { labels, isSidebarOpen } = useSelector((state) => state.mail);

  const handleCloseSidebar = () => {
    dispatch(closeSidebar());
  };

  const handleComposeClick = () => {
    dispatch(openCompose());
  };

  useEffect(() => {
    if (isSidebarOpen) {
      dispatch(closeSidebar());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const content = (
    <div>
      <Box
        px={3}
        py={2}
      >
        <Button
          color="secondary"
          fullWidth
          variant="contained"
          onClick={handleComposeClick}
        >
          Compose
        </Button>
      </Box>
      <Divider />
      <Box
        py={2}
        pr={2}
      >
        <List>
          {labels.map((label) => (
            <LabelItem
              key={label.id}
              label={label}
            />
          ))}
        </List>
      </Box>
    </div>
  );

  return (
    <>
      <Hidden smDown>
        <Drawer
          variant="permanent"
          classes={{
            root: classes.drawerDesktopRoot,
            paper: classes.drawerDesktopPaper
          }}
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdUp>
        <Drawer
          variant="temporary"
          open={isSidebarOpen}
          onClose={handleCloseSidebar}
          classes={{
            paper: classes.drawerMobilePaper
          }}
          style={{ position: 'absolute', zIndex: 1200 }}
          BackdropProps={{ classes: { root: classes.drawerMobileBackdrop } }}
          ModalProps={{ container: () => containerRef.current }}
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

Sidebar.propTypes = {
  containerRef: PropTypes.any.isRequired
};

export default Sidebar;
