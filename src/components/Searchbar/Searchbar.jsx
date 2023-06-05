import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  SearchBarHead,
  SearchForm,
  SearchFormBtn,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';
 import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (query.trim() === '') {
       toast.error('Please enter something');
      return;
    }

    onSubmit(query);
    setQuery('');
  };

  return (
    <SearchBarHead>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormBtn type="submit">
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </SearchFormBtn>

        <SearchFormInput
          type="text"
          id="searchInput"
          name="searchInput"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleChange}
        />
      </SearchForm>
    </SearchBarHead>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
