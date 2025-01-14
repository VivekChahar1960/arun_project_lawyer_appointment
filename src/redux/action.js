export const BOOK_APPOINTMENT = "BOOK_APPOINTMENT";

export const bookAppointment = (lawyerId, timeSlot) => ({
  type: BOOK_APPOINTMENT,
  payload: { lawyerId, timeSlot },
});
