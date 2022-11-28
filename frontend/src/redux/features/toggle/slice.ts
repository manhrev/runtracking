import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../reducers";

interface ToggleState {
  isRightMenuShow: boolean;
}

const initialState: ToggleState = {
  isRightMenuShow: false,
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
  },
});

export const { showRightMenu, hideRightMenu } = slice.actions;

export const selectToggleSlice = (state: RootState) => state.toggle;

export default slice.reducer;
