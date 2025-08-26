import React, { useState } from 'react';

import starsActive from './assets/icons/stars-active.svg';
import starsInactive from './assets/icons/stars-inactive.svg';
import tarotActive from './assets/icons/taro-active.svg';
import tarotInactive from './assets/icons/taro-inactive.svg';
import cards from './mocks/cardsTarot';
import CustomButton from './ui/CustomButton';
import CustomCategoryCard from './ui/CustomCategoryCard';
import CustomStatusUser from './ui/CustomStatusUser';
import CustomTabs from './ui/CustomTabs';
import CustomTabsIcon from './ui/CustomTabsIcon';

const ICON_TABS = [
  { value: 'tarot', label: 'Карты Таро', icons: { active: tarotActive, inactive: tarotInactive } },
  { value: 'astro', label: 'Астрология', icons: { active: starsActive, inactive: starsInactive } },
];

const FILTER_ITEMS = [
  { value: 'free', label: 'Бесплатно' },
  { value: 'sub', label: 'В подписке' },
  { value: 'paid', label: 'Куплено' },
];

function App() {
  const [filter1, setFilter1] = useState('free');
  const [cat1, setCat1] = useState('tarot');

  return (
    <>
      {/* CustomTabs — три варианта как на макете */}
      <div
        style={{
          display: 'grid',
          gap: 12,
          justifyContent: 'start',
          margin: '16px auto',
          maxWidth: 980,
        }}
      >
        <CustomTabs items={FILTER_ITEMS} value={filter1} onChange={setFilter1} size="lg" />

        <CustomTabsIcon items={ICON_TABS} value={cat1} onChange={setCat1} />
      </div>
      <div style={{ padding: 16, display: 'grid', gap: 12 }}>
        <CustomButton variant="outline">Не хочу писать подробности</CustomButton>
        <CustomButton loading>Приобрести</CustomButton>
        <CustomButton>Сделать ещё расклад</CustomButton>
      </div>

      <div style={{ padding: 16, display: 'grid', gap: 12 }}>
        <CustomStatusUser name="Лиза Васина" status="vip" />
        <CustomStatusUser name="Лиза Васина" status="platinum" />
        <CustomStatusUser name="Лиза Васина" status="free" />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, padding: 16 }}>
        <div style={{ display: 'flex', gap: 16 }}>
          {cards.map((card) => (
            <CustomCategoryCard
              key={card.id}
              title={card.title}
              bg={card.bg}
              status={card.status}
              onClick={card.onClick}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
