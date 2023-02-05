import Router from 'next/router';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import React, { FormEvent, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const searchSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    Router.push({
      pathname: '/blog',
      query: { search: searchTerm },
    });
  };

  return (
    <Paper
      component="form"
      onSubmit={searchSubmitHandler}
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: 250,
        ml: { sm: 0, md: 2 },
        mt: { xs: 1, sm: 1, md: 0 },
      }}
    >
      <InputBase
        sx={{ ml: 2, flex: 1 }}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search a blog post"
        inputProps={{ 'aria-label': 'Search a blog post' }}
      />
      <IconButton type="submit" sx={{ p: '5px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBox;
