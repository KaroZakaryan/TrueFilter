import React from 'react';

import {Typography} from '~/components';

import styles from './ToneRecognition.module.scss';

const ToneRecognition: React.FC = () => (
  <div className={styles.container}>
    <Typography isQuestion>Tone recognition</Typography>
    <div className={styles.container__content}>
      <div className={styles.container__content__wrapper}>
        <div className={styles.container__content__first}>
          <span>😡</span>
          <p className={styles.container__content__wrapper__desc}>Anger</p>
        </div>
        <div className={styles.container__content__rounds}>
          <div className={styles.container__content__rounds__round} />
          <div className={styles.container__content__rounds__round} />
          <div className={styles.container__content__rounds__round} />
        </div>
      </div>
      <div className={styles.container__content__wrapper}>
        <div className={styles.container__content__second}>
          <span>😒</span>
          <p className={styles.container__content__wrapper__desc}>Annoyance</p>
        </div>
        <div className={styles.container__content__rounds}>
          <div className={styles.container__content__rounds__round} />
          <div className={styles.container__content__rounds__round} />
          <div className={styles.container__content__rounds__empty} />
        </div>
      </div>
      <div className={styles.container__content__wrapper}>
        <div className={styles.container__content__third}>
          <span>👎</span>
          <p className={styles.container__content__wrapper__desc}>Disapproval</p>
        </div>
        <div className={styles.container__content__rounds}>
          <div className={styles.container__content__rounds__round} />
          <div className={styles.container__content__rounds__empty} />
          <div className={styles.container__content__rounds__empty} />
        </div>
      </div>
    </div>
  </div>
);

export default ToneRecognition;
