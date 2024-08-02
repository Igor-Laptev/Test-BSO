import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const login = createAsyncThunk(
  'auth/login',
  async (credentials: { username: string; password: string }) => {
    const response = await axios.post(
      'http://localhost:1337/auth/local',
      credentials
    );
    return response.data;
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async (credentials: {
    username: string;
    email: string;
    password: string;
  }) => {
    const response = await axios.post(
      'http://localhost:1337/auth/local/register',
      credentials
    );
    return response.data;
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload;
      });
  },
});

export default authSlice.reducer;
