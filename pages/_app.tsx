import '~/styles/index.scss';

import type {AppProps} from 'next/app';
import React from 'react';

const TrueFilterApp: React.FC<AppProps> = ({Component, pageProps}) => <Component {...pageProps} />;

export default TrueFilterApp;
