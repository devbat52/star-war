// Starships.jsx (Updated)
import React, { useState } from 'react';
import { Card, CardContent, Typography, Grid, ToggleButton, ToggleButtonGroup, Stack, Drawer, Paper } from '@mui/material';
import { ViewList, ViewModule } from '@mui/icons-material';

// StarshipDetails component with null check
const StarshipDetails = ({ starship, onClose }) => {
  if (!starship) {
    return null;
  }

  return (
    <Drawer anchor="right" open={Boolean(starship)} onClose={onClose}>
      <Paper elevation={3} sx={{ padding: 2 }}>
        <Typography variant="h5" component="div">
          {starship.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ marginTop: 1 }}>
          Model: {starship.model}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ marginTop: 1 }}>
          Hyperdrive Rating: {starship.hyperdrive_rating}
        </Typography>
      </Paper>
    </Drawer>
  );
};

// StarshipCard component with improved styling
const StarshipCard = ({ starship, onClick }) => {
  return (
    <Card onClick={() => onClick(starship)} sx={{ cursor: 'pointer', '&:hover': { backgroundColor: '#F5F5F5' } }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {starship.name}
        </Typography>
      </CardContent>
    </Card>
  );
};

// Starships component
const Starships = ({ starships }) => {
  const [view, setView] = useState('list');
  const [selectedStarship, setSelectedStarship] = useState(null);

  const handleViewChange = (event, newView) => {
    if (newView !== null) {
      setView(newView);
    }
  };

  const handleCardClick = (starship) => {
    setSelectedStarship(starship);
  };

  const handleCloseDetails = () => {
    setSelectedStarship(null);
  };

  if (!starships || starships.length === 0) {
    return <p>No starships data available.</p>;
  }

  return (
    <Stack spacing={2}>
      <ToggleButtonGroup
        value={view}
        exclusive
        onChange={handleViewChange}
        size="small"
        sx={{ marginBottom: 2, justifyContent: 'flex-end', marginRight: '2rem' }}
      >
        <ToggleButton value="list" sx={{ backgroundColor: '#1976D2', color: '#fff', borderRadius: '50%' }}>
          <ViewList />
        </ToggleButton>
        <ToggleButton value="grid" sx={{ backgroundColor: '#1976D2', color: '#fff', borderRadius: '50%' }}>
          <ViewModule />
        </ToggleButton>
      </ToggleButtonGroup>

      {view === 'grid' ? (
        <Grid container spacing={2}>
          {starships.map((starship, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <StarshipCard starship={starship} onClick={handleCardClick} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <div>
          {starships.map((starship, index) => (
            <StarshipCard key={index} starship={starship} onClick={handleCardClick} />
          ))}
        </div>
      )}

      <StarshipDetails starship={selectedStarship} onClose={handleCloseDetails} />
    </Stack>
  );
};

export default Starships;
