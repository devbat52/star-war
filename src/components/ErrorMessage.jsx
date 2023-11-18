import React from "react";
import { Box, Typography } from "@mui/material";

const ErrorMessage = ({ message }) => {
  return (
    <Box textAlign="center" mt={2}>
      <Typography variant="h6" color="error">
        An error occurred:
      </Typography>
      <Typography variant="body1" color="error" mt={1}>
        {message}
      </Typography>
    </Box>
  );
};

export default ErrorMessage;
