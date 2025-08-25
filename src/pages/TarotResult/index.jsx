import React, { useMemo, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

import arrowBack from '../../assets/icons/arrow-back.svg';
import cardsIcon from '../../assets/icons/cards.svg';
import resumeIcon from '../../assets/images/resume/tarot/compass.png';
import BottomSheet from '../../components/BottomSheet';
import InfoCard from '../../components/InfoCard';
import Subscription from '../../components/Subscription';
import TagButton from '../../components/TagButton';
import CustomButton from '../../ui/CustomButton';
import {
  ButtonBlock,
  CardImg,
  CardsRow,
  ContentWrapper,
  MainTitle,
  Page,
  ResumeWrapper,
  SoftBlock,
  Subtitle,
  Title,
  TitleBlock,
  TitleWrapper,
  TopTitle,
} from './styles';

const cards = import.meta.glob('../../assets/images/cards/*.png', { eager: true });
const cardImages = Object.fromEntries(
  Object.entries(cards).map(([path, module]) => {
    const fileName = path.split('/').pop();
    const id = fileName?.replace('.png', '');
    return [id, module.default];
  }),
);

const TarotResult = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [search] = useSearchParams();
  const count = Number(search.get('count')) || 5;

  const [open, setOpen] = useState(false);

  const chosenCards = [1, 2, 3, 4, 5];

  const plans = useMemo(
    () => [
      {
        id: 'vip-month',
        price: '990',
        period: 'месяц',
        badge: 'VIP',
        features: ['Неограниченные Таро-расклады', '1 Астро-расклад в месяц'],
      },
      {
        id: 'platinum-year',
        price: '9990',
        period: 'год',
        badge: 'PLATINUM',
        features: ['Неограниченные Таро-расклады', 'Неограниченные Астро-расклады'],
      },
    ],
    [],
  );

  const [selectedPlanId, setSelectedPlanId] = useState(null);
  const selectedPlan = useMemo(
    () => plans.find((p) => p.id === selectedPlanId) || null,
    [plans, selectedPlanId],
  );

  const handleOpenSubscriptions = () => {
    // navigate(`/tarot/${id}?count=${count}`)
    setOpen(true);
  };

  const handleSelectPlan = (planId) => {
    setSelectedPlanId(planId);
  };

  const handlePay = () => {
    if (!selectedPlan) return;
    navigate(`/`, { replace: true });
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
          <TagButton icon={cardsIcon} label="«Да/Нет»" />

          <TitleWrapper>
            <MainTitle>Ваш расклад Таро</MainTitle>
            <Subtitle>Листайте вниз, чтобы узнать подробнее</Subtitle>
          </TitleWrapper>

          <CardsRow>
            {chosenCards.map((num) => (
              <CardImg key={num} src={cardImages[num]} alt={`Карта ${num}`} />
            ))}
          </CardsRow>

          <ResumeWrapper>
            <InfoCard
              icon={resumeIcon}
              title="Общий вывод"
              subtitle="Ваши отношения имеют потенциал для продуктивного и энергичного развития. Несмотря на некоторые конфликты или недопонимания, ваша связь очень сильная и взаимная. Слушай своё сердце и сохраняй позитив, ведь впереди тебя ждёт много ярких моментов!"
            />
          </ResumeWrapper>

          <ButtonBlock>
            <CustomButton onClick={handleOpenSubscriptions}>Сделать еще расклад</CustomButton>
            <CustomButton variant="outline" onClick={() => navigate('/')}>
              Вернуться на главную
            </CustomButton>
          </ButtonBlock>
        </SoftBlock>
      </Page>

      <BottomSheet
        open={open}
        onClose={() => setOpen(false)}
        height="auto"
        maxHeight="80vh"
        ariaLabel="Выбор подписки"
      >
        <Title>Выберите подписку</Title>

        <ContentWrapper>
          {plans.map((p) => (
            <Subscription
              key={p.id}
              price={p.price}
              period={p.period}
              badge={p.badge}
              features={p.features}
              active={selectedPlanId === p.id}
              onSelect={() => handleSelectPlan(p.id)}
            />
          ))}
        </ContentWrapper>

        <CustomButton onClick={handlePay} disabled={!selectedPlan}>
          Оплатить выбранную подписку
        </CustomButton>
      </BottomSheet>
    </>
  );
};

export default TarotResult;
