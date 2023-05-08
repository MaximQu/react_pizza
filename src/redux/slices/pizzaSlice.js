import axios from 'axios'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchPizzas = createAsyncThunk('pizza/fetchPizzasStatus', async (params) => {
  const { sortBy, orderBy, category, search, currentPage } = params;
  const { data } = await axios.get(
    `https://644832677bb84f5a3e54c011.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${orderBy}${search}`
  );
  return data;
})

const initialState = {
  items: [],
  status: 'loading', // loading | success | error
}

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchPizzas.pending]: (state) => {
      state.status = 'loading';
      state.items = [];
    },
    [fetchPizzas.fulfilled]: (state, action) => {
      state.items = action.payload
      state.status = 'success'
    },
    [fetchPizzas.rejected]: (state) => {
      state.status = 'error'
      state.items = []
    },
  }
})
export const selectPizzaData = (state) => state.pizza

export const { setItems } = pizzaSlice.actions

export default pizzaSlice.reducer
