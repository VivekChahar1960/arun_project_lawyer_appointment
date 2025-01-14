import { createSlice } from "@reduxjs/toolkit";
import { lawyers } from "../mock/data";

const initialState = {
  lawyers: [...lawyers]
};

const lawyerSlice = createSlice({
  name: "lawyers",
  initialState,
  reducers: {
    bookAppointment: (state, action) => {
      const { lawyerId, timeSlot } = action.payload;
      const lawyer = state.lawyers.find((l) => l.id === lawyerId);
      if (lawyer) {
        // Remove the time slot from availability
        lawyer.availability = lawyer.availability.filter(
          (slot) => slot !== timeSlot
        );
        // Add the time slot to appointments
        lawyer.appointments.push({ time: timeSlot });
      }
    },
  },
});

export const { bookAppointment } = lawyerSlice.actions;
export default lawyerSlice.reducer;
