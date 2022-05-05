import React from 'react';

import {VoidCallback} from '~/types';

export type LinkProps = {
  to: string;
  blank?: boolean;
  queryKey?: string;
  disabled?: boolean;
  className?: string;
  queryValue?: string;
  onClick?: VoidCallback;
  activeClassName?: string;
  anchorProps?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
};
