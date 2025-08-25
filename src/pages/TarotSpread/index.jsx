import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

import arrowBack from '../../assets/icons/arrow-back.svg';
import arrowUp from '../../assets/icons/arrow-up.svg';
import cardsIcon from '../../assets/icons/cards.svg';
import largeCard from '../../assets/images/large-card.png';
import smallCard from '../../assets/images/small-card.png';
import TagButton from '../../components/TagButton';
import TarotAnalysis from '../../components/TarotAnalysis';
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

const TOTAL_CARDS = 70;
const CARD_W = 116;
const GAP = 10;
const BUFFER = 6;

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
  const [search] = useSearchParams();

  const REQUIRED = (() => {
    const n = Number(search.get('count')) || 5;
    return Math.min(10, Math.max(1, Math.floor(n)));
  })();

  const [remaining, setRemaining] = useState(() => shuffleDeck(TOTAL_CARDS));
  const [picked, setPicked] = useState([]);
  const [justPickedId, setJustPickedId] = useState(null);

  useEffect(() => {
    setRemaining(shuffleDeck(TOTAL_CARDS));
    setPicked([]);
    setJustPickedId(null);
  }, [id, REQUIRED]);

  const looped = useMemo(() => {
    if (remaining.length === 0) return [];
    const n = Math.min(BUFFER, remaining.length);
    const head = remaining.slice(0, n);
    const tail = remaining.slice(-n);
    return [...tail, ...remaining, ...head];
  }, [remaining]);

  const trackRef = useRef(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el || looped.length === 0) return;
    const padLeft = parseInt(getComputedStyle(el).paddingLeft || '0', 10);
    const step = CARD_W + GAP;
    const start = padLeft + step * Math.min(BUFFER, remaining.length);
    const t = setTimeout(() => {
      el.scrollLeft = start;
    }, 0);
    return () => clearTimeout(t);
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
        if (x < realStart - step) {
          el.scrollLeft = x + step * remaining.length;
        } else if (x > realEnd + step) {
          el.scrollLeft = x - step * remaining.length;
        }
        ticking = false;
      });
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, [looped.length, remaining.length]);

  const totalChosen = picked.length;
  const visibleChosen = picked.slice(Math.max(0, totalChosen - REQUIRED), totalChosen);
  const placeholdersCount = Math.max(0, REQUIRED - totalChosen);
  const canPick = totalChosen < REQUIRED;

  const nextNumber = totalChosen + 1;
  const word = ORDINALS[nextNumber - 1] || 'следующую';
  const instructionChoose = `Выберите ${word} карту`;

  const plural = (n) => (n === 1 ? 'у' : n > 1 && n < 5 ? 'ы' : '');

  const pickCard = (cardId) => {
    if (!canPick) return;
    if (!remaining.includes(cardId)) return;

    setPicked((prev) => [...prev, cardId]);
    setJustPickedId(cardId);
    setRemaining((prev) => prev.filter((id) => id !== cardId));
    setTimeout(() => setJustPickedId(null), 450);
  };

  const allChosen = placeholdersCount === 0;

  // авто-редирект через 5 секунд после показа анализа ===
  const redirectRef = useRef(null);
  useEffect(() => {
    if (!allChosen) {
      if (redirectRef.current) clearTimeout(redirectRef.current);
      return;
    }
    redirectRef.current = setTimeout(() => {
      navigate(`/tarot/${id}/result`, { replace: true });
    }, 5000);
    return () => {
      if (redirectRef.current) clearTimeout(redirectRef.current);
    };
  }, [allChosen, id, navigate]);
  // =================================================================

  return (
    <Page>
      <TitleBlock>
        <img src={arrowBack} alt="Назад" onClick={() => navigate(-1)} />
        <TopTitle>Расклад Таро</TopTitle>
      </TitleBlock>

      <SoftBlock>
        <TopBlock>
          <TagButton icon={cardsIcon} label="«Да/Нет»" onClick={() => {}} />

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
              <ChosenList $count={REQUIRED}>
                {visibleChosen.map((pid) => (
                  <ChosenItem
                    key={pid}
                    $img={smallCard}
                    className={pid === justPickedId ? 'animate-in' : undefined}
                  />
                ))}
                {Array.from({ length: placeholdersCount }).map((_, i) => {
                  const label = (totalChosen + i + 1).toString().padStart(2, '0');
                  return (
                    <Placeholder key={`ph-${label}`}>
                      <span>{label}</span>
                    </Placeholder>
                  );
                })}
              </ChosenList>
            </ChosenWrap>
          )}
        </TopBlock>

        {!allChosen ? (
          <SliderWrap>
            <SliderTrack ref={trackRef}>
              {looped.map((id, idx) => (
                <BigCard
                  key={`${id}-${idx}`}
                  $img={largeCard}
                  $disabled={!canPick}
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
