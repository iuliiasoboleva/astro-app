import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// имитация API: отправить финальные данные на бэк
export const submitTarotSession = createAsyncThunk(
  'tarotSession/submit',
  async (_, { getState }) => {
    const { tarotSession } = getState();
    const payload = {
      categoryId: tarotSession.categoryId,
      requiredCount: tarotSession.requiredCount,
      picked: tarotSession.picked,
      question: tarotSession.question,
    };
    // TODO: замени на реальный fetch
    await new Promise((r) => setTimeout(r, 5000));
    return { ok: true, sessionId: Date.now(), payload };
  },
);

const initialState = {
  categoryId: null,
  requiredCount: null,
  picked: [],
  question: '',
  status: 'idle', // idle | collecting | sending | done | error
  error: null,
};

const tarotSessionSlice = createSlice({
  name: 'tarotSession',
  initialState,
  reducers: {
    startSession(state, action) {
      const { categoryId, requiredCount, picked } = action.payload;
      state.categoryId = String(categoryId);
      state.requiredCount = requiredCount ?? null;
      state.picked = Array.isArray(picked) ? picked : [];
      state.question = '';
      state.status = 'collecting';
      state.error = null;
    },
    setQuestion(state, action) {
      state.question = action.payload ?? '';
    },
    addPick(state, action) {
      const id = action.payload;
      if (!state.requiredCount || state.picked.length >= state.requiredCount) return;
      if (!state.picked.includes(id)) state.picked.push(id);
    },
    removeLastPick(state) {
      state.picked.pop();
    },
    resetSession() {
      return initialState;
    },
    setRequiredCount(state, action) {
      state.requiredCount = action.payload;
    },
    setCategoryId(state, action) {
      state.categoryId = String(action.payload ?? '');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitTarotSession.pending, (state) => {
        state.status = 'sending';
        state.error = null;
      })
      .addCase(submitTarotSession.fulfilled, (state, action) => {
        state.status = 'done';
      })
      .addCase(submitTarotSession.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error?.message || 'Ошибка отправки';
      });
  },
});

export const {
  startSession,
  setQuestion,
  addPick,
  removeLastPick,
  resetSession,
  setRequiredCount,
  setCategoryId,
} = tarotSessionSlice.actions;

export default tarotSessionSlice.reducer;

export const selectTarot = (state) => state.tarotSession;
export const selectAllChosen = (state) => {
  const { requiredCount, picked } = state.tarotSession;
  return requiredCount && picked.length >= requiredCount;
};
