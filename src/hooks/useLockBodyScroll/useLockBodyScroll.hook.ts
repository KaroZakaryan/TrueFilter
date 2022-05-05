import {useIsomorphicLayoutEffect} from '~/hooks';

const useLockBodyScroll = (isOpen: boolean): void => {
  useIsomorphicLayoutEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;

    document.body.style.overflow = isOpen ? 'hidden' : 'visible';
    document.body.style.touchAction = isOpen ? 'none' : 'unset';

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [isOpen]);
};

export default useLockBodyScroll;
