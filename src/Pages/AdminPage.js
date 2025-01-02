import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import CompanyManagement from "../components/Admin/CompanyManagement";
import CommunicationMethods from "../components/Admin/Communicationmethods";

const AdminPage = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <h1>Admin Panel</h1>
      <Tabs value={tabIndex} onChange={handleTabChange}>
        <Tab label="Company Management" />
        <Tab label="Communication Methods" />
      </Tabs>
      {tabIndex === 0 && <CompanyManagement />}
      {tabIndex === 1 && <CommunicationMethods />}
    </Box>
  );
};

export default AdminPage;
