import React, { useState } from "react";
import Dashboard from "../components/User/Dashboard";

const UserPage = () => {
  const [data, setData] = useState([
    {
      companyName: "Company A",
      lastCommunications: ["Email: 2024-12-15", "Call: 2024-12-20"],
      nextCommunication: "Email: 2024-12-30",
      isOverdue: false,
      isToday: true,
    },
    {
      companyName: "Company B",
      lastCommunications: ["LinkedIn: 2024-12-10", "Email: 2024-12-18"],
      nextCommunication: "Phone Call: 2024-12-25",
      isOverdue: true,
      isToday: false,
    },
  ]);

  const handleUpdateData = (updatedData) => {
    setData(updatedData);
  };

  return (
    <div>
      <Dashboard data={data} onUpdate={handleUpdateData} />
    </div>
  );
};

export default UserPage;
