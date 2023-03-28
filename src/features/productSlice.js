import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GET_ALL_CATEGORIES, GET_ALL_PRODUCTS } from "../constants";

const initialState = {
  isLoading: false,
  isSuccess: false,
  error: {},
  products: [],
  categories: [],
  selectedCategories: [],
};

export const fetchAllProducts = createAsyncThunk(
  `product/fetchAll`,
  async () => {
    try {
      const resp = await fetch(GET_ALL_PRODUCTS);
      const data = await resp.json();
      return data;
    } catch (error) {
      return error;
    }
  }
);

export const fetchAllCategories = createAsyncThunk(
  `product/fetchAllCategories`,
  async () => {
    try {
      const resp = await fetch(GET_ALL_CATEGORIES);
      const data = await resp.json();
      return data;
    } catch (error) {
      return error;
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    filterByCategory: (state, action) => {
      const category = action.payload;
      const idx = state.selectedCategories.indexOf(category);
      if (idx === -1) state.selectedCategories.push(category);
      else state.selectedCategories.splice(idx, 1);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(fetchAllProducts.rejected, (state) => {
        state.isLoading = false;
        state.error = {};
      })
      .addCase(fetchAllCategories.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchAllCategories.fulfilled, (state, action) => {
        state.categories = action?.payload;
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(fetchAllCategories.rejected, (state) => {
        state.isLoading = false;
        state.error = {};
      });
  },
});

export const { filterByCategory } = productSlice.actions;

export default productSlice.reducer;
