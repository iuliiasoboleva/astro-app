import styled from 'styled-components';

export const Wrapper = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  border-radius: 40px;
  border: 1px solid #546e7d;
  padding: 4px 6px;
  background: transparent;
  color: #546e7d;
  font-size: 12px;
  font-weight: 500;
  line-height: 14.4px;
  letter-spacing: -0.36px;
  font-family: var(--font-sfpro);
  transition: background 0.2s ease;
  margin: 0 10px;

  img,
  svg {
    width: 12px;
    height: 12px;
    flex-shrink: 0;
  }
`;

export const IconBox = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.span`
  white-space: nowrap;
`;
