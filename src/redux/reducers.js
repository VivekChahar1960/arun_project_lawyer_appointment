import { createSlice } from "@reduxjs/toolkit";
import { lawyers } from "../mock/data";
import dayjs from "dayjs";
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
    resetAppointments: (state) => {
      const today = dayjs();

      state.lawyers = lawyers.map((lawyer) => ({
        ...lawyer,
        appointments: lawyer.appointments.filter(
          (appointment) => dayjs(appointment.time).isAfter(today)
        ),
        availability: [...lawyer.availability], // Reset availability
      }));
    },
  },
});

export const { bookAppointment ,resetAppointments } = lawyerSlice.actions;
export default lawyerSlice.reducer;
