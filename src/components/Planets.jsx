// Planets.jsx
import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography, ToggleButton, ToggleButtonGroup, Stack, IconButton } from '@mui/material';
import { List, GridOn } from '@mui/icons-material'; // Import icons
import PlanetCard from './PlanetCard';
import PlanetDetails from './PlanetDetails';

// Importing images dynamically
import image1 from '../utils/planets/image1.jpg';
import image2 from '../utils/planets/image2.jpg';
import image3 from '../utils/planets/image3.jpg';

const planetImages = [image1, image2, image3];

const generateRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * planetImages.length);
  return planetImages[randomIndex];
};

const generatePlanetsWithImages = (planets) => {
  return planets.map((planet, index) => ({
    ...planet,
    imageUrl: planetImages[index % planetImages.length], // Repeating images if there are more planets than images
  }));
};

const Planets = ({ planets }) => {
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [isDetailsOpen, setDetailsOpen] = useState(false);
  const [view, setView] = useState('grid');

  const handleCardClick = (planet) => {
    setSelectedPlanet(planet);
    setDetailsOpen(true);
  };

  const handleCloseDetails = () => {
    setDetailsOpen(false);
  };

  const handleViewChange = (event, newView) => {
    if (newView !== null) {
      setView(newView);
    }
  };

  const planetsWithImages = generatePlanetsWithImages(planets);

  return (
    <div>
      <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={2} sx={{ marginBottom: 2 }}>
        <IconButton onClick={() => handleViewChange(null, 'list')} color="primary" sx={{ backgroundColor: '#303030' }}>
          <List />
        </IconButton>
        <IconButton onClick={() => handleViewChange(null, 'grid')} color="primary" sx={{ backgroundColor: '#303030' }}>
          <GridOn />
        </IconButton>
      </Stack>

      {view === 'grid' ? (
        <Grid container spacing={2}>
          {planetsWithImages.map((planet) => (
            <Grid item key={planet.id} xs={12} sm={6} md={4} lg={3}>
              <PlanetCard planet={planet} onClick={handleCardClick} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Grid container spacing={2}>
          {planetsWithImages.map((planet) => (
            <Grid item key={planet.id} xs={12}>
              <Card onClick={() => handleCardClick(planet)} style={{ cursor: 'pointer', marginBottom: '8px' }}>
                <CardContent>
                  <Typography variant="h6">{planet.name}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      <PlanetDetails isOpen={isDetailsOpen} onClose={handleCloseDetails} planet={selectedPlanet} />
    </div>
  );
};

export default Planets;
