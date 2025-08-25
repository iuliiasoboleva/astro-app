import styled from 'styled-components';

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

  background: linear-gradient(151deg, #4d92c8 1.82%, #5a99cc 19.63%, #bad9f1 61.54%);
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

  margin-top: 8px;
  padding: 25px 15px 15px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
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
`;
