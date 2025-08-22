import styled, { css } from 'styled-components';

export const Wrap = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 2px;
  border-radius: 50px;
  background: #e2eaf1;
`;

export const Indicator = styled.div`
  position: absolute;
  top: 2px;
  bottom: 2px;
  left: 0;
  border-radius: 50px;
  background: #ffffff;
  transition:
    transform 0.25s ease,
    width 0.25s ease;
  will-change: transform, width;
  pointer-events: none;
`;

export const TabBtn = styled.button`
  position: relative;
  z-index: 1;
  border: 1px solid transparent;
  border-radius: 50px;
  padding: 10px 20px;
  color: #8398a9;
  background: transparent;
  transition: color 0.15s ease;
  font-family: var(--font-sfpro);

  font-weight: 500;
  font-size: 16px;
  line-height: 1.2;
  letter-spacing: -0.03em;
  cursor: pointer;

  ${({ $active }) =>
    $active &&
    css`
      color: #1f3541;
    `}

  &:focus-visible {
    outline: 2px solid rgba(53, 115, 255, 0.5);
    outline-offset: 2px;
  }
`;
