import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

import timeIcon from './assets/icons/history.svg';
import homeIcon from './assets/icons/home.svg';
import userIcon from './assets/icons/profile.svg';
import BottomTabs from './components/BottomTabs';
import ScrollToTop from './hooks/ScrollToTop';
import astroCategories from './mocks/astroCategories';
import tarotCategories from './mocks/tarotCategories';
import AstroRequest from './pages/AstroRequest';
import AstroResult from './pages/AstroResult';
import AstroSteps from './pages/AstroSteps';
import Categories from './pages/Categories';
import Home from './pages/Home';
import TarotRequest from './pages/TarotRequest';
import TarotResult from './pages/TarotResult';
import TarotSpread from './pages/TarotSpread';
import { AppWrap, Content } from './styles';

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

      <BottomTabs items={TABS} />
    </AppWrap>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tarot" element={<Categories cards={tarotCategories} />} />
        <Route path="astro" element={<Categories cards={astroCategories} />} />
        <Route path="astro/:id" element={<AstroRequest />} />
        <Route path="astro/:id/steps" element={<AstroSteps />} />
        <Route path="astro/:id/result" element={<AstroResult />} />
        <Route path="tarot/:id" element={<TarotRequest />} />
        <Route path="tarot/:id/spread" element={<TarotSpread />} />
        <Route path="tarot/:id/result" element={<TarotResult />} />
        <Route path="history" element={<div>История (заглушка)</div>} />
        <Route path="profile" element={<div>Профиль (заглушка)</div>} />
      </Route>
    </Routes>
  );
}
