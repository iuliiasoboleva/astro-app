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

export const Wrapper = styled.div`
  border-radius: 20px;
  border: 1px solid #e2eaf1;
  padding: 20px;
  background: #fff;
  cursor: pointer;
  transition: all 0.25s ease;
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;

  ${({ $active }) =>
    $active &&
    css`
      border-color: #1f3541;
    `}
`;

export const Price = styled.span`
  color: #1f3541;
  text-align: center;
  font-family: var(--font-sfpro);
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 26.4px;
  letter-spacing: -0.66px;
`;

export const Period = styled.span`
  color: #546e7d;
  font-family: var(--font-sfpro);
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.3px;
`;

export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 23px;
  padding: 3px 6px;
  border-radius: 35px;
  font-family: var(--font-sfpro);
  font-weight: 600;
  font-size: 14px;
  line-height: 16.8px;
  letter-spacing: -0.42px;
  text-transform: uppercase;
  color: #546e7d;
  border: 1px solid #546e7d;

  ${({ $variant }) => {
    const c = STATUS_STYLES[$variant] ?? STATUS_STYLES.free;
    return css`
      color: ${c.text};
      border: 1px solid ${c.brd};
    `;
  }}
`;

export const Title = styled.h3`
  margin: 12px 0 4px;
  font-size: 18px;
  font-weight: 600;
  color: #1f3541;
`;

export const Subtitle = styled.p`
  font-size: 14px;
  color: #546e7d;
  margin-bottom: 8px;
`;

export const Features = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
export const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FeatureItem = styled.li`
  display: flex;
  gap: 12px;
  color: #546e7d;
  font-family: var(--font-sfpro);
  font-size: 15px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.3px;
  align-items: center;
`;
