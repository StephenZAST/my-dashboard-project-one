import React from 'react';
import styles from '../Dashboard.module.css';
import { SearchBarProps } from '../types';

export const SearchBar: React.FC<SearchBarProps> = ({ placeholder, onSearch }) => {
  return (
    <form className={styles.searchForm} role="search">
      <label htmlFor="search" className="visually-hidden">Search</label>
      <input
        type="search"
        id="search"
        className={styles.searchInput}
        placeholder={placeholder}
        onChange={(e) => onSearch(e.target.value)}
      />
    </form>
  );
};