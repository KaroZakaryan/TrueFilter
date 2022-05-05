import classNames from 'classnames';
import React from 'react';

import {Button, Link} from '~/components';
import {Routes} from '~/constants';
import {useLockBodyScroll} from '~/hooks';

import styles from './HeaderMenu.module.scss';
import {HeaderMenuProps} from './types';

const HeaderMenu: React.FC<HeaderMenuProps> = ({closeMenu, isOpen}) => {
  const menuClassNames = classNames(styles.menu, {
    [styles.menu_open]: isOpen,
  });

  useLockBodyScroll(isOpen);

  return (
    <>
      <div className={menuClassNames}>
        <ul className={styles.menu__list}>
          <li>
            <Link to={Routes.Home} className={styles.menu__list__link}>
              How it works
            </Link>
          </li>
          <li>
            <Link to={Routes.Home} className={styles.menu__list__link}>
              Our goals
            </Link>
          </li>
          <li>
            <Link to={Routes.Home} className={styles.menu__list__link}>
              How to help
            </Link>
          </li>
          <Button className={styles.menu__button}>Sign in</Button>
        </ul>
      </div>
      {isOpen && <div onClick={closeMenu} className={styles.background} />}
    </>
  );
};

export default HeaderMenu;
