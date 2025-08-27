import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import astroIcon from '../../assets/icons/astro.svg';
import ScreenHeader from '../../components/ScreenHeader';
import { astroCategoryById } from '../../mocks/astroCategories';
import { resetAstroForm } from '../../store/astroStepsSlice';
import CustomButton from '../../ui/CustomButton';
import { ButtonBlock, MainTitle, Subtitle, TitleWrapper } from './styles';

const AstroRequest = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();

  const handleBack = () => {
    dispatch(resetAstroForm());
    navigate(-1);
  };

  const category = astroCategoryById?.[String(id)] || null;
  const categoryShortTitle = category?.shortTitle;

  return (
    <ScreenHeader
      onBack={handleBack}
      topTitle="Астрология"
      tagIcon={astroIcon}
      tagLabel={categoryShortTitle}
    >
      <TitleWrapper>
        <MainTitle>Чтобы узнать результаты нужно ответить на 5 вопросов</MainTitle>
        <Subtitle>Нажмите на кнопку «Начать» если готовы</Subtitle>
      </TitleWrapper>

      <ButtonBlock>
        <CustomButton onClick={() => navigate(`/astro/${id}/steps`)}>Начать</CustomButton>
      </ButtonBlock>
    </ScreenHeader>
  );
};

export default AstroRequest;
