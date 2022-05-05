import React from 'react';

import {Typography} from '~/components';
import {DetectionItems} from '~/constants';

import styles from './AbuseDetection.module.scss';

const AbuseDetection: React.FC = () => {
  const renderDetectionItems = DetectionItems.map(
    ({id, borderColor, type, probablity, background}) => (
      <div
        key={id}
        className={styles.container__content}
        style={{backgroundImage: `url(${background})`, borderColor: borderColor}}>
        <Typography>{type}</Typography>
        <Typography>{probablity}</Typography>
      </div>
    ),
  );

  return (
    <div className={styles.container}>
      <Typography isQuestion>Abuse detection</Typography>
      <div className={styles.container__header}>
        <Typography>Type</Typography>
        <Typography>Probablity</Typography>
      </div>
      <div className={styles.container__content_wrapper}>{renderDetectionItems}</div>
    </div>
  );
};

export default AbuseDetection;
