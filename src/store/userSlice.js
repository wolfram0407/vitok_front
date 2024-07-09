import { createSlice } from '@reduxjs/toolkit';

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

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
