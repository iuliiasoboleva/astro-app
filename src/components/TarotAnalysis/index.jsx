import React, { useEffect, useMemo, useRef, useState } from 'react';

import largeCard from '../../assets/images/large-card.png';
import { Area, Card, Row, Track } from './styles';

const N = 5;
const TICK_MS = 1000;
const TRANSITION_MS = 820;

const TarotAnalysis = ({ className }) => {
  const [offset, setOffset] = useState(0);
  const [ready, setReady] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    const img = new Image();
    img.src = largeCard;
    if (img.complete) {
      setReady(true);
    } else {
      const onLoad = () => setReady(true);
      const onError = () => setReady(true);
      img.addEventListener('load', onLoad);
      img.addEventListener('error', onError);
      return () => {
        img.removeEventListener('load', onLoad);
        img.removeEventListener('error', onError);
      };
    }
  }, []);

  useEffect(() => {
    if (!ready) return;

    if (timerRef.current) clearInterval(timerRef.current);

    const r1 = requestAnimationFrame(() => {
      setOffset((o) => (o + 1) % N);
      const t = setTimeout(
        () => {
          timerRef.current = setInterval(() => {
            setOffset((o) => (o + 1) % N);
          }, TICK_MS);
        },
        Math.max(0, TRANSITION_MS - 20),
      );
      const stop = () => clearTimeout(t);
      timerRef.current && stop();
    });

    const onVis = () => {
      if (document.hidden) {
        if (timerRef.current) clearInterval(timerRef.current);
      } else {
        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
          setOffset((o) => (o + 1) % N);
        }, TICK_MS);
      }
    };
    document.addEventListener('visibilitychange', onVis);

    return () => {
      cancelAnimationFrame(r1);
      document.removeEventListener('visibilitychange', onVis);
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [ready]);

  const pause = () => timerRef.current && clearInterval(timerRef.current);
  const resume = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setOffset((o) => (o + 1) % N);
    }, TICK_MS);
  };

  const cards = useMemo(() => Array.from({ length: N }, (_, i) => i), []);

  return (
    <Area className={className} aria-label="Анализ выбранных карт">
      <Row
        role="list"
        aria-label="Выбранные карты"
        onMouseEnter={pause}
        onMouseLeave={resume}
        style={{
          ['--anim-ms']: `${TRANSITION_MS}ms`,
          ['--count']: N,
        }}
      >
        <Track aria-hidden>
          {cards.map((i) => {
            const pos = (i - offset + N) % N;
            return (
              <Card
                key={i}
                role="listitem"
                aria-hidden
                $pos={pos}
                $z={100 + pos}
                style={{ backgroundImage: `url(${largeCard})` }}
              />
            );
          })}
        </Track>
      </Row>
    </Area>
  );
};

export default TarotAnalysis;
