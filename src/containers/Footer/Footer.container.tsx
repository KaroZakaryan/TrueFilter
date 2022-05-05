import React from 'react';

import {MobileLogoIcon} from '~/assets';
import {Typography} from '~/components';

import styles from './Footer.module.scss';

const FooterContainer: React.FC = () => (
  <footer className={styles.footer}>
    <div className={styles.footer__container}>
      <div className={styles.footer__head}>
        <MobileLogoIcon />
        <div className={styles.footer__items}>
          <li>Legal Notice</li>
          <li>Privacy</li>
          <li>Terms</li>
        </div>
      </div>
      <div className={styles.divider} />
      <div className={styles.footer__foot}>
        <Typography> © 2022 True Global Ltd. All rights reserved.</Typography>
      </div>
    </div>
  </footer>
);

export default FooterContainer;
