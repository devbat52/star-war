// RightSidebar.jsx
import React from 'react';
import { Drawer, List, ListItem, ListItemText, Avatar, Typography } from '@mui/material';

const RightSidebar = ({ person, isOpen, onClose }) => {
  // Add a conditional check to ensure 'person' is not null
  if (!person) {
    return null; // Render nothing if 'person' is null
  }

  const imageSrc = `utils/people/${person.name}.jpg`; // Assuming the image names match people names

  return (
    <Drawer anchor="right" open={isOpen} onClose={onClose}>
      <List>
        <ListItem>
          <Avatar src={imageSrc} alt={person.name} sx={{ width: 100, height: 100 }} />
        </ListItem>
        <ListItem>
          <ListItemText primary={`Name: ${person.name}`} />
        </ListItem>
        <ListItem>
          <ListItemText primary={`Birth Year: ${person.birth_year}`} />
        </ListItem>
        <ListItem>
          <ListItemText primary={`Species: ${person.species}`} />
        </ListItem>
        {/* Include other details as needed */}
      </List>
    </Drawer>
  );
};

export default RightSidebar;
