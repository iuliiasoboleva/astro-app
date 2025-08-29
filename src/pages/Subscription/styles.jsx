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

export const CancelText = styled.p`
  color: #ff565c;
  text-align: center;
  font-family: var(--font-sfpro);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 19.2px;
  letter-spacing: -0.48px;
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: auto;
  text-decoration-thickness: 0.56px;
  text-underline-offset: 2.72px;
  text-underline-position: from-font;
  cursor: pointer;
`;
