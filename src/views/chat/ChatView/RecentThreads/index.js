import React, { useState } from 'react';
import clsx from 'clsx';
import { useHistory } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/core';
import axios from 'src/utils/axios';
import Search from './Search';
import ThreadList from './ThreadList';

const useStyles = makeStyles(() => ({
  hideThreadList: {
    display: 'none'
  }
}));

const RecentThreads = () => {
  const classes = useStyles();
  const history = useHistory();
  const [isSearchFocused, setSearchFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchClickAway = () => {
    setSearchFocused(false);
    setSearchQuery('');
  };

  const handleSearchChange = async (event) => {
    try {
      event.persist();

      const { value } = event.target;

      setSearchQuery(value);

      if (value) {
        const response = await axios.get('/api/chat/search', {
          params: {
            query: value
          }
        });

        setSearchResults(response.data.results);
      } else {
        setSearchResults([]);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleSearchFocus = (event) => {
    event.persist();
    setSearchFocused(true);
  };

  const handleSearchSelect = (result) => {
    setSearchFocused(false);
    setSearchQuery('');
    history.push(`/app/chat/${result.username}`);
  };

  return (
    <PerfectScrollbar options={{ suppressScrollX: true }}>
      <Search
        isFocused={isSearchFocused}
        onChange={handleSearchChange}
        onClickAway={handleSearchClickAway}
        onFocus={handleSearchFocus}
        onSelect={handleSearchSelect}
        query={searchQuery}
        results={searchResults}
      />
      <ThreadList className={clsx({ [classes.hideThreadList]: isSearchFocused })} />
    </PerfectScrollbar>
  );
};

export default RecentThreads;
