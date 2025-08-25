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
  Textarea,
  TitleBlock,
  TitleWrapper,
  TopTitle,
} from './styles';

const TarotRequest = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [search] = useSearchParams();
  const count = Number(search.get('count')) || 5;

  const [loading, setLoading] = useState(false);
  const [text, setText] = useState('');

  const handleSend = async () => {
    setLoading(true);
    try {
      // имитация запроса
      await new Promise((resolve) => setTimeout(resolve, 1500));

      navigate(`/tarot/${id}/spread?count=${count}`);
    } finally {
      setLoading(false);
    }
  };

  const handleSkip = () => {
    navigate(`/tarot/${id}/spread?count=${count}`);
  };

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
          <MainTitle>Опиши детали вопроса ниже</MainTitle>
          <Subtitle>
            О ком спрашиваешь и ситуацию, например: «Мой бывший вчера сделал предложение другой
            девушке»
          </Subtitle>
        </TitleWrapper>

        <Textarea
          placeholder="Введите свой вопрос..."
          value={text}
          onChange={(e) => setText(e.target.value)}
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
