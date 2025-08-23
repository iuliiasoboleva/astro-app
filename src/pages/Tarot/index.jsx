import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import arrowBack from '../../assets/icons/arrow-back.svg';
import BottomSheet from '../../components/BottomSheet';
import InfoCard from '../../components/InfoCard';
import cards from '../../mocks/cards';
import { FILTER_ITEMS } from '../../mocks/tabsFilter';
import CustomCategoryCard from '../../ui/CustomCategoryCard';
import CustomTabs from '../../ui/CustomTabs';
import { CardsGrid, MainTitle, Page, SoftBlock, TitleBlock, TopTitle } from './styles';

const Tarot = () => {
  const [filter, setFilter] = useState('free');
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

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
          <MainTitle>
            Какой расклад Таро
            <br />
            хотите попробовать?
          </MainTitle>

          <CardsGrid>
            {cards.map((card) => (
              <CustomCategoryCard
                key={card.id}
                title={card.title}
                bg={card.bg}
                status={card.status}
                onClick={() => setOpen(true)}
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
          title="Подписка"
          subtitle="Подпишитесь и откройте 10+ раскладов без ограничений"
          buttonLabel="Оформить подписку"
          variant="outline"
          onButtonClick={() => {
            // твой код
          }}
        />
      </BottomSheet>
    </>
  );
};

export default Tarot;
