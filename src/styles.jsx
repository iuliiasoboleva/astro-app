import styled from 'styled-components';

export const AppWrap = styled.div`
  max-width: 420px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  min-height: calc(var(--vh, 1vh) * 100);
  padding-top: env(safe-area-inset-top);
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
`;
export const TabSpacer = styled.div`
  height: calc(72px + env(safe-area-inset-bottom, 0px));
`;
