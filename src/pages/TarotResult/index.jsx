import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import arrowBack from '../../assets/icons/arrow-back.svg';
import cardsIcon from '../../assets/icons/cards.svg';
import BottomSheet from '../../components/BottomSheet';
import InfoCard from '../../components/InfoCard';
import Subscription from '../../components/Subscription';
import TagButton from '../../components/TagButton';
import TarotResume from '../../components/TarotResume';
import { plans } from '../../mocks/tariffs';
import { tarotCategoryById } from '../../mocks/tarotCategories';
import { fullResume, tarotResume } from '../../mocks/tarotResume';
import { tarotById } from '../../mocks/tarotValues';
import { resetSession, selectTarot } from '../../store/tarotSessionSlice';
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

const TarotResult = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [selectedPlanId, setSelectedPlanId] = useState(null);

  const { picked } = useSelector(selectTarot);

  const selectedPlan = useMemo(
    () => plans.find((p) => p.id === selectedPlanId) || null,
    [plans, selectedPlanId],
  );

  const handleOpenSubscriptions = () => {
    // navigate(`/tarot/${id}?count=${count}`)
    setOpen(true);
  };

  const handleSelectPlan = (planId) => setSelectedPlanId(planId);

  const handlePay = () => {
    if (!selectedPlan) return;
    navigate(`/`, { replace: true });
  };

  const handleBack = () => {
    dispatch(resetSession());
    navigate(-1);
  };

  const category = tarotCategoryById?.[String(id)] || null;
  const categoryIcon = category?.icon;
  const categoryShortTitle = category?.shortTitle;

  return (
    <>
      <Page>
        <TitleBlock>
          <img src={arrowBack} alt="Назад" onClick={handleBack} style={{ cursor: 'pointer' }} />
          <TopTitle>Расклад Таро</TopTitle>
        </TitleBlock>

        <SoftBlock>
          <TagButton icon={cardsIcon} label={categoryShortTitle} />

          <TitleWrapper>
            <MainTitle>Ваш расклад Таро</MainTitle>
            <Subtitle>Листайте вниз, чтобы узнать подробнее</Subtitle>
          </TitleWrapper>

          <CardsRow>
            {picked.map((pid) => {
              const card = tarotById[pid];
              if (!card?.image) return null;
              return <CardImg key={pid} src={card.image} alt={card.title || `Карта ${pid}`} />;
            })}
          </CardsRow>

          {picked.map((pid, i) => {
            const role = tarotResume[i];
            const card = tarotById[pid];
            if (!role || !card?.image) return null;

            return (
              <TarotResume
                key={`${pid}-${i}`}
                image={card.image}
                label={card.title}
                title={role.title}
                subtitle={role.subtitle}
              />
            );
          })}

          <ResumeWrapper>
            <InfoCard icon={categoryIcon} title="Общий вывод" subtitle={fullResume} />
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
