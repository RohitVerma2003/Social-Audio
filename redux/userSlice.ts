import { createSlice } from "@reduxjs/toolkit";

type User = {
  first_name: string;
  last_name: string;
  username: string;
};

const initialState: User = {
  first_name: "Marian",
  last_name: "Marsh",
  username: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName: (state, action) => {
      const { firstName = null, lastName = null } = action.payload;

      if (firstName) state.first_name = firstName;
      if (lastName) state.last_name = lastName;
    },
    updateUsername: (state, action) => {
      const { username = "" } = action.payload;
      if (username) state.username = username;
    },
  },
});

export const { updateName, updateUsername } = userSlice.actions;
export default userSlice.reducer;
