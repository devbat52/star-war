// PlanetCard.jsx
import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const PlanetCard = ({ planet, onClick }) => {
  // Check if planet is null or undefined
  if (!planet) {
    return null; // or display a default or loading state
  }

  const { name, imageUrl } = planet;

  return (
    <Card onClick={() => onClick(planet)} style={{ cursor: 'pointer' }}>
      <CardMedia component="img" height="140" image={imageUrl} alt={name} />
      <CardContent>
        <Typography variant="h6" component="div">
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PlanetCard;
