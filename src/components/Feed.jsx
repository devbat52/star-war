import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Sidebar, Films, Loader, ErrorMessage, WelcomePage,People,Planets,Species,Starships,Vehicles } from "./"; // Assuming you have Loader, ErrorMessage, and WelcomePage components

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("Welcome");
  const [films, setFilms] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (selectedCategory !== "Welcome") {
      const fetchData = async () => {
        try {
          const response = await fetch(`https://swapi.dev/api/${selectedCategory}`);
          const data = await response.json();
          setFilms(data);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff" }}>
          Copyright © 2023 devbat52
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        {selectedCategory === "Welcome" && <WelcomePage />} {/* Display welcome page only when selectedCategory is "Welcome" */}
        {selectedCategory !== "Welcome" && !loading && (
          <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
            {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}{' '}
            <span style={{ color: "#FC1503" }}></span>
          </Typography>
        )}

        {selectedCategory !== "Welcome" && loading && <Loader />} {/* Display loader while fetching data */}
        {selectedCategory !== "Welcome" && error && <ErrorMessage message={error} />} {/* Display error message if there's an error */}
        {selectedCategory === "films" && !loading && !error && <Films film={films} />} {/* Display Films component if data is available */}
        {selectedCategory === 'people' && films && <People people={films.results} />}
        {selectedCategory === 'planets' && films && <Planets planets={films.results} />}
        {selectedCategory === 'species' && films && <Species species={films.results} />}
        {selectedCategory === 'starships' && films && <Starships starships={films.results} />}
        {selectedCategory === 'vehicles' && films && <Vehicles vehicles={films.results} />}

      </Box>
    </Stack>
  );
};

export default Feed;
