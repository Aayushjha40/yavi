import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch profile data
export const fetchProfile = createAsyncThunk('profile/fetchProfile', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get('/api/user/profile', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

// Async thunk to update profile data
export const updateProfile = createAsyncThunk('profile/updateProfile', async (profileData, { rejectWithValue }) => {
  try {
    const response = await axios.put('/api/user/profile', profileData, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.user;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default profileSlice.reducer;
