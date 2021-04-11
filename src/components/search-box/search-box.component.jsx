import React from 'react';
import './search-box.css';

export const SearchBox = ({ placeholder, handleChange }) => (
  <input 
    className="search"
    type="search"
    placeholder = {placeholder}
    // onChange = {e => this.setState({ searchField, monsters})}
    onChange = {handleChange}
  />
);