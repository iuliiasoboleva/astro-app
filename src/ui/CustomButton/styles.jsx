import styled, { css, keyframes } from 'styled-components';

const spin = keyframes`to { transform: rotate(360deg); }`;

export const StyledButton = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  border-radius: 10px;
  width: 100%;
  max-width: 360px;
  padding: 20px;
  height: 58px;
  font-weight: 500;
  font-size: 14px;
  text-align: center;
  color: #fff;
  user-select: none;
  transition: all 0.2s ease;

  ${({ $variant }) =>
    $variant === 'solid' &&
    css`
      background: linear-gradient(135deg, #0b1b24, #203a46 55%, #2f4a56);
      border: 1px solid transparent;
      color: #ffffff;
    `}

  ${({ $variant }) =>
    $variant === 'outline' &&
    css`
      background: transparent;
      border: 1px solid #c1d0de;
      color: #c1d0de; /* text & spinner color */
    `}

  &:hover:not(:disabled) {
    filter: brightness(1.06);
  }
  &:active:not(:disabled) {
    transform: translateY(1px);
    filter: brightness(0.98);
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const Spinner = styled.span`
  display: inline-block;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid currentColor;
  border-left-color: transparent;
  border-bottom-color: transparent;
  animation: ${spin} 0.8s linear infinite;
  opacity: 0.95;
`;

export const Label = styled.span``;

export const Icon = styled.span`
  display: inline-flex;
  align-items: center;
`;
