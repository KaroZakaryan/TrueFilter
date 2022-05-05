import classNames from 'classnames';
import React from 'react';

import {useLocales} from '~/hooks';

import styles from './Input.module.scss';
import {InputProps} from './types';

const Input: React.FC<InputProps> = ({
  placeholder = '',
  autoFocus = false,
  className,
  type = 'text',
}) => {
  const {translatedTypo: translatedPlaceholder} = useLocales(placeholder);

  const classes = classNames(styles.container, className);

  return (
    <div className={classes}>
      <input
        type={type}
        autoFocus={autoFocus}
        className={styles.container__input}
        placeholder={translatedPlaceholder || ''}
      />
    </div>
  );
};

export default Input;
