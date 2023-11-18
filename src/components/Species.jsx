// Species.jsx
import React, { useState } from 'react';
import { Card, CardContent, Typography, Grid, ToggleButton, ToggleButtonGroup, Stack, Avatar, Drawer } from '@mui/material';
import { ViewList, ViewModule } from '@mui/icons-material';

const SpeciesCard = ({ species, onClick }) => {
  const imageSrc = `/utils/species/${species.name}.jpg`; // Assuming the image names match species names

  return (
    <Card onClick={() => onClick(species)}>
      <CardContent>
        <Avatar src={imageSrc} alt={species.name} sx={{ width: 80, height: 80, margin: 'auto' }} />
        <Typography variant="h5" component="div">
          {species.name}
        </Typography>
      </CardContent>
    </Card>
  );
};

const SpeciesDetails = ({ species, onClose }) => {
  if (!species) {
    return null; // Return early if species is null
  }

  const imageSrc = `/utils/species/${species.name}.jpg`; // Assuming the image names match species names

  return (
    <Drawer anchor="right" open={Boolean(species)} onClose={onClose}>
      <CardContent>
        <Avatar src={imageSrc} alt={species.name} sx={{ width: 80, height: 80, margin: 'auto' }} />
        <Typography variant="h5" component="div">
          {species.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Homeworld: {species.homeworld}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lifespan: {species.lifespan}
        </Typography>
      </CardContent>
    </Drawer>
  );
};

const Species = ({ species }) => {
  const [view, setView] = useState('list');
  const [selectedSpecies, setSelectedSpecies] = useState(null);

  const handleViewChange = (event, newView) => {
    if (newView !== null) {
      setView(newView);
    }
  };

  const handleCardClick = (selectedSpecies) => {
    setSelectedSpecies(selectedSpecies);
  };

  const handleCloseDetails = () => {
    setSelectedSpecies(null);
  };

  if (!species || species.length === 0) {
    return <p>No species data available.</p>;
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
        <ToggleButton
          value="list"
          sx={{
            backgroundColor: '#1976D2',
            color: '#fff',
            '&:hover': { backgroundColor: '#1565C0' },
            borderRadius: '50%',
          }}
        >
          <ViewList />
        </ToggleButton>
        <ToggleButton
          value="grid"
          sx={{
            backgroundColor: '#1976D2',
            color: '#fff',
            '&:hover': { backgroundColor: '#1565C0' },
            borderRadius: '50%',
          }}
        >
          <ViewModule />
        </ToggleButton>
      </ToggleButtonGroup>

      {view === 'grid' ? (
        <Grid container spacing={2}>
          {species.map((species, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <SpeciesCard species={species} onClick={handleCardClick} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <div>
          {species.map((species, index) => (
            <SpeciesCard key={index} species={species} onClick={handleCardClick} />
          ))}
        </div>
      )}

      <SpeciesDetails species={selectedSpecies} onClose={handleCloseDetails} />
    </Stack>
  );
};

export default Species;
