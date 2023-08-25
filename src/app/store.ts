import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
// import auth from "../features/auth/authSlice";
// import employees from "../features/employees/employeesSlice";
import { api } from "./services/api";
import participants from '../features/participants/participantsSlice'
import profile from '../features/profile/profileSlice'

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    participants,
    profile
  },
  middleware: (getDefaultMiddleWare) => {
    return getDefaultMiddleWare().concat(api.middleware)
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;





// import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

// export const store = configureStore({
//   reducer: {
    
//   },
// });

// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;
