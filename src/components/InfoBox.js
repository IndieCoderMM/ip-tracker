import React from 'react';
import styles from './InfoBox.module.css';

const InfoBox = ({ title, data }) => {
  return (
    <div className={styles.cardItem}>
      <h3>{title}</h3>
      <p>{data}</p>
    </div>
  );
};

export default InfoBox;
