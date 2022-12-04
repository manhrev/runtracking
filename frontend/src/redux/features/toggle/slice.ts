import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../reducers";

interface ToggleState {
  isRightMenuShow: boolean;
  isNightMode: boolean;
}

const initialState: ToggleState = {
  isRightMenuShow: false,
  isNightMode: false,
};

const slice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    showRightMenu: (state: ToggleState) => {
      state.isRightMenuShow = true;
    },
    hideRightMenu: (state: ToggleState) => {
      state.isRightMenuShow = false;
    },
    switchNightMode: (state: ToggleState) => {
      state.isNightMode = !state.isNightMode;
    },
  },
});

export const { showRightMenu, hideRightMenu, switchNightMode } = slice.actions;

export const selectToggleSlice = (state: RootState) => state.toggle;

export default slice.reducer;
