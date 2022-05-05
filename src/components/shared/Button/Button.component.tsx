import classNames from 'classnames';
import {isString} from 'lodash';
import React from 'react';

import {useLocales} from '~/hooks';

import styles from './Button.module.scss';
import {ButtonProps} from './types';

const Button: React.FC<ButtonProps> = ({children, onClick, className, disabled}) => {
  const typo = isString(children) ? children : '';

  const {translatedTypo} = useLocales(typo);

  const classes = classNames(styles.button, className);

  return (
    <button disabled={disabled} onClick={onClick} className={classes}>
      {translatedTypo || children}
    </button>
  );
};

export default Button;
