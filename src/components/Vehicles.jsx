// Vehicles.jsx
import React, { useState } from 'react';
import { Card, CardContent, Typography, Grid, ToggleButton, ToggleButtonGroup, Stack, Drawer, Paper } from '@mui/material';
import { ViewList, ViewModule } from '@mui/icons-material';

// VehicleDetails component with null check
const VehicleDetails = ({ vehicle, onClose }) => {
  if (!vehicle) {
    return null;
  }

  return (
    <Drawer anchor="right" open={Boolean(vehicle)} onClose={onClose}>
      <Paper elevation={3} sx={{ padding: 2 }}>
        <Typography variant="h5" component="div">
          {vehicle.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ marginTop: 1 }}>
          Model: {vehicle.model}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ marginTop: 1 }}>
          Top Speed: {vehicle.max_atmosphering_speed}
        </Typography>
      </Paper>
    </Drawer>
  );
};

// VehicleCard component with improved styling
const VehicleCard = ({ vehicle, onClick }) => {
  return (
    <Card onClick={() => onClick(vehicle)} sx={{ cursor: 'pointer', '&:hover': { backgroundColor: '#F5F5F5' } }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {vehicle.name}
        </Typography>
      </CardContent>
    </Card>
  );
};

// Vehicles component
const Vehicles = ({ vehicles }) => {
  const [view, setView] = useState('list');
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const handleViewChange = (event, newView) => {
    if (newView !== null) {
      setView(newView);
    }
  };

  const handleCardClick = (vehicle) => {
    setSelectedVehicle(vehicle);
  };

  const handleCloseDetails = () => {
    setSelectedVehicle(null);
  };

  if (!vehicles || vehicles.length === 0) {
    return <p>No vehicle data available.</p>;
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
          {vehicles.map((vehicle, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <VehicleCard vehicle={vehicle} onClick={handleCardClick} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <div>
          {vehicles.map((vehicle, index) => (
            <VehicleCard key={index} vehicle={vehicle} onClick={handleCardClick} />
          ))}
        </div>
      )}

      <VehicleDetails vehicle={selectedVehicle} onClose={handleCloseDetails} />
    </Stack>
  );
};

export default Vehicles;
