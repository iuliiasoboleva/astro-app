import styled from 'styled-components';

import profileBg from '../../assets/images/profile-background.png';

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: linear-gradient(180deg, #f9fcff 0%, #fff 100%), #f9fcff;
  z-index: 0;
  flex-shrink: 0;
  padding: 5px;
`;

export const Hero = styled.header`
  position: relative;
  max-height: 275px;
  height: 100%;
  border-radius: 13px;
  border-top: 1px solid #fff;
  background: #fff;
  backdrop-filter: blur(56.099998474121094px);
  padding: 33px 15px 40px;
  display: flex;
  flex-direction: column;
  background: url(${profileBg}) center center / cover no-repeat;
`;

export const TitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Name = styled.p`
  color: #fff;
  font-family: var(--font-sfpro);
  font-size: 6.827px;
  font-weight: 600;
  line-height: 9.557px;
  letter-spacing: 0.819px;
  text-transform: uppercase;
`;

export const MainTitle = styled.h1`
  color: #fff;
  font-family: 'Antiqua', serif;
  font-size: 28px;
  font-weight: 400;
  line-height: 30.8px;
  letter-spacing: -0.84px;
  text-transform: uppercase;
  max-width: 204px;
  text-align: center;
`;

export const MainWrapper = styled.div`
  padding: 40px 15px 15px;
`;

export const Avatar = styled.img`
  width: 90px;
  height: 90px;
  top: 65%;
  left: 20px;
  position: absolute;
`;

export const Nickname = styled.p`
  color: #546e7d;
  text-align: center;
  font-family: var(--font-sfpro);
  font-size: 16px;
  font-weight: 500;
  line-height: 19.2px;
`;

export const NameBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  padding: 0 10px;
`;

export const BalanceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
  gap: 8px;
  width: 100%;
  margin: 20px 0;
`;

export const MainSubtitle = styled.h3`
  color: #1f3541;
  text-align: center;
  font-family: var(--font-sfpro);
  font-size: 16px;
  font-weight: 500;
  line-height: 19.2px;
  letter-spacing: -0.48px;
  text-align: left;
`;

export const Promoblock = styled.div`
  padding: 20px 15px;
  border-radius: 8px;
  border: 1px solid #e2eaf1;
  background: #fff;
  margin: 15px 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    color: #1f3541;
    text-align: center;
    font-family: var(--font-sfpro);
    font-size: 16px;
    font-weight: 400;
    line-height: 19.2px;
    letter-spacing: -0.48px;
  }
  button {
    padding: 6px 10px;
    border-radius: 34px;
    border: 1px solid #4f93c9;
    color: #4f93c9;
    text-align: center;
    font-family: var(--font-sfpro);
    font-size: 12px;
    font-weight: 400;
    line-height: 14.4px;
    letter-spacing: -0.36px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  & > *:last-child {
    grid-column: 1 / -1;
  }
`;

export const Tile = styled.button`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: ${({ $size }) => ($size === 'l' ? '175px' : '150px')};
  border-radius: 15px;
  background: url(${({ $bgImage }) => $bgImage || 'none'}) right bottom / cover no-repeat;

  padding: 15px;
  text-align: left;
  cursor: pointer;
`;

export const Content = styled.div`
  position: relative;
  z-index: 1;

  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.div`
  font-family: var(--font-sfpro);
  font-size: 16px;
  font-weight: 500;
  line-height: 19.2px;
  letter-spacing: -0.48px;
  white-space: pre-line;
  color: ${({ $color }) => $color || '#437693'};
`;

export const Pill = styled.span`
  text-align: center;
  font-family: var(--font-sfpro);
  font-size: 12px;
  font-weight: 500;
  line-height: 14.4px;
  letter-spacing: -0.36px;
  color: ${({ $color }) => $color || '#4F93C9'};
`;

export const IconWrap = styled.div`
  border-radius: 35px;
  background: #fff;
  padding: 4px 8px;
  display: flex;
  align-items: center;
  gap: 4px;
  width: fit-content;

  img {
    width: 12px;
    height: 12px;
  }
`;
