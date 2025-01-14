import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { Form, Select, Button, notification } from "antd";
import { bookAppointment } from "../redux/reducers";

const LawyerDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const lawyer = useSelector((state) =>
    state.lawyers.lawyers.find((l) => l.id === parseInt(id))
  );
  const [selectedTime, setSelectedTime] = useState("");

  const handleBook = () => {
    if (!selectedTime) {
      notification.error({ message: "Please select a time slot!" });
      return;
    }

    dispatch(bookAppointment({ lawyerId: lawyer.id, timeSlot: selectedTime }));
    notification.success({ message: "Appointment booked successfully!" });
    navigate("/");
  };

  return (
    <div>
      <h2>{lawyer.name}</h2>
      <p>Specialty: {lawyer.specialty}</p>
      <p>Cost: ${lawyer.cost}</p>

      <Form>
        <Form.Item label="Available Slots">
          <Select
            value={selectedTime}
            onChange={setSelectedTime}
            options={lawyer.availability.map((time) => ({ value: time, label: time }))}
          />
        </Form.Item>
        <Button type="primary" onClick={handleBook}>
          Book Appointment
        </Button>
      </Form>
    </div>
  );
};

export default LawyerDetails;
