import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedCategoryId: null,
  selectedCategoryTitle: '',
  form: {
    gender: null, // 'm' | 'f' | null
    birthDate: '',
    birthTime: '',
    birthPlace: '',
    name: '',
  },
};

const astroStepsSlice = createSlice({
  name: 'astroSteps',
  initialState,
  reducers: {
    setCategory(state, action) {
      state.selectedCategoryId = action.payload.id;
      state.selectedCategoryTitle = action.payload.title;
    },
    setGender(state, action) {
      state.form.gender = action.payload;
    },
    setBirthDate(state, action) {
      state.form.birthDate = action.payload;
    },
    setBirthTime(state, action) {
      state.form.birthTime = action.payload;
    },
    setBirthPlace(state, action) {
      state.form.birthPlace = action.payload;
    },
    setName(state, action) {
      state.form.name = action.payload;
    },
    resetAstroForm(state) {
      state.form = { ...initialState.form };
    },
  },
});

export const {
  setCategory,
  setGender,
  setBirthDate,
  setBirthTime,
  setBirthPlace,
  setName,
  resetAstroForm,
} = astroStepsSlice.actions;

export default astroStepsSlice.reducer;
