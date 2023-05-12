import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button/Button';
import { iconCatSearch } from 'utils/svgIcons';
import { SearchForm } from './Searchbar.styled';
import { Header } from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value.trim());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(query);
    setQuery('');
  };

  return (
    <Header className="searchbar">
      <SearchForm onSubmit={handleSubmit} className="form">
        <Button type="submit" className="search-btn">
          <span className="button-label"></span>
          {iconCatSearch}
        </Button>

        <input
          name="search"
          onChange={handleChange}
          value={query}
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </Header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;