/* eslint-disable no-use-before-define */
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Box,
  Drawer,
  Hidden,
  List,
  makeStyles
} from '@material-ui/core';
import Logo from 'src/components/Logo';
import NavItem from './NavItem';

const items = [
  {
    title: 'Welcome',
    href: '/docs/welcome'
  },
  {
    title: 'Getting Started',
    href: '/docs/getting-started'
  },
  {
    title: 'Environment Variables',
    href: '/docs/environment-variables'
  },
  {
    title: 'Deployment',
    href: '/docs/deployment'
  },
  {
    title: 'Analytics',
    href: '/docs/analytics'
  },
  {
    title: 'API Calls',
    href: '/docs/api-calls'
  },
  {
    title: 'Authentication',
    href: '/docs/authentication'
  },
  {
    title: 'Routing',
    href: '/docs/routing'
  },
  {
    title: 'Settings',
    href: '/docs/settings'
  },
  {
    title: 'State Management',
    href: '/docs/state-management'
  },
  {
    title: 'Theming',
    href: '/docs/theming'
  },
  {
    title: 'Support',
    href: '/docs/support'
  },
  {
    title: 'Changelog',
    href: '/docs/changelog'
  }
];

function renderNavItems({ items, depth = 0 }) {
  return (
    <List disablePadding>
      {items.reduce(
        (acc, item) => reduceChildRoutes({ acc, item, depth }),
        []
      )}
    </List>
  );
}

function reduceChildRoutes({
  acc,
  item,
  depth = 0
}) {
  if (item.items) {
    acc.push(
      <NavItem
        depth={depth}
        key={item.href}
        title={item.title}
      >
        {renderNavItems({
          items: item.items,
          depth: depth + 1
        })}
      </NavItem>
    );
  } else {
    acc.push(
      <NavItem
        depth={depth}
        href={item.href}
        key={item.href}
        title={item.title}
      />
    );
  }

  return acc;
}

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: 'calc(100% - 64px)'
  }
}));

const NavBar = ({ onMobileClose, openMobile }) => {
  const classes = useStyles();
  const location = useLocation();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const content = (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
    >
      <Hidden lgUp>
        <Box p={2}>
          <RouterLink to="/">
            <Logo />
          </RouterLink>
        </Box>
      </Hidden>
      <Box p={2}>
        {renderNavItems({ items })}
      </Box>
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

export default NavBar;
