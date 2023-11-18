// People.jsx
import React, { useState } from 'react';
import { Grid, Stack } from '@mui/material';
import PeopleCard from './PeopleCard';
import RightSidebar from './RightSideBar';

const People = ({ people }) => {
  const [view, setView] = useState('list');
  const [selectedPerson, setSelectedPerson] = useState(null);

  const handleViewChange = (event, newView) => {
    if (newView !== null) {
      setView(newView);
    }
  };

  const handleCardClick = (person) => {
    setSelectedPerson(person);
  };

  const handleCloseDetails = () => {
    setSelectedPerson(null);
  };

  if (!people || people.length === 0) {
    return <p>No people data available.</p>;
  }

  return (
    <Stack spacing={2}>
      <Grid container spacing={2}>
        {people.map((person, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <PeopleCard person={person} onCardClick={() => handleCardClick(person)} />
          </Grid>
        ))}
      </Grid>

      <RightSidebar person={selectedPerson} isOpen={!!selectedPerson} onClose={handleCloseDetails} />
    </Stack>
  );
};

export default People;
