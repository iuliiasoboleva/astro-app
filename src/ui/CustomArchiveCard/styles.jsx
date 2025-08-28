import styled from 'styled-components';

export const Card = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 175px;
  height: 226px;

  padding: 15px;
  border-radius: 17px;
  border: 3px solid #ffffff;
  overflow: hidden;
  text-align: left;

  background:
    url(${(p) => p.$bg}) bottom 0 right -30px / 90% no-repeat,
    linear-gradient(135deg, #f6fbff 0%, #f9f9f9 25%, #e2f0fa 55%, #91bde2 100%);

  cursor: pointer;
  user-select: none;
`;

export const Title = styled.div`
  position: relative;
  z-index: 1;
  margin-bottom: 10px;
  color: #095883;
  font-family: var(--font-sfpro);
  font-size: 16px;
  font-weight: 500;
  line-height: 19.2px;
  letter-spacing: -0.48px;

  white-space: pre-line;
`;

export const MetaRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const MetaItem = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: #437693;
  font-family: var(--font-sfpro);
  font-size: 14px;
  font-weight: 400;
  line-height: 16.8px;
  letter-spacing: -0.42px;

  img {
    width: 12px;
    height: 12px;
  }
`;

export const BottomBlock = styled.div`
  width: 100%;
  min-width: 0;
  margin-top: auto;
  align-items: center;
  column-gap: 8px;

  > * {
    min-width: 0;
  }
`;

export const Pill = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  width: fit-content;
  min-height: 28px;
  padding: 4px 8px;
  border-radius: 35px;
  color: #4f93c9;
  text-align: center;
  font-family: var(--font-sfpro);
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 14.4px;
  letter-spacing: -0.36px;
  background: #ffffff;

  img {
    width: 12px;
    height: 12px;
  }
`;
