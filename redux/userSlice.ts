import { createSlice } from "@reduxjs/toolkit";

type User = {
  first_name: string;
  last_name: string;
};

const initialState: User = {
  first_name: "Rohit",
  last_name: "Verma",
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
  },
});

export const { updateName } = userSlice.actions;
export default userSlice.reducer;
