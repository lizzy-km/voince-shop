import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  products: [],
  cart: [],
  scroll: true,
  catName: "",
  filterProducts: [],
  scrollT: [],
  toLeft: 0,
  category: [],
  history: [],
};

export const CartSlice = createSlice({
  name: "CartSlice",
  initialState,
  reducers: {
    allProducts: (state, { payload }) => {
      state.products = payload.products;
    },
    scrollTop: (state, { payload }) => {
      state.scroll = payload.scroll;
    },
    setCatName: (state, { payload }) => {
      state.catName = payload.catName;
      Cookies.set("catName", state.catName);
    },
    filterProducts: (state, { payload }) => {
      const name = Cookies?.get("catName");
      state.filterProducts = state?.products.filter(
        (data) => data.categories[0].name === name
      );
    },
    setScrollT: (state, { payload }) => {
      state.scrollT = [...state.scrollT, payload];
    },
    setLeft: (state, { payload }) => {
      state.toLeft += payload;
    },
    addCategory: (state, { payload }) => {
      state.category = payload.category;
    },
    addHistory: (state, { payload }) => {
      state.history = [...state.history, payload.history]
        // state.history.filter((his) => his.id !== payload.id)),
        Cookies.set("history", JSON.stringify(state.history));
    },
    delHistory: (state, { payload }) => {
      state.history =state.history.filter(dt => dt.id !== payload.id)
        // state.history.filter((his) => his.id !== payload.id)),
        Cookies.set("history", JSON.stringify(state.history));
    },
  },
});

export const {
  allProducts,
  scrollTop,
  setCatName,
  filterProducts,
  setScrollT,
  setLeft,
  addCategory,
  addHistory,
  delHistory
} = CartSlice.actions;
export default CartSlice.reducer;
