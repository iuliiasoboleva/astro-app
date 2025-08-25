import React, { useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

import arrowBack from '../../assets/icons/arrow-back.svg';
import cardsIcon from '../../assets/icons/cards.svg';
import TagButton from '../../components/TagButton';
import CustomButton from '../../ui/CustomButton';
import {
  ButtonBlock,
  MainTitle,
  Page,
  SoftBlock,
  Subtitle,
  TitleBlock,
  TitleWrapper,
  TopTitle,
} from './styles';

const TarotResult = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [search] = useSearchParams();
  const count = Number(search.get('count')) || 5;

  return (
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
          <Subtitle>Листайте в вниз, чтобы узнать подробнее</Subtitle>
        </TitleWrapper>

        <ButtonBlock>
          <CustomButton onClick={() => navigate(`/tarot/${id}?count=${count}`)}>
            Сделать еще расклад
          </CustomButton>
          <CustomButton variant="outline" onClick={() => navigate('/')}>
            Вернуться на главную
          </CustomButton>
        </ButtonBlock>
      </SoftBlock>
    </Page>
  );
};

export default TarotResult;
