import styled, { css } from 'styled-components';

import topBg from '../../assets/images/top-background.png';

export const TopTitle = styled.h2`
  color: #fff;
  font-family: var(--font-sfpro);
  font-size: 24px;
  font-weight: 500;
  line-height: 28.8px;
  letter-spacing: -0.72px;
  margin-left: 20px;
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
  background: linear-gradient(180deg, #f9fcff 0%, #fff 100%), #f9fcff;

  padding: 15px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  padding: 0 22px 27px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const Image = styled.img`
  width: 76px;
  height: 76px;
`;

export const Text = styled.p`
  color: #546e7d;
  text-align: center;
  font-family: var(--font-sfpro);
  font-size: 15px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.3px;
`;

export const Card = styled.div`
  padding: 20px;
  border-radius: 20px;
  border: 1px solid #fff;
  background: #fff;
  margin-bottom: 10px;
  width: 100%;
`;

export const Label = styled.div`
  color: #1f3541;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
`;

export const PromoRow = styled.div`
  display: flex;
  align-items: center;
  margin: 12px 0 10px;
`;

export const PromoBox = styled.div`
  position: relative;
  flex: 1;
  height: 58px;
  border-radius: 10px;
  border: 1px dashed #c1d0de;
  background: #fff;
  justify-content: space-between;

  display: flex;
  align-items: center;
  padding: 22px;

  ${({ $copied }) =>
    $copied &&
    css`
      border-color: #47c277;
      background: #f2fff7;
    `}
`;

export const Code = styled.div`
  color: #1f3541;
  text-align: center;
  text-overflow: ellipsis;
  font-size: 16px;
  font-weight: 500;
  line-height: 14px;
`;

export const BottomTitle = styled.h3`
  color: #1f3541;
  text-align: center;
  font-family: var(--font-sfpro);
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.6px;
  margin-top: 30px;
  margin-bottom: 28px;
`;

export const ListHeader = styled.div`
  color: #1f3541;
  text-align: center;
  font-family: var(--font-sfpro);
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.6px;
  text-align: left;
`;

export const Subnote = styled.div`
  color: #546e7d;
  text-align: center;
  font-family: var(--font-sfpro);
  font-size: 14px;
  font-weight: 400;
  line-height: 16.8px;
  letter-spacing: -0.42px;
  text-align: left;
  margin-top: 4px;
  margin-bottom: 5px;
`;

export const InviteRow = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;

  .user {
    color: #1f3541;
    text-align: center;
    font-family: var(--font-sfpro);
    font-size: 16px;
    font-weight: 500;
    line-height: 19.2px;
    letter-spacing: -0.48px;
  }

  .date {
    color: #546e7d;
    text-align: center;
    font-family: var(--font-sfpro);
    font-size: 14px;
    font-weight: 400;
    line-height: 16.8px;
    letter-spacing: -0.42px;
  }
`;

export const Divider = styled.div`
  height: 1px;
  background: #e2eaf1;
`;

export const BottomCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const BottomCard = styled.div`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  min-height: 167px;
  display: flex;
  padding: 20px;
  background: ${({ $bg }) => `url(${$bg}) no-repeat center / cover`};
  border: 1.5px solid ${({ $borderColor }) => $borderColor || 'transparent'};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1 1 auto;
  min-height: 0;
`;

export const Title = styled.div`
  max-width: 212px;
  color: #1f3541;
  font-family: var(--font-sfpro);
  font-size: 16px;
  font-weight: 500;
  line-height: 19.2px;
  letter-spacing: -0.48px;
  margin-bottom: 4px;
`;

export const Reward = styled.div`
  max-width: 212px;
  color: #546e7d;
  font-family: var(--font-sfpro);
  font-size: 14px;
  font-weight: 500;
  line-height: 16.8px;
  letter-spacing: -0.28px;
`;

export const ActionBtn = styled.button`
  align-self: flex-start;
  margin-top: auto;
  padding: 4px 8px;
  border-radius: 35px;
  border: 1px solid ${({ $color }) => $color || '#cfd9e2'};
  background: #fff;
  color: ${({ $color }) => $color || '#2b3a44'};
  cursor: pointer;
  transition: 0.2s;
  text-align: center;
  font-family: var(--font-sfpro);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.36px;

  &:hover {
    background: ${({ $color }) => $color}0d;
  }
  &:active {
    transform: translateY(1px);
  }
`;
