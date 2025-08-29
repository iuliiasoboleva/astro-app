import styled, { css } from 'styled-components';

const STATUS_STYLES = {
  vip: {
    text: '#D9C2B6',
    brd: '#D9C2B6',
  },
  platinum: {
    text: '#4F93C9',
    brd: '#4F93C9',
  },
  free: {
    text: '#546E7D',
    brd: '#546E7D',
  },
};

export const Row = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
`;

export const Name = styled.span`
  font-family: var(--font-sfpro);
  font-weight: 500;
  color: #1f3541;
  font-size: 22px;
  line-height: 26.4px;
  letter-spacing: -0.66px;
`;

export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 22px;
  padding: 3px 6px;
  border-radius: 35px;

  font-family: var(--font-sfpro);
  font-weight: 600;
  font-size: 12px;
  line-height: 1.2;
  letter-spacing: -0.03em;
  text-transform: uppercase;

  ${({ $variant }) => {
    const c = STATUS_STYLES[$variant] ?? STATUS_STYLES.free;
    return css`
      color: ${c.text};
      border: 1px solid ${c.brd};
    `;
  }}
`;
