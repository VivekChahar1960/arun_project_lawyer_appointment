import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Card } from "antd";
import './HistoryPage.css'

const HistoryPage = () => {
  const lawyers = useSelector((state) => state.lawyers.lawyers);
  const navigate = useNavigate();
  console.log(lawyers);
  return (
    <div>
      <h1 className="heading">Appointment History</h1>
      <div className="lawyers">
        {lawyers.map((lawyer) => (
          <Card
            key={lawyer.id}
            title={lawyer.name}
            className="card"
          >
            <p>{lawyer.specialty}</p>
            <h4>Appointment History:</h4>
            {lawyer.appointments.length > 0 ? (
              <ul>
                {lawyer.appointments.map((appointment, index) => (
                  <li key={index}>Time: {appointment.time}</li>
                ))}
              </ul>
            ) : (
              <p>No appointments yet.</p>
            )}
          </Card>
        ))}
      </div>
      <button className ="historybutton" onClick={() => navigate("/")}>Home Page</button>
    </div>
  );
};

export default HistoryPage;
