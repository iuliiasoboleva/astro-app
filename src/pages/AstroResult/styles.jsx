import styled from 'styled-components';

export const MainTitle = styled.h1`
  color: #1f3541;
  font-family: var(--font-sfpro);
  font-size: 22px;
  font-weight: 500;
  line-height: 26.4px;
  letter-spacing: -0.66px;
  text-align: left;
`;

export const Subtitle = styled.p`
  color: #546e7d;
  font-family: var(--font-sfpro);
  font-size: 15px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.3px;
`;

export const ButtonBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 8px;
  width: 100%;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  padding: 0 10px;
`;

export const ResumeWrapper = styled.div`
  padding: 30px;
  border-radius: 25px;
  border: 1px solid #f2f4f6;
  background: #fff;
  margin-bottom: 10px;
  margin-top: 40px;
`;

export const Title = styled.h3`
  color: #1f3541;
  font-family: var(--font-sfpro);
  font-size: 18px;
  font-weight: 500;
  line-height: 21.6px;
  letter-spacing: -0.54px;
  padding: 0 20px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 20px 0;
`;

export const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 11px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 12px;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  min-width: 0;
  gap: 6px;
`;

export const IconWrap = styled.span`
  width: 20px;
  height: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  opacity: 0.6;

  img {
    width: 100%;
    height: 100%;
    display: block;
  }
`;

export const Label = styled.span`
  color: #1f3541;
  font-size: 16px;
  font-weight: 500;
`;

export const Right = styled.div`
  text-align: right;
  min-width: 0;
`;

export const Value = styled.span`
  display: inline-block;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #546e7d;
  font-size: 16px;
  font-weight: 400;
`;

export const TopBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  align-items: center;
  gap: 10px;
  border-radius: 20px;
  border: 1px solid #f2f4f6;
  background: #fff;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 14px;
  align-self: stretch;
  border-radius: 20px;
  border: 1px solid #e2eaf1;
  background: #fff;
`;

export const InfoTitle = styled.h3`
  color: #1f3541;
  font-size: 16px;
  font-weight: 600;
`;

export const InfoSubtitle = styled.p`
  color: #546e7d;
  font-size: 12px;
  font-weight: 400;
  line-height: 16.8px;
`;

export const QuestionBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  gap: 10px;
  border-radius: 15px;
  border: 1px solid #e2eaf1;
  background: #fff;
`;

export const QuestionTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: #1f3541;
  font-family: var(--font-sfpro);
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 14.4px;
  letter-spacing: -0.36px;
`;

export const QuestionText = styled.p`
  color: #546e7d;
  font-family: var(--font-sfpro);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16.8px;
  letter-spacing: -0.42px;
`;
