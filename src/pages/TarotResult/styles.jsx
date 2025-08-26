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
`;

export const TitleBlock = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${topBg}) top center / cover no-repeat;

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

  margin-top: 8px;
  padding: 25px 15px 15px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

export const MainTitle = styled.h1`
  color: #1f3541;
  font-family: var(--font-sfpro);
  font-size: 22px;
  font-weight: 500;
  line-height: 26.4px;
  letter-spacing: -0.66px;
  text-align: left;
`;

export const Subtitle = styled.p`
  color: #546e7d;
  font-family: var(--font-sfpro);
  font-size: 15px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.3px;
`;

export const ButtonBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 8px;
  width: 100%;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  padding: 0 10px;
`;

export const ResumeWrapper = styled.div`
  padding: 30px;
  border-radius: 25px;
  border: 1px solid #f2f4f6;
  background: #fff;
  margin-bottom: 10px;
  margin-top: 40px;
`;

export const CardsRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 8px 0 30px;
  flex-wrap: wrap;
  align-self: center;
`;

export const CardImg = styled.img`
  width: 62px;
  height: auto;
  border-radius: 10px;
`;

export const Title = styled.h3`
  color: #1f3541;
  font-family: var(--font-sfpro);
  font-size: 18px;
  font-weight: 500;
  line-height: 21.6px;
  letter-spacing: -0.54px;
  padding: 0 20px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 20px 0;
`;
