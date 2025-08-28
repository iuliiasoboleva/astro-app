import styled, { css } from 'styled-components';

export const Card = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  max-width: 175px;
  height: 226px;

  padding: 16px;
  border-radius: 17px;
  border: 3px solid #ffffff;
  overflow: hidden;
  text-align: left;

  background:
    url(${(p) => p.$bg}) bottom 10px right 0 / 90% no-repeat,
    linear-gradient(135deg, #f6fbff 0%, #f9f9f9 25%, #e2f0fa 55%, #91bde2 100%);

  box-shadow: 0 6px 20px rgba(24, 96, 149, 0.12);
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  user-select: none;

  transition:
    transform 0.15s ease,
    filter 0.15s ease,
    box-shadow 0.2s ease;

  &:hover:not(:disabled) {
    box-shadow: 0 10px 28px rgba(24, 96, 149, 0.18);
  }
  &:active:not(:disabled) {
    transform: translateY(1px);
  }
`;

export const Title = styled.div`
  position: relative;
  z-index: 1;

  font-family: var(--font-sfpro);
  font-weight: 600;
  font-size: 16px;
  line-height: 1.2;
  letter-spacing: -0.03em;

  white-space: pre-line;
`;

export const MetaRow = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 8px;
  margin: 8px 0 4px;
`;

export const MetaItem = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;

  font-family: var(--font-sfpro);
  font-weight: 500;
  font-size: 12px;
  color: #376f90;

  img {
    flex: 0 0 auto;
    filter: drop-shadow(0 0 0 rgba(0, 0, 0, 0));
  }
`;

export const BottomBlock = styled.div`
  width: 100%;
  min-width: 0;

  display: grid;
  grid-template-columns: 1fr auto;
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
  padding: 6px 10px;
  border-radius: 35px;

  font-family: var(--font-sfpro);
  font-weight: 600;
  font-size: 12px;
  letter-spacing: -0.03em;

  background: #ffffff;

  img {
    display: block;
  }
`;

export const CornerBadge = styled.div`
  justify-self: end;
  z-index: 2;

  width: 28px;
  height: 28px;
  padding: 4px;
  border-radius: 35px;
  background: #ffffff;

  display: flex;
  align-items: center;
  justify-content: center;

  ${({ $hidden }) =>
    $hidden &&
    css`
      display: none;
    `}
`;
