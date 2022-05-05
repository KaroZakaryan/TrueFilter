import React from 'react';

import {FooterContainer, HeaderContainer} from '~/containers';

const PageLayout: React.FC = ({children}) => (
  <>
    <HeaderContainer />
    {children}
    <FooterContainer />
  </>
);

export default PageLayout;
