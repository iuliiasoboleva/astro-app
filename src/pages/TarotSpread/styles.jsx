import styled, { css, keyframes } from 'styled-components';

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
    cursor: pointer;
  }
`;

export const SoftBlock = styled.section`
  border-radius: 35px 35px 0 0;
  background: linear-gradient(180deg, #f9fcff 0%, #fff 100%);
  overflow: hidden;
  padding-bottom: 80px;
`;

export const TopBlock = styled.div`
  padding: 25px 15px 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const MainTitle = styled.h1`
  color: #1f3541;
  font-family: var(--font-sfpro);
  font-size: 22px;
  font-weight: 500;
  line-height: 26.4px;
  letter-spacing: -0.66px;
  text-align: left;
  margin-top: 12px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  align-items: center;
  padding: 0 10px;
`;

export const Text = styled.p`
  color: #546e7d;
  text-align: center;
  font-family: var(--font-sfpro);
  font-size: 15px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.3px;
`;

export const ChosenWrap = styled.div`
  width: 100%;
`;

export const ChosenList = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  width: 100%;
  flex-wrap: nowrap;
`;

const appear = keyframes`
  from { transform: translateY(6px) scale(.96); opacity: 0 }
  to   { transform: translateY(0) scale(1);    opacity: 1 }
`;

export const ChosenItem = styled.div`
  height: 110px;
  width: 62px;
  border-radius: 7.137px;
  background: ${({ $img }) => `url(${$img}) center/cover no-repeat`};

  &.animate-in {
    animation: ${appear} 0.45s ease both;
  }
`;

export const Placeholder = styled.div`
  border-radius: 7.137px;
  border: 1px dashed #c1d0de;
  background: #fff;
  width: 62px;
  height: 110px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    display: flex;
    width: 18px;
    height: 18px;
    padding: 3px 1px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #c1d0de;
    color: #fff;
    text-align: center;
    font-family: var(--font-sfpro);
    font-size: 9px;
    font-style: normal;
    font-weight: 600;
    line-height: 10.8px;
    letter-spacing: -0.27px;
  }
`;

export const SliderWrap = styled.div`
  width: 100%;
  position: relative;
`;

export const SliderTrack = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;

  overflow-x: auto;
  -webkit-overflow-scrolling: touch;

  padding: 0 24px 26px;

  scroll-snap-type: none;
  scroll-padding: 0;

  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  &::before,
  &::after {
    content: '';
    position: sticky;
    top: 0;
    height: 100%;
    width: 24px;
    pointer-events: none;
    z-index: 2;
  }
  &::before {
    left: 0;
    background: linear-gradient(90deg, #fff 0%, rgba(255, 255, 255, 0) 100%);
    border-top-left-radius: 35px;
  }
  &::after {
    right: 0;
    margin-left: auto;
    background: linear-gradient(270deg, #fff 0%, rgba(255, 255, 255, 0) 100%);
    border-top-right-radius: 35px;
  }
`;

export const BigCard = styled.div`
  flex: 0 0 auto;
  width: 79px;
  height: 140px;
  background: ${({ $img }) => `url(${$img}) center/cover no-repeat`};
  cursor: pointer;

  transition:
    transform 0.14s ease,
    border-color 0.18s ease;
  will-change: transform;

  &:active {
    transform: translateY(1px) scale(0.99);
  }

  &:focus {
    outline: none;
  }

  ${({ $disabled }) =>
    $disabled &&
    css`
      pointer-events: none;
      opacity: 0.6;
      cursor: default;
    `}
`;

const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
`;

export const ArrowUp = styled.img`
  width: 18px;
  height: 18px;
  animation: ${bounce} 1.2s ease-in-out infinite;
`;

export const Subtitle = styled.p`
  color: #546e7d;
  font-family: var(--font-sfpro);
  font-size: 15px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.3px;
`;
