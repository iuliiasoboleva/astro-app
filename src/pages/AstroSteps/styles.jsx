import styled, { css, keyframes } from 'styled-components';

export const Row = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 12px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
const floatUp = keyframes`
  0%   { transform: translateY(0); }
  50%  { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

const floatDown = keyframes`
  0%   { transform: translateY(0); }
  50%  { transform: translateY(10px); }
  100% { transform: translateY(0); }
`;

export const Option = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 50%;
  height: 194px;

  flex-shrink: 0;
  cursor: pointer;

  border-radius: 15px;
  border: 1px solid #e2eaf1;
  background-color: #fff;
  box-sizing: border-box;

  padding: 20px;

  color: #c1d0de;
  text-align: center;
  font-family: var(--font-sfpro);
  font-size: 16px;
  font-weight: 500;
  line-height: 19.2px;
  letter-spacing: -0.48px;

  ${({ $bg, $bgSize = 'contain', $bgPos = 'center 24px' }) =>
    $bg &&
    css`
      background-image: url(${$bg});
      background-repeat: no-repeat;
      background-position: ${$bgPos};
      background-size: ${$bgSize};
    `}

  ${({ active }) =>
    active &&
    css`
      border-color: #1f3541;
    `}
`;

export const InputWrap = styled.div`
  position: relative;
  width: 100%;
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 59px;
  padding: 0 44px 0 15px;
  border-radius: 8px;
  border: 1px solid #e2eaf1;
  background: #fff;
  outline: none;
  color: #1f3541;
  font: 400 16px/19.2px var(--font-sfpro);
  letter-spacing: -0.48px;

  &::placeholder {
    color: #c1d0de;
  }

  &::-webkit-calendar-picker-indicator {
    opacity: 0;
    pointer-events: none;
  }
`;

export const HiddenPicker = styled.input`
  position: absolute;
  inset: 0 auto auto 0;
  width: 1px;
  height: 1px;
  opacity: 0;
  pointer-events: none;
  border: 0;
  padding: 0;
`;

export const IconButton = styled.button`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 28px;
  height: 28px;
  border: 0;
  background: transparent;
  padding: 0;
  display: grid;
  place-items: center;
  cursor: pointer;
`;

export const TrailingIcon = styled.img`
  width: 20px;
  height: 20px;
  display: block;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 10px;
`;

export const Subtitle = styled.p`
  color: #1f3541;
  font-family: var(--font-sfpro);
  font-size: 22px;
  font-weight: 500;
  line-height: 26.4px;
  letter-spacing: -0.66px;
`;

export const Number = styled.p`
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
  font-weight: 600;
  line-height: 10.8px;
  letter-spacing: -0.27px;
`;

export const ButtonBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 4px;
  width: 100%;
  align-items: center;

  button {
    max-width: 100%;
  }
`;

export const BackgroundImage = styled.div`
  position: relative;
  width: 100%;
  min-height: clamp(220px, 30vh, 360px);

  ${(props) =>
    props.$bg &&
    css`
      background-image: url(${props.$bg});
      background-repeat: no-repeat;
      background-position: ${props.$bgPos || 'center center'};
      background-size: 100%;
    `}

  overflow: hidden;
`;

export const ImageTop = styled.img`
  position: absolute;
  right: 20px;
  top: 50px;
  pointer-events: none;
  user-select: none;
  z-index: 1;
  width: 35px;
  height: 35px;

  will-change: transform;
  animation: ${floatUp} 3.8s ease-in-out infinite;
  animation-delay: 0.1s;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const ImageBottom = styled.img`
  position: absolute;
  left: 75px;
  bottom: 35px;
  pointer-events: none;
  user-select: none;
  z-index: 1;
  width: 20px;
  height: 20px;

  will-change: transform;
  animation: ${floatDown} 4.6s ease-in-out infinite;
  animation-delay: 0.3s;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const FinalMainTitle = styled.h1`
  color: #1f3541;
  font-family: var(--font-sfpro);
  font-size: 22px;
  font-weight: 500;
  line-height: 26.4px;
  letter-spacing: -0.66px;
  text-align: left;
`;

export const FinalSubtitle = styled.p`
  color: #546e7d;
  font-family: var(--font-sfpro);
  font-size: 15px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.3px;
`;

export const FinalTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  padding: 0 10px;
  margin-top: 4px;
`;
