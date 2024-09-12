import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Button from "@mui/material/Button";

const Search = ({ setWeatherData }) => {
  const API_KEY = import.meta.env.VITE_RAPIDAPI_KEY;
  const API_HOST = import.meta.env.VITE_API_HOST;

  const [city, setCity] = useState("");

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData(city);
  };

  const fetchData = async (city) => {
    try {
      const response = await fetch(
        `https://${API_HOST}/weather?location=${city}&format=json&u=c`,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key": API_KEY,
            "X-RapidAPI-Host": API_HOST,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      setWeatherData(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };
  return (
    <>
      <Box
        className="px-3"
        sx={{ display: "inline-flex", alignItems: "flex-end" }}
      >
        <LocationOnIcon sx={{ color: "white", mr: 1, my: 0.5 }} />
        <TextField
          onChange={handleChange}
          className="text-white"
          id="input-with-sx"
          label="Enter Your City"
          variant="standard"
          size="small"
          color="white"
          sx={{
            input: { color: "white" },
            label: { color: "white" },
            "& .MuiInput-underline:before": { borderBottomColor: "white" },
            "& .MuiInput-underline:after": { borderBottomColor: "white" },
            paddingRight: "20px",
          }}
        />
        <Button
          variant="outlined"
          onClick={handleSubmit}
          sx={{
            borderRadius: "50px",
          }}
        >
          Check
        </Button>
      </Box>
    </>
  );
};

export default Search;
