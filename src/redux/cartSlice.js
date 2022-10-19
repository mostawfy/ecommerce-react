import { createSlice } from "@reduxjs/toolkit";

// Reducer
export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartList: [],
    cartCount: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartCount = state.cartCount + 1;
      state.cartList.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cartCount = state.cartCount - 1;
      state.cartList = state.cartList.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

// Actions
export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
