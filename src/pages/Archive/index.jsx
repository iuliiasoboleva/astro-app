import React, { useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import arrowBack from '../../assets/icons/arrow-back.svg';
import starsActive from '../../assets/icons/stars-active.svg';
import starsInactive from '../../assets/icons/stars-inactive.svg';
import tarotActive from '../../assets/icons/taro-active.svg';
import tarotInactive from '../../assets/icons/taro-inactive.svg';
import archiveIcon from '../../assets/images/archive-circle.png';
import InfoCard from '../../components/InfoCard';
import { archiveCardsByCategory } from '../../mocks/archiveCards';
import { tarotCategoryById } from '../../mocks/tarotCategories';
import {
  setBirthDate,
  setBirthPlace,
  setBirthTime,
  setGender,
  setName,
} from '../../store/astroStepsSlice';
import { setQuestion, startSession } from '../../store/tarotSessionSlice';
import CustomArchiveCard from '../../ui/CustomArchiveCard';
import CustomTabsIcon from '../../ui/CustomTabsIcon';
import { CardsGrid, NotCardsInfo, Page, SoftBlock, TitleBlock, TopTitle } from './styles';

const ICON_TABS = [
  { value: 'tarot', label: 'Карты Таро', icons: { active: tarotActive, inactive: tarotInactive } },
  { value: 'astro', label: 'Астрология', icons: { active: starsActive, inactive: starsInactive } },
];

const Archive = () => {
  const [category, setCategory] = useState('tarot');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const filteredCards = useMemo(() => {
    return archiveCardsByCategory[category] || [];
  }, [category]);

  const handleCardClick = (card) => {
    if (card.category === 'tarot') {
      const meta = tarotCategoryById[String(card.id)] || {};
      // — заполняем сессию расклада: id, требуемое кол-во карт и вопрос из архива
      dispatch(
        startSession({
          categoryId: card.id,
          requiredCount: meta.count ?? null,
          picked: [1, 7, 6, 8],
        }),
      );
      if (card.question) dispatch(setQuestion(card.question));
    } else {
      dispatch(setName('Ирина')); // mock
      dispatch(setGender('f')); // 'm' | 'f'
      dispatch(setBirthDate('22.07.1996')); // mock
      dispatch(setBirthTime('18:45')); // mock
      dispatch(setBirthPlace('Санкт-Петербург')); // mock
    }

    // 2) прокидываем в навигацию архивные метаданные, чтобы показать плашку даты/вопрос
    const state = {
      fromArchive: true,
      meta: {
        date: card.date,
        time: card.time,
        question: card.question || null,
      },
    };

    // 3) переход на результат
    if (card.category === 'tarot') {
      navigate(`/tarot/${card.id}/result`, { state });
    } else {
      navigate(`/astro/${card.id}/result`, { state });
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Page>
      <TitleBlock>
        <img src={arrowBack} alt="Назад" onClick={handleBack} style={{ cursor: 'pointer' }} />
        <TopTitle>История консультаций</TopTitle>
      </TitleBlock>

      <SoftBlock>
        <CustomTabsIcon items={ICON_TABS} value={category} onChange={setCategory} />

        {filteredCards.length === 0 ? (
          <NotCardsInfo>
            <InfoCard
              icon={archiveIcon}
              title={'Здесь будет история ваших консультаций и раскладов'}
              buttonLabel={'Сделать первый расклад!'}
              onButtonClick={() => navigate('/')}
            />
          </NotCardsInfo>
        ) : (
          <CardsGrid>
            {filteredCards.map((card, i) => (
              <CustomArchiveCard
                key={`${card.category}-${card.id}-${card.date}-${card.time}-${i}`} // <— уникальный key
                title={card.title}
                bg={card.bg}
                date={card.date}
                time={card.time}
                pillText={card.pillText}
                pillIcon={card.pillIcon}
                onClick={() => handleCardClick(card)}
              />
            ))}
          </CardsGrid>
        )}
      </SoftBlock>
    </Page>
  );
};

export default Archive;
