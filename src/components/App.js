import React from 'react';
import { Header } from './layout/Header';
import { Body } from './layout/Body';
// import { Footer } from './layout/Footer';

import { Menu } from './Menu';
import { PageStickyFooter } from './pages/PageStickyFooter';
import { PageStrikedHeader } from './pages/PageStrikedHeader';

export default () => (
  <div className="app">
    <Header>
      <Menu />
    </Header>
    <Body>
      <PageStickyFooter />
      <PageStrikedHeader />
    </Body>
  </div>
);
