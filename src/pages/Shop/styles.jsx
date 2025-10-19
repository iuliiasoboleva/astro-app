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
  display: flex;
  flex-direction: column;
  background: url(${topBg}) top center / cover no-repeat;
`;

export const TitleBlock = styled.header`
  position: relative;
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
  }
`;

export const SoftBlock = styled.section`
  border-radius: 35px 35px 0 0;
  background: linear-gradient(180deg, #f9fcff 0%, #fff 100%);

  padding: 20px 15px 15px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  gap: 10px;
  width: 100%;
  margin-bottom: 8px;

  @media (max-width: 345px) {
    grid-template-columns: 1fr;
  }
`;
