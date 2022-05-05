import React from 'react';

import {Button, Typography} from '~/components';

import styles from './SpamDetection.module.scss';

const SpamDetection: React.FC = () => (
  <div className={styles.container}>
    <Typography isQuestion>Spam Detection</Typography>
    <Button className={styles.container__button}>Not Spam</Button>
  </div>
);

export default SpamDetection;
