import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './Popup.module.css';

const Popup = () => {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState('');
  const queryStatus = useSelector((state) => state.query.status);

  useEffect(() => {
    if (queryStatus === 'error') {
      console.log('showing');
      setVisible(true);
      setMessage("Sorry! We can't find your requested domain.");
      setTimeout(() => {
        setVisible(false);
      }, 3000);
    }
  }, [queryStatus]);

  return (
    <>
      {visible ? (
        <div className={styles.container}>
          <div className={styles.popup}>
            <h2>🙁ops!</h2>
            <p>{message}</p>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Popup;
