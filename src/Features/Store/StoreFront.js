import { createSlice } from "@reduxjs/toolkit";
import { phones, headPhones, laptops } from "../../data";
const initialState = {
  phones: phones,
  laptops: laptops,
  headphones: headPhones,
  cart: [],
  amount: 0,
  total: 0,
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
  },
});

export default storeFrontSlice.reducer;
export const { calculateTotals, addToCart, increaseAmount, decreaseAmount } =
  storeFrontSlice.actions;
