import classNames from 'classnames';
import React from 'react';

import {QuestionIcon} from '~/assets';
import {useLocales} from '~/hooks';

import {TypographyProps} from './types';
import styles from './Typography.module.scss';

const Typography = ({
  capitalize,
  children = '',
  tagName = 'span',
  variant,
  isQuestion,
  type,
  align,
  className = '',
  ...rest
}: TypographyProps): JSX.Element => {
  const {translatedTypo} = useLocales(children);

  const Tag = tagName;
  const alignKey = align && `typography__align_${align}`;
  const fontKey = variant && type && `typography__${variant}_${type}`;

  const classes = classNames(alignKey, fontKey, {
    [className]: className,
    [styles.container_capitalized]: capitalize,
  });

  return (
    <div className={styles.container}>
      <Tag {...rest} className={classes.length ? classes : undefined}>
        {translatedTypo || children}
      </Tag>
      {isQuestion && <QuestionIcon className={styles.container__icon} />}
    </div>
  );
};

export default Typography;
