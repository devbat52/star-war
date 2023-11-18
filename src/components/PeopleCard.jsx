// PeopleCard.jsx
import React, { useState } from 'react';
import { Card, CardContent, Typography, Avatar } from '@mui/material';

const PeopleCard = ({ person, onCardClick }) => {
  const imageSrc = `utils/people/${person.name}.jpg`; // Assuming the image names match people names

  const handleCardClick = () => {
    onCardClick(person);
  };

  return (
    <Card onClick={handleCardClick} style={{ cursor: 'pointer' }}>
      <CardContent>
        <Avatar src={imageSrc} alt={person.name} sx={{ width: 80, height: 80, margin: 'auto' }} />
        <Typography variant="h5" component="div">
          {person.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Birth Year: {person.birth_year}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Species: {person.species}
        </Typography>
        {/* Include other details as needed */}
      </CardContent>
    </Card>
  );
};

export default PeopleCard;
