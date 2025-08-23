import styled from 'styled-components';

import model from '../../assets/images/modelHome.png';

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: linear-gradient(90deg, #c9e8fd 0%, #d1eafc 100%);
`;

export const Hero = styled.header`
  position: relative;
  height: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  background:
    url(${model}) right 5px top 18px / 276px auto no-repeat,
    radial-gradient(
      420px 360px at 82% -40px,
      rgba(255, 255, 255, 0.45) 0%,
      rgba(255, 255, 255, 0) 60%
    ),
    linear-gradient(
      198deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0) 56%,
      #c9e7fc 76%,
      #c9e7fc 100%
    ),
    radial-gradient(
      520px 520px at 22% 12%,
      rgba(255, 255, 255, 0.18) 0%,
      rgba(255, 255, 255, 0) 62%
    ),
    linear-gradient(180deg, #4f87c6 0%, #8fbbe3 34%, #cfe8fb 62%, #f5fbff 100%);
`;

export const SoftBlock = styled.div`
  border-radius: 35px 35px 0 0;
  border-top: 1px solid #fff;
  background: linear-gradient(180deg, #f9fcff 0%, #fff 100%);
  height: 65%;
  flex-shrink: 0;
  margin-top: auto;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const TitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  max-width: 174px;
`;

export const Name = styled.p`
  color: #fff;
  font-family: var(--font-sfpro);
  font-size: 10px;
  font-weight: 600;
  line-height: 14px;
  letter-spacing: 1.2px;
  text-transform: uppercase;
`;

export const MainTitle = styled.h1`
  color: #fff;
  font-family: 'Antiqua', serif;
  font-size: 36px;
  font-weight: 400;
  line-height: 39.6px;
  letter-spacing: -1.08px;
  text-transform: uppercase;
`;

export const LabelBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: auto;
  margin-bottom: 20px;
`;

export const Label = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  height: 23px;
  padding: 4px;
  border-radius: 6px;
  font-family: var(--font-sfpro);
  font-size: 14px;
  font-weight: 500;
  line-height: 14px;
  color: #1f3541;
  width: fit-content;
  background: radial-gradient(1841.33% 269.53% at 8.51% -17.39%, #fff 0%, #c9e7fc 100%);

  img {
    width: 12px;
    height: 12px;
  }
`;
