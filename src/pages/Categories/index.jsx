import React, { useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import arrowBack from '../../assets/icons/arrow-back.svg';
import moneyAstroCircle from '../../assets/images/money-astro-circle.png';
import moneyTarotCircle from '../../assets/images/money-tarot-circle.png';
import BottomSheet from '../../components/BottomSheet';
import InfoCard from '../../components/InfoCard';
import { PAGE_COPY } from '../../mocks/categoriesPageText';
import { FILTER_ITEMS } from '../../mocks/tabsFilter';
import { resetSession, startSession } from '../../store/tarotSessionSlice';
import CustomCategoryCard from '../../ui/CustomCategoryCard';
import CustomTabs from '../../ui/CustomTabs';
import {
  CardsGrid,
  MainTitle,
  NotCardsInfo,
  Page,
  SoftBlock,
  TitleBlock,
  TopTitle,
} from './styles';

const Categories = ({ cards }) => {
  const [filter, setFilter] = useState('free');
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const routeKey = (pathname.split('/')[1] || 'tarot').toLowerCase();
  const copy = PAGE_COPY[routeKey] || PAGE_COPY.tarot;

  const SHEET_ICON = {
    tarot: moneyTarotCircle,
    astro: moneyAstroCircle,
  };
  const moneyCircle = SHEET_ICON[routeKey];

  const filteredCards = useMemo(() => {
    switch (filter) {
      case 'free': {
        const freeCards = cards.filter((c) => c.free === true);
        const justLocked = cards.filter((c) => !c.free && !c.subscription && !c.purchased);
        return [...freeCards, ...justLocked];
      }
      case 'subscription':
        return cards.filter((c) => c.subscription === true);
      case 'purchased':
        return cards.filter((c) => c.purchased === true);
      default:
        return cards;
    }
  }, [filter, cards]);

  const handleCardClick = (card) => {
    if (card.status === 'locked') {
      setOpen(true);
    } else {
      dispatch(startSession({ categoryId: card.id, requiredCount: card.count }));
      navigate(`/${routeKey}/${card.id}`);
    }
  };

  const handleBack = () => {
    dispatch(resetSession());
    navigate(-1);
  };

  return (
    <>
      <Page>
        <TitleBlock>
          <img src={arrowBack} alt="Назад" onClick={handleBack} style={{ cursor: 'pointer' }} />
          <TopTitle>{copy.topTitle}</TopTitle>
        </TitleBlock>

        <SoftBlock>
          <CustomTabs items={FILTER_ITEMS} value={filter} onChange={setFilter} />
          {filteredCards.length === 0 ? (
            <NotCardsInfo>
              {(() => {
                const stateKey = filter === 'subscription' ? 'subscription' : 'purchased';
                const empty = copy.empty[stateKey];
                return (
                  <InfoCard
                    icon={empty.icon}
                    title={empty.title}
                    subtitle={empty.subtitle}
                    buttonLabel={empty.buttonLabel}
                    onButtonClick={() => {
                      if (stateKey === 'subscription') setOpen(true);
                      else navigate('/');
                    }}
                  />
                );
              })()}
            </NotCardsInfo>
          ) : (
            <>
              <MainTitle>{copy.mainTitle}</MainTitle>

              <CardsGrid>
                {filteredCards.map((card) => (
                  <CustomCategoryCard
                    key={card.id}
                    title={card.title}
                    bg={card.bg}
                    status={card.status}
                    onClick={() => handleCardClick(card)}
                  />
                ))}
              </CardsGrid>
            </>
          )}
        </SoftBlock>
      </Page>

      <BottomSheet
        open={open}
        onClose={() => setOpen(false)}
        height="auto"
        maxHeight="80vh"
        ariaLabel="Оформление подписки"
      >
        <div style={{ margin: '75px 20px 0' }}>
          <InfoCard
            icon={moneyCircle}
            title="Подпишитесь и откройте 10+ раскладов без ограничений"
            subtitle=""
            buttonLabel="Оформить подписку"
            onButtonClick={() => {
              setOpen(false);
            }}
          />
        </div>
      </BottomSheet>
    </>
  );
};

export default Categories;
