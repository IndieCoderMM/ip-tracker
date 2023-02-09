import React from 'react';
import styles from './InfoBox.module.css';

const InfoBox = ({ title, data }) => {
  const lines = data.split(';');
  return (
    <div className={styles.cardItem}>
      <h3>{title}</h3>
      {lines.map((l) => (
        <p key={l}>{l}</p>
      ))}
    </div>
  );
};

export default InfoBox;
