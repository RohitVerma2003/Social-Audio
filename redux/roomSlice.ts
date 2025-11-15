import { roomData, rooms } from "@/constants/card";
import { createSlice } from "@reduxjs/toolkit";

export const roomSlice = createSlice({
  name: "room",
  initialState: {
    rooms: rooms,
    roomsData: roomData,
  },
  reducers: {},
});

export const {} = roomSlice.actions;
export default roomSlice.reducer;
