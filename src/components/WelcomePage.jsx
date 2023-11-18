import React from "react";
import { Box, Typography, Button } from "@mui/material";

const WelcomePage = ({ onGetStarted }) => {
  return (
    <Box textAlign="center">
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Welcome to the Star Wars Dashboard
      </Typography>
      <Typography variant="body1" mb={4} sx={{ color: "white" }}>
        Explore information about the Star Wars universe.
      </Typography>
    </Box>
  );
};

export default WelcomePage;
