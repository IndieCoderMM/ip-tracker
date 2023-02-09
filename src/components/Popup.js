import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './Popup.module.css';

const Popup = () => {
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const queryStatus = useSelector((state) => state.query.status);
  // const queryData = useSelector((state) => state.query.data);

  const showPopup = (t, msg) => {
    setVisible(true);
    setTitle(t);
    setMessage(msg);
    setTimeout(() => {
      setVisible(false);
    }, 4000);
  };

  useEffect(() => {
    if (queryStatus === 'idle')
      showPopup(
        '😃Welcome!',
        'You can find the location of any IP address or domain. Try searching google.com!',
      );
    if (queryStatus === 'error')
      showPopup('🙁ops!', "Sorry! We can't find your requested domain.");
    // if (queryStatus === 'success')
    //   showPopup(
    //     '🎫Credits',
    //     `This app has ${queryData.credits / 2} requests available!`,
    //   );
  }, [queryStatus]);

  return (
    <>
      {visible ? (
        <div className={styles.container}>
          <div className={styles.popup}>
            <h2>{title}</h2>
            <p>{message}</p>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Popup;
