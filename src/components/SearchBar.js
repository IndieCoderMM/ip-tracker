import React from 'react';
import styles from './SearchBar.module.css';
import ArrowIcon from '../assets/icon-arrow.svg';

const SearchBar = () => {
  return (
    <div className={styles.container}>
      <h1>IP Address Tracker</h1>
      <form className={styles.form}>
        <input
          className={styles.input}
          type="text"
          placeholder="Search by IP or domain"
        />
        <button className={styles.button} type="submit">
          <img src={ArrowIcon} width={10} alt="submit button" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
