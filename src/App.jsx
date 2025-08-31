import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

import timeIcon from './assets/icons/history.svg';
import homeIcon from './assets/icons/home.svg';
import userIcon from './assets/icons/profile.svg';
import BottomTabs from './components/BottomTabs';
import ScrollToTop from './hooks/ScrollToTop';
import { usePreloadImages } from './hooks/usePreloadImages';
import astroCategories from './mocks/astroCategories';
import tarotCategories from './mocks/tarotCategories';
import Archive from './pages/Archive';
import AstroRequest from './pages/AstroRequest';
import AstroResult from './pages/AstroResult';
import AstroSteps from './pages/AstroSteps';
import Categories from './pages/Categories';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Referral from './pages/Referral';
import Shop from './pages/Shop';
import Subscription from './pages/Subscription';
import TarotRequest from './pages/TarotRequest';
import TarotResult from './pages/TarotResult';
import TarotSpread from './pages/TarotSpread';
import { AppWrap, Content } from './styles';

const TABS = [
  { to: '/', label: 'Главная', icon: homeIcon },
  { to: '/archive', label: 'История', icon: timeIcon },
  { to: '/profile', label: 'Профиль', icon: userIcon },
];

function Layout() {
  const astroAssets = astroCategories.flatMap((c) => [c.icon, c.bg]);
  const tarotAssets = tarotCategories.flatMap((c) => [c.icon, c.bg]);

  usePreloadImages([...astroAssets, ...tarotAssets]);

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
        <Route path="archive" element={<Archive />} />
        <Route path="profile" element={<Profile />} />
        <Route path="subscription" element={<Subscription />} />
        <Route path="shop" element={<Shop />} />
        <Route path="referral" element={<Referral />} />
      </Route>
    </Routes>
  );
}
