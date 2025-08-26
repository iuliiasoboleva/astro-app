import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

import arrowBack from '../../assets/icons/arrow-back.svg';
import arrowUp from '../../assets/icons/arrow-up.svg';
import cardsIcon from '../../assets/icons/cards.svg';
import largeCard from '../../assets/images/large-card.png';
import smallCard from '../../assets/images/small-card.png';
import TagButton from '../../components/TagButton';
import TarotAnalysis from '../../components/TarotAnalysis';
import { tarotCategoryById } from '../../mocks/tarotCategories';
import {
  addPick,
  resetSession,
  selectTarot,
  setCategoryId,
  setRequiredCount,
  submitTarotSession,
} from '../../store/tarotSessionSlice';
import {
  ArrowUp,
  BigCard,
  ChosenItem,
  ChosenList,
  ChosenWrap,
  MainTitle,
  Page,
  Placeholder,
  SliderTrack,
  SliderWrap,
  SoftBlock,
  Subtitle,
  Text,
  TitleBlock,
  TitleWrapper,
  TopBlock,
  TopTitle,
} from './styles';

const TOTAL_CARDS = 78;
const CARD_W = 79;
const GAP = 10;
const BUFFER = 6;
const PAGE_SIZE = 5;

const ORDINALS = [
  'первую',
  'вторую',
  'третью',
  'четвёртую',
  'пятую',
  'шестую',
  'седьмую',
  'восьмую',
  'девятую',
  'десятую',
  'одиннадцатую',
  'двенадцатую',
  'тринадцатую',
];

function shuffleDeck(n) {
  const arr = Array.from({ length: n }, (_, i) => i + 1);
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const TarotSpread = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { requiredCount, picked } = useSelector(selectTarot);

  const REQUIRED = Math.min(13, Math.max(1, Number(requiredCount) || 5));

  const [remaining, setRemaining] = useState(() => shuffleDeck(TOTAL_CARDS));

  useEffect(() => {
    dispatch(setCategoryId(id));

    if (!requiredCount) {
      const category = tarotCategoryById?.[String(id)];
      if (category?.count) {
        dispatch(setRequiredCount(category.count));
      }
    }
  }, [id, requiredCount, dispatch]);

  useEffect(() => {
    setRemaining(shuffleDeck(TOTAL_CARDS));
  }, [id, REQUIRED]);

  const looped = useMemo(() => {
    if (remaining.length === 0) return [];
    const n = Math.min(BUFFER, remaining.length);
    const head = remaining.slice(0, n);
    const tail = remaining.slice(-n);
    return [...tail, ...remaining, ...head];
  }, [remaining]);

  const trackRef = useRef(null);

  useLayoutEffect(() => {
    const el = trackRef.current;
    if (!el || looped.length === 0) return;
    const padLeft = parseInt(getComputedStyle(el).paddingLeft || '0', 10);
    const step = CARD_W + GAP;
    const start = padLeft + step * Math.min(BUFFER, remaining.length);
    el.scrollLeft = start;
  }, [looped.length, remaining.length]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el || looped.length === 0) return;

    const step = CARD_W + GAP;
    const padLeft = parseInt(getComputedStyle(el).paddingLeft || '0', 10);
    const n = Math.min(BUFFER, remaining.length);
    const realStart = padLeft + step * n;
    const realEnd = padLeft + step * (n + remaining.length);

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const x = el.scrollLeft;
        if (x < realStart - step * 0.6) {
          el.scrollLeft = x + step * remaining.length;
        } else if (x > realEnd + step * 0.6) {
          el.scrollLeft = x - step * remaining.length;
        }
        ticking = false;
      });
    };

    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, [looped.length, remaining.length]);

  const totalChosen = picked.length;
  const placeholdersCount = Math.max(0, REQUIRED - totalChosen);
  const canPick = totalChosen < REQUIRED;

  const nextNumber = totalChosen + 1;
  const word = ORDINALS[nextNumber - 1] || 'следующую';
  const instructionChoose = `Выберите ${word} карту`;

  const plural = (n) => (n === 1 ? 'у' : n > 1 && n < 5 ? 'ы' : '');

  const pickCard = (cardId) => {
    if (!canPick) return;
    if (!remaining.includes(cardId)) return;

    dispatch(addPick(cardId));
    setRemaining((prev) => prev.filter((id) => id !== cardId));
  };

  const allChosen = placeholdersCount === 0;

  useEffect(() => {
    if (!allChosen) return;
    let cancelled = false;

    (async () => {
      try {
        await dispatch(submitTarotSession()).unwrap();
        if (!cancelled) navigate(`/tarot/${id}/result`, { replace: true });
      } catch (e) {
        // опционально: показать тост/ошибку
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [allChosen, dispatch, id, navigate]);

  const handleBack = () => {
    dispatch(resetSession());
    navigate(-1);
  };

  const category = tarotCategoryById?.[String(id)] || null;
  const categoryShortTitle = category?.shortTitle;

  return (
    <Page>
      <TitleBlock>
        <img src={arrowBack} alt="Назад" onClick={handleBack} />
        <TopTitle>Расклад Таро</TopTitle>
      </TitleBlock>

      <SoftBlock>
        <TopBlock>
          <TagButton icon={cardsIcon} label={categoryShortTitle} />

          {!allChosen ? (
            <TitleWrapper style={{ alignItems: 'flex-start' }}>
              <MainTitle style={{ marginBottom: '40px' }}>
                Для ответа на этот расклад нужно выбрать {REQUIRED} карт{plural(REQUIRED)}
              </MainTitle>
            </TitleWrapper>
          ) : (
            <TitleWrapper style={{ alignItems: 'flex-start' }}>
              <MainTitle>Читаю энергию выбранных карт</MainTitle>
              <Subtitle>
                Связываюсь с символами Таро, чтобы раскрыть их послание и дать тебе точный ответ.
              </Subtitle>
            </TitleWrapper>
          )}

          {!allChosen && (
            <ChosenWrap>
              {(() => {
                const totalChosen = picked.length;
                const pageIndex = Math.floor(totalChosen / PAGE_SIZE); // 0,1,2...
                const start = pageIndex * PAGE_SIZE; // индекс первого слота на странице
                const end = Math.min(start + PAGE_SIZE, REQUIRED); // индекс за последним видимым слотом
                const slots = Array.from({ length: end - start }, (_, i) => start + i); // абсолютные индексы слотов

                return (
                  <ChosenList $count={REQUIRED}>
                    {slots.map((slotIndex) => {
                      const isFilled = slotIndex < totalChosen;
                      const numberLabel = String(slotIndex + 1).padStart(2, '0'); // 01..13

                      return isFilled ? (
                        <ChosenItem
                          key={`c-${slotIndex}`}
                          $img={smallCard}
                          // анимация только для последнего добавленного слота
                          className={slotIndex === totalChosen - 1 ? 'animate-in' : undefined}
                        />
                      ) : (
                        <Placeholder key={`ph-${slotIndex}`}>
                          <span>{numberLabel}</span>
                        </Placeholder>
                      );
                    })}
                  </ChosenList>
                );
              })()}
            </ChosenWrap>
          )}
        </TopBlock>

        {!allChosen ? (
          <SliderWrap>
            <SliderTrack ref={trackRef}>
              {looped.map((id, idx) => (
                <BigCard
                  as="div"
                  role="button"
                  key={idx}
                  data-id={id}
                  $img={largeCard}
                  $disabled={!canPick}
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={canPick ? () => pickCard(id) : undefined}
                  aria-disabled={!canPick}
                  tabIndex={canPick ? 0 : -1}
                />
              ))}
            </SliderTrack>
          </SliderWrap>
        ) : (
          <TarotAnalysis cardImage={largeCard} />
        )}

        <TitleWrapper>
          <ArrowUp src={arrowUp} alt="" />
          <Text>{allChosen ? 'Анализирую карты' : instructionChoose}</Text>
        </TitleWrapper>
      </SoftBlock>
    </Page>
  );
};

export default TarotSpread;
