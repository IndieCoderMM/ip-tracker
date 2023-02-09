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
    const domain = inputRef.current.value.trim();
    if (domain.length) {
      dispatch(getQueryLocation(domain));
    }
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        className={styles.input}
        type="text"
        placeholder="Search by domain name"
      />
      <button className={styles.button} type="submit">
        <img src={ArrowIcon} width={10} alt="submit button" />
      </button>
    </form>
  );
};

export default SearchBar;
