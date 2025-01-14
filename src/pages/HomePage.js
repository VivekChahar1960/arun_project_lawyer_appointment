import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Card, Button } from "antd";
import './HomePage.css'

const HomePage = () => {
  const lawyers = useSelector((state) => state.lawyers.lawyers);
  const navigate = useNavigate();

  return (
    <div className="homepage">
      <h1 className="heading">Lawyer Appointment Management Web-Application</h1>
      <div className="lawyers">
        {lawyers.map((lawyer) => (
          <Card
            key={lawyer.id}
            title={lawyer.name}
            className="card"
          >
            <p>{lawyer.specialty}</p>
            <p>Cost per Appointment: ₹{lawyer.cost}</p>
            <Button
              type="primary"
              className="button"
              onClick={() => navigate(`/booking/${lawyer.id}`)}
            >
              Book Appointment
            </Button>
            
          </Card>
          
        ))}
      </div>
      <button className ="historybutton" onClick={() => navigate("/history")}>History</button>
    </div>
  );
};

export default HomePage;
