import { createSlice , createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    email: '',
    loggedIn: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.loggedIn = true;
    },
    clearUser: (state) => {
      state.name = '';
      state.email = '';
      state.loggedIn = false;
    },
  },
});

// 비동기 로그인 액션 생성
export const loginUser = createAsyncThunk(
  'user/loginUser',
  async ({ id, password }, thunkAPI) => {
    try {
      const response = await axios.post('/api/login', { id, password });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
