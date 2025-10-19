import styled from 'styled-components';

const TAB_BAR_HEIGHT = 84;

export const AppWrap = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  min-height: 100svh;
  @supports (min-height: 100dvh) {
    min-height: 100dvh;
  }
`;

export const Content = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;

  overflow: auto;
  -webkit-overflow-scrolling: touch;

  padding-bottom: calc(${TAB_BAR_HEIGHT}px + env(safe-area-inset-bottom, 0px));
`;
