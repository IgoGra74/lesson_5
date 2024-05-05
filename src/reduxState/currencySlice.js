import { createSlice } from '@reduxjs/toolkit';
import { getBaseCurrency } from './operation';

const INITIAL_STATE = {
  baseCurrency: '',
};

const currencySlice = createSlice({
  name: 'currency',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getBaseCurrency.fulfilled, (state, action) => {
      state.baseCurrency = action.payload;
    });
  },
});
const currencyReducer = currencySlice.reducer;
export default currencyReducer;
