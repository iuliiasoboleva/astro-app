import { configureStore } from '@reduxjs/toolkit';

import astroStepsReducer from './astroStepsSlice';
import tarotSession from './tarotSessionSlice';

export const store = configureStore({
  reducer: {
    tarotSession,
    astroSteps: astroStepsReducer,
  },
});
