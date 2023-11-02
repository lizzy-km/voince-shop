import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  products:[],
  cart:[],
  scroll: false
};

const STORAGE_KEY = "Products";

//____________________________________________________storedItems_____________________Null_____//
const storedItems = Cookies.get(STORAGE_KEY)
  ? JSON.parse(Cookies.get(STORAGE_KEY))
  : null;

if (storedItems) {
  initialState.products = storedItems.products;
}

export const CartSlice = createSlice({
  name: "CartSlice",
  initialState,
  reducers: {
    allProducts: (state, { payload }) => {
      state.products = payload.products;
      Cookies.set(STORAGE_KEY, JSON.stringify(state));
    },
    scrollTop: (state, {payload}) => {
      state.scroll = payload.scroll
    }
    
  },
});

export const {
  allProducts,
  scrollTop
} = CartSlice.actions;
export default CartSlice.reducer;
