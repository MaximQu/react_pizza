import axios from "axios";
import { Pizza } from "./types";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPizzas = createAsyncThunk<Pizza[], Record<string, string>>(
  'pizza/fetchPizzasStatus',
  async (params /*Record<string, string>*/) => {
    const { sortBy, orderBy, category, search, currentPage } = params;
    const { data } = await axios.get/*<Pizza[]>*/(
       `https://644832677bb84f5a3e54c011.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${orderBy}${search}`,
    );
    return data /* as CartItem[]*/;
  },
);