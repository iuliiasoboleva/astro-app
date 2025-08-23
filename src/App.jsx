import React, { useState } from 'react';

import timeIcon from './assets/icons/history.svg';
import homeIcon from './assets/icons/home.svg';
import userIcon from './assets/icons/profile.svg';
import BottomTabs from './components/BottomTabs';
import Home from './pages/Home';

const TABS = [
  { value: 'home', label: 'Главная', icon: homeIcon },
  { value: 'history', label: 'История', icon: timeIcon },
  { value: 'profile', label: 'Профиль', icon: userIcon },
];

function App() {
  const [tab, setTab] = useState('home');

  return (
    <div style={{ margin: '0 auto', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: 1 }}>
        {tab === 'home' && <Home />}
        {tab === 'history' && <div style={{ padding: 20 }}>История (заглушка)</div>}
        {tab === 'profile' && <div style={{ padding: 20 }}>Профиль (заглушка)</div>}
      </div>

      <BottomTabs items={TABS} value={tab} onChange={setTab} />
    </div>
  );
}

export default App;
