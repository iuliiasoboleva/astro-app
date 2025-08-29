// styles.js
import styled, { css } from 'styled-components';

export const Card = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  max-width: 175px;
  height: 226px;

  padding: 16px;
  border-radius: 17px;
  border: 3px solid #ffffff;
  overflow: hidden;
  text-align: left;
  background:
    url(${(p) => p.$bg}) bottom / contain no-repeat,
    linear-gradient(135deg, #f6fbff 0%, #f9f9f9 25%, #e2f0fa 55%, #91bde2 100%);

  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  user-select: none;

  transition:
    transform 0.15s ease,
    filter 0.15s ease,
    box-shadow 0.2s ease;

  &:active:not(:disabled) {
    transform: translateY(1px);
  }

  ${({ $status }) =>
    $status === 'locked' &&
    css`
      filter: grayscale(60%);
      &::after {
        content: '';
        position: absolute;
        inset: 0;
        background: rgba(255, 255, 255, 0.15);
      }
    `}
`;

export const Title = styled.div`
  position: relative;
  z-index: 1;

  font-family: var(--font-sfpro);
  font-weight: 500;
  font-size: 16px;
  line-height: 1.2;
  letter-spacing: -0.03em;

  white-space: pre-line;
  color: ${({ $status }) => ($status === 'locked' ? '#6A6A6A' : '#437693')};
`;

export const BottomBlock = styled.div`
  width: 100%;
  min-width: 0;

  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  column-gap: 8px;

  > * {
    min-width: 0;
  }
`;

export const Pill = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: fit-content;
  min-height: 28px;
  padding: 4px 8px;
  border-radius: 35px;

  font-family: var(--font-sfpro);
  font-weight: 500;
  font-size: 12px;
  line-height: 1;
  letter-spacing: -0.03em;

  background: #ffffff;
  color: ${({ $status }) => ($status === 'locked' ? '#848484' : '#4F93C9')};
`;

export const Price = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: fit-content;
  min-height: 28px;
  padding: 4px 8px;
  border-radius: 35px;
  font-family: var(--font-sfpro);
  font-weight: 500;
  font-size: 12px;
  line-height: 1;
  letter-spacing: -0.03em;

  background:
    radial-gradient(114.12% 92.74% at 24.44% -17.31%, #435f6e 0%, rgba(31, 53, 65, 0) 100%), #1f3541;
  color: #fff;
`;

export const CornerBadge = styled.div`
  justify-self: end;
  z-index: 2;

  width: 28px;
  height: 28px;
  padding: 4px;
  border-radius: 35px;
  background: #ffffff;

  display: flex;
  align-items: center;
  justify-content: center;

  ${({ $status }) =>
    $status === 'locked'
      ? css`
          color: #848484;
        `
      : css`
          color: #4f93c9;
        `}

  ${({ $hidden }) =>
    $hidden &&
    css`
      display: none;
    `}
`;
