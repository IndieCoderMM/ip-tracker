import React, { useRef } from 'react';
import styles from './SearchBar.module.css';
import ArrowIcon from '../assets/icon-arrow.svg';
import { useDispatch } from 'react-redux';
import { getQueryLocation } from '../redux/queryState/query';

const SearchBar = () => {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const query = inputRef.current.value.trim();
    if (query.length) {
      dispatch(getQueryLocation(query));
    }
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <input
          ref={inputRef}
          className={styles.input}
          type="text"
          placeholder="Search by IP or domain"
        />
        <button className={styles.button} type="submit">
          <img src={ArrowIcon} width={10} alt="submit button" />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
