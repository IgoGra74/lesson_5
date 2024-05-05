import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserInfo } from 'service/opencagedataApi';

export const getBaseCurrency = createAsyncThunk(
  'currency/getBaseCurrency',
  async crd => {
    const data = await getUserInfo(crd);
    const currency = data.results[0].annotations.currency.iso_code;
    return currency;
  },
);
