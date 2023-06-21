import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  userName: null,
  userPassword: null,
  userToken: null,
  error: null as unknown,
  success: false,
  registerInfo: null,
};

export const fetchLogin = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const request = await axios.post(
        "http://localhost:8000/api/users/login",
        credentials
      );
      const response = await request.data.data;
      console.log(request)
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
        state.userName = action.payload.username;
        state.userPassword = action.payload.password;
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
      
  },
});

export const {  setUserToken } = authSlice.actions;
export default authSlice.reducer;
