import {isUndefined} from 'lodash';
import React, {useRef, useState} from 'react';

import {Button, Typography} from '~/components';
import {SocialLinks} from '~/constants';
import {DiscoverContainer} from '~/containers';
import {ApiService} from '~/services';
import {IdentityResponse} from '~/services/api/types';

import styles from './Home.module.scss';

const HomeContainer: React.FC = () => {
  const discoverRef = useRef<HTMLDivElement | null>(null);

  const [text, setText] = useState<string>('');
  const [identity, setIdentity] = useState<IdentityResponse | undefined>();

  const isIdentityExisted = !isUndefined(identity);

  const renderSocialIcons = SocialLinks.map(({Icon, id}) => (
    <div key={id} className={styles.container__social__content}>
      <Icon />
    </div>
  ));

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setText(event.target.value);
  };

  const handleTestMessageClick = async (): Promise<void> => {
    if (isIdentityExisted) {
      setText('');
      setIdentity(undefined);
    } else {
      const identityResponse = await ApiService.getIdentity(text);

      setIdentity(identityResponse);
      discoverRef.current?.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <div className={styles.container}>
        <Typography className={styles.container__instructive} tagName="p">
          Clean up your space from unwanted intrusive messages
        </Typography>
        <Typography
          tagName="p"
          className={`${styles.container__instructive} ${styles.container__instructive_mobile}`}>
          Clean up your space from unwanted intrusive messages using our world-class AI-based data
          filter for
        </Typography>
        <Typography className={styles.container__ai} tagName="p">
          using our world-class AI-based data filter for
        </Typography>
        <div className={styles.container__social}>{renderSocialIcons}</div>
        <Typography className={styles.container__solution} tagName="p">
          Try our solution now to understand how it works
        </Typography>
        <div className={styles.container__textarea__wrapper}>
          <div className={styles.container__textarea}>
            <textarea
              value={text}
              onChange={handleChange}
              placeholder="Write text"
              className={styles.container__input}
            />
            <div>
              <span className={styles.container__textarea__edit}>{text.length}</span>
              <span className={styles.container__textarea__max}>/290</span>
            </div>
          </div>
        </div>
        <Button
          onClick={handleTestMessageClick}
          disabled={!text.length || text.length > 290}
          className={styles.container__textarea__test}>
          {!isIdentityExisted ? 'Test Message' : 'Reset test'}
        </Button>
      </div>
      {isIdentityExisted && <DiscoverContainer containerRef={discoverRef} />}
    </>
  );
};

export default HomeContainer;
