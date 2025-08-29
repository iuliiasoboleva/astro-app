import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import arrowBack from '../../assets/icons/arrow-back.svg';
import starsActive from '../../assets/icons/stars-active.svg';
import starsInactive from '../../assets/icons/stars-inactive.svg';
import tarotActive from '../../assets/icons/taro-active.svg';
import tarotInactive from '../../assets/icons/taro-inactive.svg';
import BottomSheet from '../../components/BottomSheet';
import InfoCard from '../../components/InfoCard';
import astroCategories from '../../mocks/astroCategories';
import tarotCategories from '../../mocks/tarotCategories';
import CustomCategoryCard from '../../ui/CustomCategoryCard';
import CustomTabsIcon from '../../ui/CustomTabsIcon';
import { CardsGrid, Page, SoftBlock, TitleBlock, TopTitle } from './styles';

const ICON_TABS = [
  { value: 'tarot', label: 'Карты Таро', icons: { active: tarotActive, inactive: tarotInactive } },
  { value: 'astro', label: 'Астрология', icons: { active: starsActive, inactive: starsInactive } },
];

const Shop = () => {
  const [category, setCategory] = useState('tarot');
  const [open, setOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const navigate = useNavigate();

  const filteredCards = useMemo(() => {
    return category === 'tarot' ? tarotCategories : astroCategories;
  }, [category]);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setOpen(true);
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Page>
        <TitleBlock>
          <img src={arrowBack} alt="Назад" onClick={handleBack} style={{ cursor: 'pointer' }} />
          <TopTitle>Магазин раскладов</TopTitle>
        </TitleBlock>

        <SoftBlock>
          <CustomTabsIcon items={ICON_TABS} value={category} onChange={setCategory} />

          <CardsGrid>
            {filteredCards.map((card, i) => (
              <CustomCategoryCard
                key={`${card.category}-${card.id}-${card.date}-${card.time}-${i}`}
                title={card.title}
                bg={card.bg}
                date={card.date}
                time={card.time}
                price={card.price}
                pillText={card.pillText}
                pillIcon={card.pillIcon}
                onClick={() => handleCardClick(card)}
              />
            ))}
          </CardsGrid>
        </SoftBlock>
      </Page>
      <BottomSheet
        open={open}
        onClose={() => setOpen(false)}
        height="auto"
        maxHeight="80vh"
        ariaLabel="Оформление подписки"
      >
        <InfoCard
          icon={selectedCard?.icon}
          title={selectedCard?.title.replace(/\n/g, ' ')}
          priceInfo={selectedCard?.price}
          subtitle={`Хотите узнать, как лучше поступить 
в конкретной ситуации? Этот расклад даёт быстрый и точный ответ — да или нет, опираясь на энергию твоего запроса. 
Подходит для вопросов о решениях, действиях и намерениях других людей.`}
          buttonLabel="Приобрести расклад"
          onButtonClick={() => {
            setOpen(false);
          }}
        />
      </BottomSheet>
    </>
  );
};

export default Shop;
