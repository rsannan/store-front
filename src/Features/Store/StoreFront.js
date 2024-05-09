import { createSlice } from "@reduxjs/toolkit";
import { phones, headPhones, laptops } from "../../data";
const initialState = {
  phones: phones,
  laptops: laptops,
  headphones: headPhones,
  cart: [],
  amount: 0,
  total: 0,
  trends: {},
  trendsLoading: true,
};

const storeFrontSlice = createSlice({
  name: "storeFront",
  initialState,
  reducers: {
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;

      state.cart.forEach((item) => {
        amount += item.cartAmount;
        total += item.cartAmount * item.price;
      });

      state.amount = amount;
      state.total = total;
    },
    trendingList: (state) => {
      const itemIndex = Math.floor(Math.random() * 10);
      const itemIndex1 = Math.floor(Math.random() * 10);
      const trendPhone = state.phones.filter(
        (phone, index) => index == itemIndex || index == itemIndex1
      );
      const trendLaptop = state.laptops.filter(
        (phone, index) => index == itemIndex || index == itemIndex1
      );
      const trendHeadPhones = state.headphones.filter(
        (phone, index) => index == itemIndex || index == itemIndex1
      );
      state.trends = { trendHeadPhones, trendLaptop, trendPhone };
      state.trendsLoading = false;
    },
    addToCart: (state, { payload }) => {
      const item = state.cart.find((item) => item.name == payload.name);
      if (item) {
        item.cartAmount += payload.cartAmount;
      } else {
        state.cart.push(payload);
      }
    },
    increaseAmount: (state, { payload }) => {
      const item = state.cart.find((item) => item.name == payload);
      item.cartAmount += 1;
    },
    decreaseAmount: (state, { payload }) => {
      const item = state.cart.find((item) => item.name == payload);
      if (item.cartAmount > 1) {
        item.cartAmount -= 1;
      } else {
        state.cart = state.cart.filter((cartItem) => cartItem !== item);
      }
    },
    clearCart: (state) => {
      state.cart = [];
      state.amount = 0;
      state.total = 0;
    },
  },
});

export default storeFrontSlice.reducer;
export const {
  calculateTotals,
  addToCart,
  increaseAmount,
  decreaseAmount,
  clearCart,
  trendingList,
} = storeFrontSlice.actions;
