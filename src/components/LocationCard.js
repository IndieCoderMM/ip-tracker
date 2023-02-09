import React from 'react';
import { useSelector } from 'react-redux';
import InfoBox from './InfoBox';
import styles from './LocationCard.module.css';

const LocationCard = () => {
  const clientData = useSelector((state) => state.client.data);
  const queryData = useSelector((state) => state.query.data);
  const displayData = Object.keys(queryData.location).length
    ? queryData
    : clientData;
  const { ip, isp } = displayData;
  const { country, region, city, timezone, postalCode } = displayData.location;

  return (
    <div className={styles.card}>
      <InfoBox title="Ip Address" data={ip} />
      <InfoBox
        title="Location"
        data={`${city}, ${country} ${region} ${postalCode}`}
      />
      <InfoBox title="Timezone" data={`UTC ${timezone}`} />
      <InfoBox title="ISP" data={isp} />
    </div>
  );
};

export default LocationCard;
