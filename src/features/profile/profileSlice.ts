import { RootState } from "./../../app/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
  profile: IProfile | null;
  isRegister: boolean;
}

type IProfile = {
  username: string;
  email: string;
  address?: string;
};

const initialState: IInitialState = {
  profile: null,
  isRegister: false,
};

const slice = createSlice({
  name: "profileApi",
  initialState: initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<IProfile | null>) => {
      state.profile = action.payload;
    },
    setIsRegister: (state, action: PayloadAction<boolean>) => {
      state.isRegister = action.payload;
    },
  },
});

export default slice.reducer;

export const { setProfile } = slice.actions;
export const { setIsRegister } = slice.actions;

export const selectProfile = (state: RootState) => state.profile;
export const selectIsRegister = (state: RootState) => state.isRegister;
