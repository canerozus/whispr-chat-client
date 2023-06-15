import { configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import authReducer from "./authSlice";
import { useDispatch } from "react-redux";

const middleware = [thunk, logger];

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
});

export type RootState = ReturnType<typeof store.getState>
export default store;
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch;
