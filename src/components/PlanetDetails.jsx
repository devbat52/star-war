// PlanetDetails.jsx
import React from 'react';
import { Drawer, Typography } from '@mui/material';

const PlanetDetails = ({ isOpen, onClose, planet }) => {
  // Check if planet is null or undefined
  if (!planet) {
    return null;
  }

  const { name, imageUrl, climate, gravity } = planet;

  return (
    <Drawer anchor="right" open={isOpen} onClose={onClose}>
      <div style={{ padding: '16px' }}>
        <Typography variant="h5">{name}</Typography>
        <img src={imageUrl} alt={name} style={{ width: '100%', marginTop: '8px' }} />
        <Typography variant="body1">Climate: {climate}</Typography>
        <Typography variant="body1">Gravity: {gravity}</Typography>
        {/* Add other details as needed */}
      </div>
    </Drawer>
  );
};

export default PlanetDetails;
