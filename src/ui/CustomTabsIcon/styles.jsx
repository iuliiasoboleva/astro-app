import styled from 'styled-components';

export const Wrap = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 2px;
  border-radius: 999px;
  background: #e2eaf1;

  width: max-content;
  justify-self: start;
  flex: 0 0 auto;
`;

export const Track = styled.div`
  position: absolute;
  inset: 0;
  border-radius: inherit;
`;

export const Indicator = styled.div`
  position: absolute;
  top: 2px;
  bottom: 2px;
  left: 0;
  border-radius: 50px;
  background: #fff;
  transition:
    transform 0.25s ease,
    width 0.25s ease;
  will-change: transform, width;
  pointer-events: none;
`;

export const TabBtn = styled.button`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  border: 1px solid transparent;
  border-radius: 50px;
  padding: 10px 20px;
  background: transparent;
  cursor: ${({ $disabled }) => ($disabled ? 'default' : 'pointer')};
  transition:
    color 0.15s ease,
    opacity 0.15s ease;

  font-family: var(--font-sfpro);
  font-weight: 500;
  font-size: 16px;
  line-height: 1.2;
  letter-spacing: -0.03em;

  color: ${({ $active }) => ($active ? '#1F3541' : '#8398A9')};
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};

  &:focus-visible {
    outline: 2px solid rgba(53, 115, 255, 0.5);
    outline-offset: 2px;
    border-radius: 50px;
  }
`;

export const TabIcon = styled.span`
  display: inline-flex;
  align-items: center;
`;

export const TabIconImg = styled.img`
  width: 13px;
  height: auto;
  object-fit: contain;
  opacity: ${({ $active }) => ($active ? 1 : 0.9)};
  filter: ${({ $active }) => ($active ? 'none' : 'grayscale(60%)')};
`;

export const TabLabel = styled.span`
  color: ${({ $active }) => ($active ? '#1F3541' : '#9AA9B6')};
`;
