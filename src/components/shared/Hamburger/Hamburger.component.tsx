import classNames from 'classnames';
import React from 'react';

import styles from './Hamburger.module.scss';
import {HamburgerProps} from './types';

const Hamburger: React.FC<HamburgerProps> = ({isOpen, onClick}) => {
  const wrapperClassNames = classNames(styles.wrapper, {[styles.wrapper_open]: isOpen});

  const getLineClassNames = (className: string): string =>
    classNames(styles.wrapper__line, {
      [className]: isOpen,
    });

  return (
    <div role="button" onClick={onClick} aria-label="menu burger" className={wrapperClassNames}>
      <div className={getLineClassNames(styles.wrapper__line_one)} />
      <div className={getLineClassNames(styles.wrapper__line_two)} />
      <div className={getLineClassNames(styles.wrapper__line_three)} />
    </div>
  );
};

export default Hamburger;
