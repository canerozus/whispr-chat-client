import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  success: null as any,
  userToken: null,
  error: null as unknown,
  registerInfo: null,
};

export const fetchLogin = createAsyncThunk(
  "auth/login",
  async (credentials: {}, { rejectWithValue }) => {
    try {
      const request = await axios.post(
        "http://localhost:8000/api/users/login",
        credentials
      );
      const response = await request.data;
      localStorage.setItem("user", JSON.stringify(response));
      return response;
    } catch (error: any) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error);
      }
    }
  }
);
export const fetchLogout = createAsyncThunk(
  "auth/logout",
  async(credentials: string) => {
    try {
      const request = await axios.post(
        "http://localhost:8000/api/users/logout",
        credentials
      );
      const response = await request.data.data;
      return response;
    } catch (error: any) {
      console.log(error?.message)
    }
  }
)
export const fetchRegister = createAsyncThunk(
  "auth/register",
  async (credentials: {}, { rejectWithValue }) => {
    try {
      const request = await axios.post(
        "http://localhost:8000/api/users/register",
        credentials
      );
      const response = await request.data.data;
      return response;
    } catch (error: any) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error);
      }
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserToken: (state, action) => {
      state.userToken = action.payload;
    },
  },
  extraReducers: (builder) => {
    //LOGIN
    builder
      .addCase(fetchLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload;
      })
      .addCase(fetchLogin.rejected, (state, action: any) => {
        state.loading = false;
        state.error = action.payload.message;
      });
      

    //REGISTER
    builder
      .addCase(fetchRegister.pending, (state) => {
        state.loading = false;
      })
      .addCase(fetchRegister.fulfilled, (state, action) => {
        state.loading = false;
        state.registerInfo = action.payload;
      })
      .addCase(fetchRegister.rejected, (state, action: any) => {
        state.loading = false;
        state.error = action.payload.message;
      });

      //LOGOUT
      builder
      .addCase(fetchLogout.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchLogout.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload;
      })
      .addCase(fetchLogout.rejected, (state, action: any) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  },
});

export const { setUserToken } = authSlice.actions;
export default authSlice.reducer;
