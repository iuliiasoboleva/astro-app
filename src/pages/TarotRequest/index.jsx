import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import cardsIcon from '../../assets/icons/cards.svg';
import ScreenHeader from '../../components/ScreenHeader';
import { tarotCategoryById } from '../../mocks/tarotCategories';
import { resetSession, selectTarot, setQuestion } from '../../store/tarotSessionSlice';
import CustomButton from '../../ui/CustomButton';
import { ButtonBlock, MainTitle, Subtitle, Textarea, TitleWrapper } from './styles';

const TarotRequest = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();

  const { question } = useSelector(selectTarot);
  const text = question;

  const handleSkip = () => {
    dispatch(setQuestion(''));
    navigate(`/tarot/${id}/spread`);
  };

  const handleBack = () => {
    dispatch(resetSession());
    navigate(-1);
  };

  const category = tarotCategoryById?.[String(id)] || null;
  const categoryShortTitle = category?.shortTitle;

  return (
    <ScreenHeader
      onBack={handleBack}
      topTitle="Расклад Таро"
      tagIcon={cardsIcon}
      tagLabel={categoryShortTitle}
    >
      <TitleWrapper>
        <MainTitle>Опиши детали вопроса ниже</MainTitle>
        <Subtitle>
          О ком спрашиваешь и ситуацию, например: «Мой бывший вчера сделал предложение другой
          девушке»
        </Subtitle>
      </TitleWrapper>

      <Textarea
        placeholder="Введите свой вопрос..."
        value={text}
        onChange={(e) => dispatch(setQuestion(e.target.value))}
      />

      <ButtonBlock>
        <CustomButton onClick={() => navigate(`/tarot/${id}/spread`)}>
          Отправить подробности
        </CustomButton>
        <CustomButton variant="outline" onClick={handleSkip}>
          Не хочу писать подробности
        </CustomButton>
      </ButtonBlock>
    </ScreenHeader>
  );
};

export default TarotRequest;
