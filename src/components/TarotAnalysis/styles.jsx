import styled, { css } from 'styled-components';

export const Area = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 16px 26px;
  text-align: center;
`;

export const Row = styled.div`
  --card-w: clamp(84px, 14vw, 140px);
  --card-ratio: 100 / 160;

  --overlap: clamp(12px, calc(var(--card-w) * 0.34), 48px);
  --step: calc(var(--card-w) - var(--overlap));

  --anim-ms: 520ms;
  --count: 5;

  --center-offset: calc(-0.5 * (var(--count) - 1) * var(--step));

  --optical-shift: 0px;

  position: relative;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  height: calc(var(--card-w) / (var(--card-ratio)));

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Track = styled.div`
  position: relative;
  width: calc(var(--card-w) + (var(--count) - 1) * var(--step));
  height: 100%;
  margin: 0 auto;
`;

export const Card = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: var(--card-w);
  aspect-ratio: var(--card-ratio);
  border-radius: 10px;

  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.08));
  will-change: transform;
  transform: translateZ(0);
  transition: transform var(--anim-ms) linear;

  ${({ $pos }) => css`
    transform: translateX(
      calc(-50% + var(--center-offset) + ${$pos} * var(--step) + var(--optical-shift))
    );
  `};

  ${({ $z }) => css`
    z-index: ${$z};
  `}

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;
