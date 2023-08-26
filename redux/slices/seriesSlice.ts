import { Series } from "@/types";
import { seriesApi } from "@/api/api";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export interface InitSeriesState {
    series: Series[];
}

const initialState: InitSeriesState = {
    series: [],
};

export const getSeries = createAsyncThunk("series/getSeries", async () => {
    const series = await seriesApi.getSeries();
    return series;

})

export const seriesSlice = createSlice({
    name: 'series',
    initialState,
    reducers: {
        setSeries: (state, action: PayloadAction<Series[]>) => {
        state.series = action.payload;
      },
    },
    extraReducers: (builder) => {
      builder.addCase(getSeries.fulfilled, (state, action) => {
        state.series = action.payload;
      });
    },
  });

  export const { setSeries } = seriesSlice.actions;
  export default seriesSlice.reducer;