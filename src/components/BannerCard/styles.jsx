import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  z-index: 9998;
`;

export const ModalWrapper = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  z-index: 9999;
  padding: 15px;
`;

export const Wrapper = styled.div`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  background: ${({ $bg }) => `url(${$bg}) center/cover no-repeat`};
  padding: 16px;
  min-height: 160px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  cursor: pointer;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ $color }) => $color};
`;

export const Title = styled.h3`
  color: ${({ $color }) => $color};
  font-family: var(--font-sfpro);
  font-size: 18px;
  font-weight: 500;
  line-height: 21.6px;
  letter-spacing: -0.36px;
  white-space: pre-line;
  margin-bottom: 8px;
`;

export const Text = styled.p`
  white-space: pre-line;
  color: ${({ $color }) => $color};
  font-family: var(--font-sfpro);
  font-size: 15px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.3px;
`;

export const Button = styled.button`
  align-self: flex-start;
  border-radius: 35px;
  padding: 4px 8px;
  border: 1px solid ${({ $color }) => $color};
  text-align: center;
  font-family: var(--font-sfpro);
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.36px;
  color: ${({ $color }) => $color};
  cursor: pointer;
  transition: 0.2s;
  margin-top: auto;
`;
