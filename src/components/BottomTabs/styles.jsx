import styled, { css } from 'styled-components';

export const Bar = styled.nav`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  padding: 10px 18px 14px;
  background: #fff;
  border-radius: 16px;
  border-top: 1px solid #f8f9fa;
`;

export const Item = styled.button`
  display: grid;
  justify-items: center;
  gap: 6px;
  padding: 6px 4px;
  background: transparent;
  border: 0;
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid rgba(53, 115, 255, 0.45);
    outline-offset: 2px;
    border-radius: 10px;
  }
`;

export const Icon = styled.span`
  width: 24px;
  height: 24px;

  background: ${({ $active }) =>
    $active ? `linear-gradient(180deg, #0b1b24 0%, #203a46 55%, #2f4a56 100%)` : `#C7D3DF`};
  mask: url(${(p) => p.$src}) center / contain no-repeat;
  -webkit-mask: url(${(p) => p.$src}) center / contain no-repeat;
`;

export const Label = styled.span`
  font-family: var(--font-sfpro);
  font-size: 12px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.02em;

  ${({ $active }) =>
    $active
      ? css`
          color: #0f1e28;
        `
      : css`
          color: #a7b6c4;
        `}
`;
