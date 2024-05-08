import { configureStore } from "@reduxjs/toolkit";
import navbarSlice from "./Features/Navbar/NavbarSlice";

const store = configureStore({
  reducer: {
    navbar: navbarSlice,
  },
});

export default store;
