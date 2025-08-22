import styled, { css } from 'styled-components';

export const Card = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 175px;
  height: 226px;
  width: 100%;
  padding: 16px;
  border-radius: 17px;
  overflow: hidden;
  text-align: left;
  border: 0;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  user-select: none;
  transition:
    transform 0.15s ease,
    filter 0.15s ease,
    box-shadow 0.2s ease;

  background:
    url(${(p) => p.$bg}) center / contain no-repeat,
    linear-gradient(135deg, #f6fbff 0%, #f9f9f9 25%, #e2f0fa 55%, #91bde2 100%);

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

export const BottomBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.div`
  position: relative;
  z-index: 1;
  font-family: var(--font-sfpro);
  white-space: pre-line;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.2;
  letter-spacing: -0.03em;
  color: ${({ status }) => (status === 'locked' ? '#6A6A6A' : '#437693')};
`;

export const Pill = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  min-height: 28px;
  padding: 4px 8px;
  border-radius: 35px;

  font: 500 12px/1 var(--font-sfpro);
  letter-spacing: -0.03em;

  background: #fff;
  color: ${({ $status }) => ($status === 'locked' ? '#848484' : '#4F93C9')};
  vertical-align: middle;
`;

export const CornerBadge = styled.div`
  z-index: 2;
  width: 28px;
  height: 28px;
  border-radius: 35px;
  padding: 4px;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;

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
