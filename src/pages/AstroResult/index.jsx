import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import astroIcon from '../../assets/icons/astro.svg';
import calendarIcon from '../../assets/icons/calendar.svg';
import locationIcon from '../../assets/icons/location.svg';
import nameIcon from '../../assets/icons/name.svg';
import planetBackground from '../../assets/images/planet-background.png';
import BottomSheet from '../../components/BottomSheet';
import InfoCard from '../../components/InfoCard';
import ScreenHeader from '../../components/ScreenHeader';
import Subscription from '../../components/Subscription';
import { astroCategoryById } from '../../mocks/astroCategories';
import { astroResume } from '../../mocks/astroResume';
import { plans } from '../../mocks/tariffs';
import { fullResume } from '../../mocks/tarotResume';
import { resetAstroForm } from '../../store/astroStepsSlice';
import CustomButton from '../../ui/CustomButton';
import {
  ButtonBlock,
  Card,
  ContentWrapper,
  IconWrap,
  Image,
  InfoBlock,
  InfoSubtitle,
  InfoTitle,
  Label,
  Left,
  MainTitle,
  ResumeWrapper,
  Right,
  Row,
  Subtitle,
  Title,
  TitleWrapper,
  TopBlock,
  Value,
} from './styles';

const fields = [
  { key: 'name', label: 'Ваше имя:', icon: nameIcon },
  { key: 'birthDate', label: 'Дата рождения:', icon: calendarIcon },
  { key: 'birthPlace', label: 'Место рождения:', icon: locationIcon },
];

const AstroResult = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [selectedPlanId, setSelectedPlanId] = useState(null);
  const { form } = useSelector((s) => s.astroSteps || {});

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
    dispatch(resetAstroForm());
    navigate(-1);
  };

  const goHome = () => {
    dispatch(resetAstroForm());
    navigate('/');
  };

  const category = astroCategoryById?.[String(id)] || null;
  const categoryIcon = category?.icon;
  const categoryShortTitle = category?.shortTitle;

  return (
    <>
      <ScreenHeader
        onBack={handleBack}
        topTitle="Астрология"
        tagIcon={astroIcon}
        tagLabel={categoryShortTitle}
      >
        <TitleWrapper>
          <MainTitle>Ваш Астрологический расклад</MainTitle>
          <Subtitle>Листайте вниз, чтобы узнать подробнее</Subtitle>
        </TitleWrapper>

        <TopBlock>
          <Image src={planetBackground} alt="" />
          <Card aria-label="Ваши данные">
            {fields.map(({ key, label, icon }) => {
              const raw = form?.[key];
              const value =
                typeof raw === 'string' && raw.trim().length > 0
                  ? raw
                  : key === 'gender'
                    ? raw === 'm'
                      ? 'Мужской'
                      : raw === 'f'
                        ? 'Женский'
                        : '—'
                    : '—';

              return (
                <Row key={key}>
                  <Left>
                    <IconWrap>
                      <img src={icon} alt="" />
                    </IconWrap>
                    <Label>{label}</Label>
                  </Left>
                  <Right>
                    <Value title={value}>{value}</Value>
                  </Right>
                </Row>
              );
            })}
          </Card>
        </TopBlock>
        {astroResume.map((block) => (
          <InfoBlock key={block.id}>
            <InfoTitle>{block.title}</InfoTitle>
            <InfoSubtitle>{block.text}</InfoSubtitle>
          </InfoBlock>
        ))}
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

export default AstroResult;
