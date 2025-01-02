import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Box, Typography } from "@mui/material";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Typography variant="h4" gutterBottom>
        Calender application for communication Tracking
      </Typography>
      <Box mt={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/user")}
          sx={{ marginRight: 2 }}
        >
          Go to User Page
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => navigate("/admin")}
        >
          Go to Admin Page
        </Button>
      </Box>
    </Box>
  );
};

export default HomePage;
