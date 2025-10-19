import styled, { css, keyframes } from 'styled-components';

const ENTER_MS = 240;
const EXIT_MS = 240;

const fadeIn = keyframes`
  from { opacity: 0 }
  to   { opacity: 1 }
`;
const fadeOut = keyframes`
  from { opacity: 1 }
  to   { opacity: 0 }
`;

const slideIn = keyframes`
  from { transform: translate3d(0, 100%, 0) }
  to   { transform: translate3d(0, 0, 0) }
`;
const slideOut = keyframes`
  from { transform: translate3d(0, 0, 0) }
  to   { transform: translate3d(0, 100%, 0) }
`;

export const Container = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1100; /* выше таб-бара */
`;

export const Backdrop = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(15, 30, 40, 0.45);
  animation: ${fadeIn} ${ENTER_MS}ms ease both;

  ${({ $exiting }) =>
    $exiting &&
    css`
      animation: ${fadeOut} ${EXIT_MS}ms ease both;
    `}
`;

export const Sheet = styled.section`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0 auto;
  width: 100%;

  background: #fff;
  border-radius: 35px 35px 0 0;

  padding: 15px 15px calc(35px + env(safe-area-inset-bottom, 0px));
  height: ${(p) => p.$height};
  max-height: ${(p) => p.$maxHeight};
  overflow: auto;

  will-change: transform, opacity;
  transform: translateZ(0);
  contain: paint;
  touch-action: none;

  transition: transform 0.18s ease;

  animation: ${slideIn} ${ENTER_MS}ms ease both;

  ${({ $exiting }) =>
    $exiting &&
    css`
      pointer-events: none;
      overflow: hidden;
      animation: ${slideOut} ${EXIT_MS}ms ease both;
    `}
`;

export const DragHandle = styled.div`
  width: 64px;
  height: 4px;
  margin: 0 auto 35px;
  border-radius: 45px;
  background: #e2eaf1;
`;
