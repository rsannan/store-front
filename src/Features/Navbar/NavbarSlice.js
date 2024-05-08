import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sideBarOpen: false,
  amount: 10,
  activeLink: "Home",
  modalOpen: false,
};

const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    handleSideBarOpen: (state) => {
      state.sideBarOpen = !state.sideBarOpen;
    },
    handleModalOpen: (state) => {
      state.modalOpen = !state.modalOpen;
    },
    handleActiveLink: (state, { payload }) => {
      const link = payload;

      state.activeLink = link;
    },
  },
});

export default navbarSlice.reducer;
export const { handleSideBarOpen, handleActiveLink, handleModalOpen } =
  navbarSlice.actions;
