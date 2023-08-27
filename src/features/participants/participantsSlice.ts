import { RootState } from "./../../app/store";
import { participantsApi } from "../../app/services/participants";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type IProfile = {
  username: string;
  email: string;
  address?: string;
  id?: number
};

interface IInitialState {
  participants: any | null;
  profiles: IProfile[];
}

const initialState: IInitialState = {
  participants: null,
  profiles: []
};

const slice = createSlice({
  name: "participantsApi",
  initialState: initialState,
  reducers: {
    setParticipants: (state, action: PayloadAction<IProfile[]>) => {
      state.profiles = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
      participantsApi.endpoints.getAllParticipants.matchFulfilled,
      (state, action) => {
        state.participants = action.payload;
      }
    );
  },
});

export default slice.reducer;

export const { setParticipants } = slice.actions;

export const selectParticipants = (state: RootState) => state.participants;