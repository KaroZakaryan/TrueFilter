import React from 'react';

import {LocationIcon} from '~/assets';
import {Typography} from '~/components';

import styles from './EntitiesRecognition.module.scss';

const EntitiesRecognition: React.FC = () => (
  <div className={styles.container}>
    <Typography isQuestion>Entities recognition</Typography>
    <div className={styles.container__content}>
      <div className={styles.container__content__left}>
        <p>Persons</p>
        <div className={styles.container__content__left_box}>
          <div className={styles.container__content__left_box__first}>I</div>
          <div className={styles.container__content__left_box__second}>Billy</div>
        </div>
      </div>
      <div className={styles.container__content__divider} />
      <div className={styles.container__content__right}>
        <p>Locations</p>
        <div className={styles.container__content__right_box}>
          <div className={styles.container__content__right_box__logo}>
            <LocationIcon />
          </div>
          <div className={styles.container__content__right_box__texas}>Texas</div>
        </div>
      </div>
    </div>
  </div>
);

export default EntitiesRecognition;
