import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("shop/fetchProdutcs", () => {
  return fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => json);
});

// Reducer
export const productsSlice = createSlice({
  name: "products",
  initialState: {
    productsList: [],
    loading: false,
    err: {},
  },
  reducers: {},
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.loading = true;
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.productsList = action.payload;
    },
    [fetchProducts.rejected]: (state, action) => {
      state.loading = false;
      state.err = action.payload;
    },
  },
});

// Actions

export default productsSlice.reducer;
