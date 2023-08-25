import { RootState } from "./../../app/store";
import { participantsApi } from "../../app/services/participants";
import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  participants: any | null;
}

const initialState: IInitialState = {
  participants: null,
};

const slice = createSlice({
  name: "participantsApi",
  initialState: initialState,
  reducers: {
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

export const selectParticipants = (state: RootState) => state.participants;