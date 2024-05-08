import { configureStore } from "@reduxjs/toolkit";
import navbarSlice from "./Features/Navbar/NavbarSlice";
import StoreFrontSlice from "./Features/Store/StoreFront";

const store = configureStore({
  reducer: {
    navbar: navbarSlice,
    storeFront: StoreFrontSlice,
  },
});

export default store;
