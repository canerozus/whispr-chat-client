import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  userInfo: null,
  userToken: null,
  error: null as unknown,
  success: false,
};

export const fetchLogin = createAsyncThunk(
  "auth/login",
  async (credentials: {}, { rejectWithValue }) => {
    try {
      const request = await axios.post(
        "http://localhost:8000/api/users/login",
        credentials
      );
      const response = await request.data.data;
      localStorage.setItem("user", JSON.stringify(response));
      return response;
    } catch (error: any) {
      // return custom error message from backend if present
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    setUserToken: (state, action) => {
      state.userToken = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload;
      })
      .addCase(fetchLogin.rejected, (state, action: any) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  },
});

export const { setUserInfo, setUserToken } = authSlice.actions;
export default authSlice.reducer;
