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

export const Price = styled.div`
  color: #4f93c9;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 5px;

  img {
    width: 16px;
    height: 16px;
  }
`;

export const TitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 4px;
  justify-content: center;
  align-items: center;
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
  white-space: pre-line;
  max-width: 320px;
`;

export const ButtonBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;
