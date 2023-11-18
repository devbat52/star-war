import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Drawer, Box } from '@mui/material';
import Loader from './Loader';
import { Stack } from '@mui/material';
import image1 from "../utils/image1.jpg";
import image2 from "../utils/image2.jpg";
import image3 from "../utils/image3.jpeg";
import image4 from "../utils/image4.jpg";
import image5 from "../utils/image5.jpg";
import image6 from "../utils/image6.jpeg";

const Cards = ({ film2, direction }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [ind, indf] = useState(null);
  if (!film2 || !film2.results) return <Loader />;

  const images = [image1, image2, image3, image4, image5, image6];

  const handleCardClick = (movie,index) => {
    setSelectedMovie(movie);
    indf(index);
  };

  const handleCloseSidebar = () => {
    setSelectedMovie(null);
  };

  return (
    <>
      <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
        {film2.results.map((element, index) => (
          element ? (
            <Card key={element.episode_id} onClick={() => handleCardClick(element,index)}>
              <CardMedia
                component="img"
                height="140"
                image={images[index]}
                alt={element.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {element.title}
                </Typography>
              </CardContent>
            </Card>
          ) : null
        ))}
      </Stack>

      {/* Sidebar for displaying additional content */}
      <Drawer
        anchor="right"
        open={selectedMovie !== null}
        onClose={handleCloseSidebar}
      >
        <Box
          style={{
            width: '300px',
            padding: '20px',
            textAlign: 'center',
          }}
        >
          {selectedMovie && (
            <>
              <Typography variant="h4" gutterBottom>
                {selectedMovie.title}
              </Typography>
              <img src={images[ind]} alt={selectedMovie.title} style={{ maxWidth: '100%' }} />
              <Box mt={2}>
                <Typography variant="body1" gutterBottom>
                  Release Date: {selectedMovie.release_date}
                </Typography>
              </Box>
            </>
          )}
        </Box>
      </Drawer>
    </>
  );
};

export default Cards;
