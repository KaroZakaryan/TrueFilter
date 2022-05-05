import classNames from 'classnames';
import React from 'react';

import {Button, Link} from '~/components';
import {Routes} from '~/constants';

import styles from './Navbar.module.scss';
import {NavbarProps} from './types';

const Navbar: React.FC<NavbarProps> = ({className}) => {
  const categoryLinkClasses = `${styles.list__link} ${styles.list__category_link}`;

  const navClassName = classNames(className);

  return (
    <nav className={navClassName}>
      <ul className={styles.list}>
        <li>
          <Link to={Routes.Home} className={styles.list__link}>
            How it works
          </Link>
        </li>
        <li>
          <Link to={Routes.Home} className={categoryLinkClasses}>
            Our goals
          </Link>
        </li>
        <li>
          <Link to={Routes.Home} className={categoryLinkClasses}>
            How to help
          </Link>
        </li>
        <Button className={styles.list__button}>Sign in</Button>
      </ul>
    </nav>
  );
};

export default Navbar;
