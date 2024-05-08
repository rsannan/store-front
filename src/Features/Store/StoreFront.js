import { createSlice } from "@reduxjs/toolkit";
import { phones, headPhones, laptops } from "../../data";
const initialState = {
  phones: phones,
  laptops: laptops,
  headphones: headPhones,
};

const storeFrontSlice = createSlice({
  name: "storeFront",
  initialState,
  reducers: {},
});

export default storeFrontSlice.reducer;
