// pages/AstroSteps/index.jsx
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import astroIcon from '../../assets/icons/astro.svg';
import calendarIcon from '../../assets/icons/calendar.svg';
import locationIcon from '../../assets/icons/location.svg';
import nameIcon from '../../assets/icons/name.svg';
import timeIcon from '../../assets/icons/time.svg';
import bigPlanet from '../../assets/images/big-planet.png';
import femaleIcon from '../../assets/images/female.png';
import maleIcon from '../../assets/images/male.png';
import planetStars from '../../assets/images/planet-stars.png';
import smallPlanet from '../../assets/images/small-planet.png';
import ScreenHeader from '../../components/ScreenHeader';
import { fmtDateRu, fmtTime, isoToRu, ruToIso } from '../../helpers/fmtDate';
import { astroCategoryById } from '../../mocks/astroCategories';
import {
  setBirthDate,
  setBirthPlace,
  setBirthTime,
  setCategory,
  setGender,
  setName,
} from '../../store/astroStepsSlice';
import { resetAstroForm } from '../../store/astroStepsSlice';
import CustomButton from '../../ui/CustomButton';
import {
  BackgroundImage,
  ButtonBlock,
  FinalMainTitle,
  FinalSubtitle,
  FinalTitleWrapper,
  HiddenPicker,
  IconButton,
  ImageBottom,
  ImageTop,
  Input,
  InputWrap,
  Number,
  Option,
  Row,
  Subtitle,
  TitleWrapper,
  TrailingIcon,
} from './styles';

const AstroSteps = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();

  const category = astroCategoryById?.[String(id)] || null;
  const categoryShortTitle = category?.shortTitle || '';

  const [step, setStep] = useState(0);
  const stepsTotal = 5;
  const [isAnalyzing, setAnalyzing] = useState(false);

  const dateMaskRef = useRef(null);
  const dateNativeRef = useRef(null);
  const timeMaskRef = useRef(null);
  const timeNativeRef = useRef(null);
  const cityRef = useRef(null);
  const nameRef = useRef(null);

  const redirectTimer = useRef(null);

  const form = useSelector((s) => s.astroSteps.form);
  const { gender, birthDate, birthTime, birthPlace, name } = form;

  // записываем выбранную категорию в стор
  useEffect(() => {
    if (id && categoryShortTitle) {
      dispatch(setCategory({ id: String(id), title: categoryShortTitle }));
    }
  }, [dispatch, id, categoryShortTitle]);

  useEffect(() => {
    return () => {
      if (redirectTimer.current) clearTimeout(redirectTimer.current);
    };
  }, []);

  const valid = useMemo(() => {
    switch (step) {
      case 0:
        return gender === 'm' || gender === 'f';
      case 1:
        return !!birthDate;
      case 2:
        return !!birthTime;
      case 3:
        return birthPlace.trim().length > 1;
      case 4:
        return name.trim().length > 1;
      default:
        return false;
    }
  }, [step, gender, birthDate, birthTime, birthPlace, name]);

  const onBack = () => {
    if (isAnalyzing) {
      setAnalyzing(false);
      if (redirectTimer.current) clearTimeout(redirectTimer.current);
      setStep(0);
      return;
    }
    if (step > 0) {
      setStep((s) => s - 1);
    } else {
      dispatch(resetAstroForm());
      navigate(-1);
    }
  };

  const startAnalyzeAndRedirect = () => {
    setAnalyzing(true);
    if (redirectTimer.current) clearTimeout(redirectTimer.current);
    redirectTimer.current = setTimeout(() => {
      navigate(`/astro/${id}/result`);
    }, 5000);
  };

  const next = (force = false) => {
    if (!force && !valid) return;

    if (step < stepsTotal - 1) {
      setStep((s) => s + 1);
    } else {
      startAnalyzeAndRedirect();
    }
  };

  const clearFieldByStep = (s) => {
    switch (s) {
      case 0:
        dispatch(setGender(null));
        break;
      case 1:
        dispatch(setBirthDate(''));
        break;
      case 2:
        dispatch(setBirthTime(''));
        break;
      case 3:
        dispatch(setBirthPlace(''));
        break;
      case 4:
        dispatch(setName(''));
        break;
      default:
        break;
    }
  };

  const handleSkip = () => {
    clearFieldByStep(step);
    if (step < stepsTotal - 1) {
      setStep((s) => s + 1);
    } else {
      startAnalyzeAndRedirect();
    }
  };

  return (
    <ScreenHeader
      onBack={onBack}
      topTitle="Астрология"
      tagIcon={astroIcon}
      tagLabel={categoryShortTitle}
    >
      {!isAnalyzing ? (
        <>
          <TitleWrapper>
            <Subtitle>
              {step === 0 && 'Выберите ваш пол'}
              {step === 1 && 'Дата вашего рождения?'}
              {step === 2 && 'В какое время вы родились?'}
              {step === 3 && 'Ваше место рождения?'}
              {step === 4 && 'Ваше имя?'}
            </Subtitle>
            <Number>
              {step === 0 && '01'}
              {step === 1 && '02'}
              {step === 2 && '03'}
              {step === 3 && '04'}
              {step === 4 && '05'}
            </Number>
          </TitleWrapper>

          {step === 0 && (
            <Row>
              <Option
                $bg={maleIcon}
                $bgSize="50px 50px"
                $bgPos="center center"
                active={gender === 'm'}
                onClick={() => dispatch(setGender('m'))}
              >
                Мужской
              </Option>

              <Option
                $bg={femaleIcon}
                $bgSize="35px 50px"
                $bgPos="center center"
                active={gender === 'f'}
                onClick={() => dispatch(setGender('f'))}
              >
                Женский
              </Option>
            </Row>
          )}

          {step === 1 && (
            <InputWrap>
              <Input
                ref={dateMaskRef}
                type="text"
                inputMode="numeric"
                placeholder="Выберите дату"
                value={birthDate}
                onChange={(e) => dispatch(setBirthDate(fmtDateRu(e.target.value)))}
                maxLength={10}
                aria-label="Дата рождения"
              />

              <HiddenPicker
                ref={dateNativeRef}
                type="date"
                value={ruToIso(birthDate)}
                onChange={(e) => dispatch(setBirthDate(isoToRu(e.target.value)))}
                tabIndex={-1}
                aria-hidden="true"
              />

              <IconButton
                type="button"
                onClick={() => {
                  const el = dateNativeRef.current;
                  if (!el) return;
                  if (typeof el.showPicker === 'function') el.showPicker();
                  else {
                    el.focus();
                    el.click();
                  }
                }}
                aria-label="Открыть календарь"
              >
                <TrailingIcon src={calendarIcon} alt="" />
              </IconButton>
            </InputWrap>
          )}

          {step === 2 && (
            <InputWrap>
              <Input
                ref={timeMaskRef}
                type="text"
                inputMode="numeric"
                placeholder="Выберите время"
                value={birthTime}
                onChange={(e) => dispatch(setBirthTime(fmtTime(e.target.value)))}
                maxLength={5}
                aria-label="Время рождения"
              />

              <HiddenPicker
                ref={timeNativeRef}
                type="time"
                value={birthTime}
                onChange={(e) => dispatch(setBirthTime(e.target.value))}
                tabIndex={-1}
                aria-hidden="true"
              />

              <IconButton
                type="button"
                onClick={() => {
                  const el = timeNativeRef.current;
                  if (!el) return;
                  if (typeof el.showPicker === 'function') el.showPicker();
                  else {
                    el.focus();
                    el.click();
                  }
                }}
                aria-label="Открыть выбор времени"
              >
                <TrailingIcon src={timeIcon} alt="" />
              </IconButton>
            </InputWrap>
          )}

          {step === 3 && (
            <InputWrap>
              <Input
                ref={cityRef}
                type="text"
                placeholder="Город"
                value={birthPlace}
                onChange={(e) => dispatch(setBirthPlace(e.target.value))}
                autoComplete="off"
                autoCorrect="off"
              />
              <IconButton
                type="button"
                aria-label="Указать местоположение"
                onClick={() => cityRef.current && cityRef.current.focus()}
              >
                <TrailingIcon src={locationIcon} alt="" />
              </IconButton>
            </InputWrap>
          )}

          {step === 4 && (
            <InputWrap>
              <Input
                ref={nameRef}
                type="text"
                placeholder="Имя"
                value={name}
                onChange={(e) => dispatch(setName(e.target.value))}
                autoComplete="name"
                autoCapitalize="words"
              />
              <IconButton
                type="button"
                aria-label="Ввести имя"
                onClick={() => nameRef.current && nameRef.current.focus()}
              >
                <TrailingIcon src={nameIcon} alt="" />
              </IconButton>
            </InputWrap>
          )}

          <ButtonBlock>
            <CustomButton onClick={() => next(false)}>Продолжить</CustomButton>
            <CustomButton variant="outline" onClick={handleSkip}>
              Не хочу отвечать, пропустить
            </CustomButton>
          </ButtonBlock>
        </>
      ) : (
        <>
          <FinalTitleWrapper>
            <FinalMainTitle>Считываю послание звёзд</FinalMainTitle>
            <FinalSubtitle>
              Анализирую положение Солнца, Луны и планет, чтобы раскрыть их влияние на твою судьбу.
            </FinalSubtitle>
          </FinalTitleWrapper>

          <BackgroundImage $bg={planetStars} $bgSize="50px 50px" $bgPos="center center">
            <ImageTop src={bigPlanet} alt="" />
            <ImageBottom src={smallPlanet} alt="" />
          </BackgroundImage>
        </>
      )}
    </ScreenHeader>
  );
};

export default AstroSteps;
