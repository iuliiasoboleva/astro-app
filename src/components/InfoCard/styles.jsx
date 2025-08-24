import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

export const IconBox = styled.div`
  width: 76px;
  height: 76px;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const Title = styled.h3`
  color: #1f3541;
  text-align: center;
  font-family: var(--font-sfpro);
  font-size: 16px;
  font-weight: 500;
  line-height: 19.2px;
  letter-spacing: -0.32px;
  max-width: 290px;
`;

export const Subtitle = styled.p`
  font-family: var(--font-sfpro);
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: -0.3px;
  text-align: center;
  color: #546e7d;
`;
