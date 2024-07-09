import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  idx: null,
  name: "",
  email: "",
  token: "",
  login_time: "",
  created_time: "",
  updated_time: "",
  grade: null,
  agree_marketing: null,
  loggedIn: false,
  status: "idle",
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser(state, action) {
      state.idx = action.payload.idx;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.login_time = action.payload.login_time;
      state.created_time = action.payload.created_time;
      state.updated_time = action.payload.updated_time;
      state.grade = action.payload.grade;
      state.agree_marketing = action.payload.agree_marketing;
      state.loggedIn = action.payload.loggedIn;
    },
  },
  extraReducers: (builder) => {},
});

export const { updateUser } = userSlice.actions;

export default userSlice.reducer;
