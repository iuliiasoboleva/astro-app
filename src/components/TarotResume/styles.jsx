import styled from 'styled-components';

import tarotBg from '../../assets/images/tarot-background.png';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border-radius: 20px;
  border: 1px solid #f2f4f6;
  background: #fff;
`;

export const BackgroundImage = styled.div`
  position: relative;
  max-width: 320px;
  width: 100%;
  height: 260px;
  align-self: center;
  border-radius: 10px;
  flex-shrink: 0;
  overflow: hidden;
  background: url(${tarotBg}) center/cover no-repeat;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    box-shadow: inset 0 0 124px -52px rgba(255, 255, 255, 0.9);
    z-index: 2;
    pointer-events: none;
  }
`;

export const Tag = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 3;
  border-radius: 222px;
  border: 1px solid #4f93c9;
  display: flex;
  padding: 6px 8px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  color: #4f93c9;
  font-size: 12px;
  font-weight: 600;

  span {
    font-weight: 500;
  }
`;

export const Image = styled.div`
  position: absolute;
  top: 60px;
  left: 45px;
  width: 151px;
  height: 268px;
  transform: rotate(-8deg);
  border-radius: 10px;
  background: ${({ $img }) => `url(${$img}) center/cover no-repeat`};
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
  z-index: 1;
`;

export const Title = styled.h3`
  color: #1f3541;
  font-size: 16px;
  font-weight: 600;
  margin-top: 10px;
`;

export const Subtitle = styled.p`
  color: #546e7d;
  font-size: 14px;
  font-weight: 400;
`;
