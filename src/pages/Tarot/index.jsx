import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import arrowBack from '../../assets/icons/arrow-back.svg';
import cardCircle from '../../assets/images/card-circle.png';
import moneyCircle from '../../assets/images/money-circle.png';
import sadCircle from '../../assets/images/sad-circle.png';
import BottomSheet from '../../components/BottomSheet';
import InfoCard from '../../components/InfoCard';
import cards from '../../mocks/cardsTarot';
import { FILTER_ITEMS } from '../../mocks/tabsFilter';
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

const Tarot = () => {
  const [filter, setFilter] = useState('free');
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

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
      navigate(`/tarot/${card.id}?count=${card.count || 5}`);
    }
  };

  return (
    <>
      <Page>
        <TitleBlock>
          <img
            src={arrowBack}
            alt="Назад"
            onClick={() => navigate(-1)}
            style={{ cursor: 'pointer' }}
          />
          <TopTitle>Расклад Таро</TopTitle>
        </TitleBlock>

        <SoftBlock>
          <CustomTabs items={FILTER_ITEMS} value={filter} onChange={setFilter} />
          {filteredCards.length === 0 ? (
            <NotCardsInfo>
              <InfoCard
                icon={filter === 'subscription' ? sadCircle : cardCircle}
                title={
                  filter === 'subscription'
                    ? 'У вас ещё нет подписки'
                    : 'У вас пока нет купленных раскладов'
                }
                subtitle={
                  filter === 'subscription'
                    ? 'Оформите подписку и получите полный доступ ко всем закрытым раскладам — без доплат и ограничений.'
                    : 'Вы можете приобрести любой расклад отдельно — и пользоваться им без ограничений в любое время.'
                }
                buttonLabel={
                  filter === 'subscription' ? 'Оформить подписку' : 'Открыть магазин раскладов'
                }
                onButtonClick={() => {
                  () => setOpen(false);
                }}
              />
            </NotCardsInfo>
          ) : (
            <>
              <MainTitle>
                Какой расклад Таро
                <br />
                хотите попробовать?
              </MainTitle>

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
              () => setOpen(false);
            }}
          />
        </div>
      </BottomSheet>
    </>
  );
};

export default Tarot;
