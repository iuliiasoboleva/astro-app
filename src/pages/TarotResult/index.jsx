import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import cardsIcon from '../../assets/icons/cards.svg';
import questionIcon from '../../assets/icons/message-chat-circle.svg';
import BottomSheet from '../../components/BottomSheet';
import InfoCard from '../../components/InfoCard';
import Plan from '../../components/Plan';
import ScreenHeader from '../../components/ScreenHeader';
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
  QuestionBlock,
  QuestionText,
  QuestionTitle,
  ResumeWrapper,
  Subtitle,
  Title,
  TitleWrapper,
} from './styles';

const TarotResult = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [selectedPlanId, setSelectedPlanId] = useState(null);

  const { picked } = useSelector(selectTarot);

  const location = useLocation();
  const fromArchive = location.state?.fromArchive;
  const archiveMeta = location.state?.meta || {};

  const selectedPlan = useMemo(
    () => plans.find((p) => p.id === selectedPlanId) || null,
    [plans, selectedPlanId],
  );

  const handleOpenSubscriptions = () => {
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

  const goHome = () => {
    dispatch(resetSession());
    navigate('/');
  };
  const category = tarotCategoryById?.[String(id)] || null;
  const categoryIcon = category?.icon;
  const categoryShortTitle = category?.shortTitle;

  const roles =
    (tarotResume?.length ?? 0) > 0
      ? Array.from({ length: picked.length }, (_, i) => tarotResume[i % tarotResume.length])
      : Array.from({ length: picked.length }, (_, i) => ({
          title: `Позиция ${i + 1}`,
          subtitle: '',
        }));

  return (
    <>
      <ScreenHeader
        onBack={handleBack}
        topTitle="Расклад Таро"
        tagIcon={cardsIcon}
        tagLabel={categoryShortTitle}
        fromArchive={fromArchive}
        date={archiveMeta?.date}
      >
        <TitleWrapper>
          <MainTitle>Ваш расклад Таро</MainTitle>
          <Subtitle>Листайте вниз, чтобы узнать подробнее</Subtitle>
        </TitleWrapper>
        {fromArchive && archiveMeta?.question && (
          <QuestionBlock>
            <QuestionTitle>
              <img src={questionIcon} width={12} height={12} alt="" />
              <p>Ваш вопрос:</p>
            </QuestionTitle>
            <QuestionText>{archiveMeta.question}</QuestionText>
          </QuestionBlock>
        )}
        <CardsRow>
          {picked.map((pid) => {
            const card = tarotById[pid];
            if (!card?.image) return null;
            return <CardImg key={pid} src={card.image} alt={card.title || `Карта ${pid}`} />;
          })}
        </CardsRow>

        {picked.map((pid, i) => {
          const card = tarotById[pid];
          const role = roles[i];
          if (!card?.image) return null;

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
          <CustomButton variant="outline" onClick={goHome}>
            Вернуться на главную
          </CustomButton>
        </ButtonBlock>
      </ScreenHeader>

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
            <Plan
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
