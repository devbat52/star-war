import React from "react";
import { Stack, Typography } from "@mui/material";
import { categories } from "../utils/constants";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction="column"
    alignItems="center"
    sx={{
      backgroundColor: "#333", // Dark background color
      padding: "10px",
      borderRadius: "10px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)", // Shadow for better visibility
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
    }}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        onClick={() => setSelectedCategory(category.name)}
        style={{
          background: category.name === selectedCategory ? "#FC1503" : "transparent",
          color: category.name === selectedCategory ? "white" : "#FF5733",
          border: "none",
          padding: "10px",
          margin: "5px",
          borderRadius: "5px",
          cursor: "pointer",
          width: "100%", // Make buttons take full width
          textAlign: "left", // Align text to the left
        }}
        key={category.name}
      >
        <span style={{ marginRight: "10px" }}>{category.icon}</span>
        <Typography
          variant="body1"
          style={{
            opacity: category.name === selectedCategory ? "1" : "0.8",
            fontWeight: 600,
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
        >
          {category.name}
        </Typography>
      </button>
    ))}
  </Stack>
);

export default Sidebar;
