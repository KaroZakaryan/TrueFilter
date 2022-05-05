import React from 'react';

import {ArrowIcon, SemicircleIcon} from '~/assets';
import {Typography} from '~/components';

import styles from './Sentiment.module.scss';

const Sentiment: React.FC = () => (
  <div className={styles.container}>
    <Typography isQuestion>Sentiment</Typography>
    <div className={styles.container__chart}>
      <SemicircleIcon />
      <ArrowIcon className={styles.container__chart__arrow} />
    </div>
    <Typography>Quite negative 👎</Typography>
  </div>
);

export default Sentiment;
