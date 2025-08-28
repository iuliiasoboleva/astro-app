import styled from 'styled-components';

import topBg from '../../assets/images/top-background.png';

export const TopTitle = styled.h2`
  color: #fff;
  font-family: var(--font-sfpro);
  font-size: 24px;
  font-weight: 500;
  line-height: 28.8px;
  letter-spacing: -0.72px;
`;

export const Page = styled.div`
  --header-bg-height: 220px;
  --soft-overlap: 12px;

  position: relative;
  display: flex;
  flex-direction: column;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: var(--header-bg-height);
    background: url(${topBg}) top center / cover no-repeat;
    z-index: 0;
    pointer-events: none;
  }
`;

export const TitleBlock = styled.header`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 120px;
  padding: 15px;

  img {
    position: absolute;
    left: 15px;
    width: 43px;
    height: 43px;
    cursor: pointer;
  }
`;

export const SoftBlock = styled.section`
  position: relative;
  z-index: 1;
  border-radius: 35px 35px 0 0;
  background: linear-gradient(180deg, #f9fcff 0%, #fff 100%);
  margin-top: calc(var(--soft-overlap) * -1);

  padding: 20px 15px 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

export const TagBlock = styled.div`
  display: flex;
  gap: 6px;
  margin: 0 10px;
`;
