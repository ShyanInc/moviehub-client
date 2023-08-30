import { Series } from '@/types/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface SeriesState {
  series: Series[];
}

const initialState: SeriesState = {
  series: [],
};

export const seriesSlice = createSlice({
  name: 'series',
  initialState,
  reducers: {
    setSeries: (state, action: PayloadAction<Series[]>) => {
      state.series = action.payload;
    },
  },
});

export const { setSeries } = seriesSlice.actions;
export default seriesSlice.reducer;
