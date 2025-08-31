import styled, { keyframes } from 'styled-components';

const slideDown = keyframes`
  from { transform: translateY(-10px); opacity: 0 }
  to   { transform: translateY(0);     opacity: 1 }
`;

export const Container = styled.div`
  position: fixed;
  top: env(safe-area-inset-top, 8px);
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  z-index: 9999;
  pointer-events: none;
`;

export const Item = styled.div`
  pointer-events: auto;
  display: inline-flex;
  margin-top: 7px;
  align-items: center;
  gap: 10px;
  min-height: 36px;
  padding: 10px;
  border-radius: 6px;
  background: #fff;
  box-shadow:
    0 43px 80px 0 rgba(0, 0, 0, 0.02),
    0 27.87px 46.852px 0 rgba(0, 0, 0, 0.02),
    0 16.563px 25.481px 0 rgba(0, 0, 0, 0.01),
    0 8.6px 13px 0 rgba(0, 0, 0, 0.01),
    0 3.504px 6.519px 0 rgba(0, 0, 0, 0.01),
    0 0.796px 3.148px 0 rgba(0, 0, 0, 0);
  border: 1px solid #e9eef3;
  animation: ${slideDown} 0.16s ease;
`;

export const IconWrap = styled.span`
  width: 18px;
  height: 18px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.span`
  color: #1f3541;
  font-size: 12px;
  font-weight: 500;
  line-height: 15.6px;
`;

const spin = keyframes`to { transform: rotate(360deg); }`;
export const Spinner = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid #3b82f6;
  border-left-color: transparent;
  animation: ${spin} 0.8s linear infinite;
`;
