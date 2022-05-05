import classNames from 'classnames';
import React from 'react';
import {useToggle, useWindowSize} from 'react-use';

import {Logo, MobileLogoIcon} from '~/assets';
import {Hamburger, HeaderMenu, Link, Navbar} from '~/components';
import {Routes} from '~/constants';

import styles from './Header.module.scss';

const HeaderContainer: React.FC = () => {
  const [isMenuOpen, toggleIsMenuOpen] = useToggle(false);

  const {width} = useWindowSize();

  const isMobile = width <= 568;

  const containerClassName = classNames(styles.header__container, 'container');

  const leftSectionClassName = classNames(
    styles.header__container__edge,
    styles.header__container__left,
  );

  const handleCloseMenu = (): void => {
    toggleIsMenuOpen(false);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={containerClassName}>
          <div className={leftSectionClassName}>
            <div>
              <Link to={Routes.Home} className={styles.header__container__left__logo_link}>
                {!isMobile ? <Logo /> : <MobileLogoIcon />}
              </Link>
            </div>
          </div>
          <Navbar className={styles.header__container__navbar} />
          <Hamburger isOpen={isMenuOpen} onClick={toggleIsMenuOpen} />
        </div>
        <HeaderMenu isOpen={isMenuOpen} closeMenu={handleCloseMenu} />
      </header>
      <div className={styles.header__background} />
    </>
  );
};

export default HeaderContainer;
