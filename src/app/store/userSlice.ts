import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Örnek bir async thunk eylemi
export const fetchUserInfo = createAsyncThunk(
  "auth/fetchUserInfo",
  async (userId, thunkAPI) => {
    const response = await fetch(`https://example.com/api/users/${userId}`);
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
    // Kullanıcı tanımlı eylemleri buraya ekleyebilirsiniz
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    setUserToken: (state, action) => {
      state.userToken = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Async thunk eylemlerine yanıt olarak state güncellemelerini burada tanımlayabilirsiniz
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
