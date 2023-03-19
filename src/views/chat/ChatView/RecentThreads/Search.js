import React, { forwardRef } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  ClickAwayListener,
  Input,
  SvgIcon,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Typography,
  makeStyles
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1)
  },
  search: {
    display: 'flex',
    alignItems: 'center',
    height: 44,
    borderRadius: 22,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    backgroundColor: theme.palette.background.dark
  },
  searchInput: {
    flexGrow: 1,
    marginLeft: theme.spacing(1)
  },
  avatar: {
    height: 32,
    width: 32
  }
}));

const Search = forwardRef(({
  className,
  isFocused,
  onChange,
  onClickAway,
  onFocus,
  onSelect,
  query,
  results,
  ...rest
}, ref) => {
  const classes = useStyles();

  const displayResults = query && isFocused;

  const handleSelect = (result) => {
    if (onSelect) {
      onSelect(result);
    }
  };

  return (
    <ClickAwayListener onClickAway={onClickAway}>
      <div
        className={clsx(classes.root, className)}
        ref={ref}
        {...rest}
      >
        <div className={classes.search}>
          <SvgIcon
            fontSize="small"
            color="action"
          >
            <SearchIcon />
          </SvgIcon>
          <Input
            className={classes.searchInput}
            disableUnderline
            onChange={onChange}
            onFocus={onFocus}
            placeholder="Search contacts"
            value={query}
          />
        </div>
        {displayResults && (
          <Box mt={2}>
            <Typography
              variant="h6"
              color="textSecondary"
            >
              Contacts
            </Typography>
            <List>
              {results.map((result) => {
                return (
                  <ListItem
                    button
                    key={result.id}
                    onClick={() => handleSelect(result)}
                  >
                    <ListItemAvatar>
                      <Avatar
                        src={result.avatar}
                        className={classes.avatar}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={result.name}
                      primaryTypographyProps={{
                        noWrap: true,
                        variant: 'h6',
                        color: 'textPrimary'
                      }}
                    />
                  </ListItem>
                );
              })}
            </List>
          </Box>
        )}
      </div>
    </ClickAwayListener>
  );
});

Search.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  onClickAway: PropTypes.func,
  onFocus: PropTypes.func,
  onSelect: PropTypes.func,
  query: PropTypes.string,
  results: PropTypes.array
};

Search.defaultProps = {
  isFocused: false,
  query: '',
  results: []
};

export default Search;
