import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import arrowBack from '../../assets/icons/arrow-back.svg';
import cardsIcon from '../../assets/icons/cards.svg';
import TagButton from '../../components/TagButton';
import { tarotCategoryById } from '../../mocks/tarotCategories';
import { resetSession, selectTarot, setQuestion } from '../../store/tarotSessionSlice';
import CustomButton from '../../ui/CustomButton';
import {
  ButtonBlock,
  MainTitle,
  Page,
  SoftBlock,
  Subtitle,
  Textarea,
  TitleBlock,
  TitleWrapper,
  TopTitle,
} from './styles';

const TarotRequest = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const { question } = useSelector(selectTarot);
  const text = question;

  const handleSend = async () => {
    setLoading(true);
    try {
      // имитация запроса
      await new Promise((resolve) => setTimeout(resolve, 1500));
      navigate(`/tarot/${id}/spread`);
    } finally {
      setLoading(false);
    }
  };

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
    <Page>
      <TitleBlock>
        <img src={arrowBack} alt="Назад" onClick={handleBack} style={{ cursor: 'pointer' }} />
        <TopTitle>Расклад Таро</TopTitle>
      </TitleBlock>

      <SoftBlock>
        <TagButton icon={cardsIcon} label={categoryShortTitle} />

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
          <CustomButton onClick={handleSend} loading={loading}>
            Отправить подробности
          </CustomButton>
          <CustomButton variant="outline" onClick={handleSkip}>
            Не хочу писать подробности
          </CustomButton>
        </ButtonBlock>
      </SoftBlock>
    </Page>
  );
};

export default TarotRequest;
