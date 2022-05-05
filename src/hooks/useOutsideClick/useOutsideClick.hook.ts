import React from 'react';

import {useEventListener} from '../useEventListener';

const useOutsideClick = (
  ref: React.RefObject<HTMLElement>,
  callback: (e?: Event) => void,
): void => {
  const handleClick = (e: Event): void => {
    const isOutsideTarget = ref.current && !ref.current.contains(e.target as Node);

    if (isOutsideTarget) {
      callback(e);
    }
  };

  useEventListener('click', handleClick);
};

export default useOutsideClick;
