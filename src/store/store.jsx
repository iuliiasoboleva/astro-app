import { configureStore } from '@reduxjs/toolkit';

import tarotSession from './tarotSessionSlice';

export const store = configureStore({
  reducer: {
    tarotSession,
  },
});
