import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Card, Button } from "antd";

const LawyerList = () => {
  const lawyers = useSelector((state) => state.lawyers);
  const navigate = useNavigate();

  return (
    <div>
      {lawyers.map((lawyer) => (
        <Card key={lawyer.id} title={lawyer.name} bordered>
          <p>Specialty: {lawyer.specialty}</p>
          <p>Cost per Appointment: ${lawyer.cost}</p>
          <Button onClick={() => navigate(`/booking/${lawyer.id}`)}>Book Now</Button>
        </Card>
      ))}
    </div>
  );
};

export default LawyerList;
