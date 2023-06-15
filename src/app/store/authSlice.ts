import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUserInfo = createAsyncThunk(
  "auth/fetchUserInfo",
  async (userId, thunkAPI) => {
    const response = await fetch(`http://localhost:8000/api/users/login`);
    const data = await response.json();
    return data;
  }
);

const initialState = {
  loading: false,
  userInfo: {},
  userToken: null,
  error: null as unknown,
  success: false,
};

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
      .addCase(fetchUserInfo.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload;
      })
      .addCase(fetchUserInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setUserInfo, setUserToken } = authSlice.actions;
export default authSlice.reducer;
