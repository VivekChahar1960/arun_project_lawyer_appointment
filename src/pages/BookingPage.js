import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { notification } from "antd";
import { bookAppointment } from "../redux/reducers";
import './BookingPage.css'

const BookingPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const lawyer = useSelector((state) =>
    state.lawyers.lawyers.find((l) => l.id === parseInt(id))
  );
  const [selectedTime, setSelectedTime] = useState("");

  const handleBook = () => {
    if (!selectedTime) {
      notification.error({
        message: "Error",
        description: "Please select a time slot!",
      });
      return;
    }

    dispatch(bookAppointment({ lawyerId: lawyer.id, timeSlot: selectedTime }));
    notification.success({
      message: "Success",
      description: `Appointment booked successfully for ${selectedTime}.`,
    });
    navigate("/");
  };

  return (
    <div className="booking">
      <h2 className="heading">Book Appointment for {lawyer.name}</h2>
      <div className="lawyer_details_main">

      
      <p className="lawyer_details">{lawyer.specialty}</p>
      <p className="lawyer_details">Cost: ₹{lawyer.cost}</p>

      <form className="form">
        <div>
          <label htmlFor="time-slot">Available Slots: </label>
          <select
            id="time-slot"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
          >
            <option value="" disabled>
              Select a time slot
            </option>
            {lawyer.availability.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
        <button
          className="backbutton"
          type="button"
          onClick={handleBook}
        >
          Book Appointment
        </button>
      </form>
      </div>
    </div>
  );
};

export default BookingPage;
