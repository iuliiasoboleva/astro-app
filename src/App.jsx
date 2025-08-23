import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

import timeIcon from './assets/icons/history.svg';
import homeIcon from './assets/icons/home.svg';
import userIcon from './assets/icons/profile.svg';
import BottomTabs from './components/BottomTabs';
import ScrollToTop from './hooks/ScrollToTop';
import Home from './pages/Home';
import { AppWrap, Content, TabSpacer } from './styles';

const TABS = [
  { to: '/', label: 'Главная', icon: homeIcon },
  { to: '/history', label: 'История', icon: timeIcon },
  { to: '/profile', label: 'Профиль', icon: userIcon },
];

function Layout() {
  return (
    <AppWrap>
      <ScrollToTop />
      <Content>
        <Outlet />
      </Content>

      <TabSpacer />
      <BottomTabs items={TABS} />
    </AppWrap>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="history" element={<div>История (заглушка)</div>} />
        <Route path="profile" element={<div>Профиль (заглушка)</div>} />
      </Route>
    </Routes>
  );
}
