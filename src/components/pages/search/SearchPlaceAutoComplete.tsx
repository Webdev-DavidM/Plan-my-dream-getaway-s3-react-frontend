import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";

type Props = {};

const top100Films = [
  {
    title: "The Shawshank Redemption",
    year: 1994,
  },
  {
    title: "The Godfather",
    year: 1972,
  },
  {
    title: "The Godfather: Part II",
    year: 1974,
  },
];

//maps.googleapis.com/maps/api/place/autocomplete/json?input=Paris&types=geocode&key=AIzaSyATV9iOWH5WTs8QFUgK4QDz_mGKl07OfVw

const SearchPlaceAutoComplete = (props: Props) => {
  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      {/* <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => <TextField {...params} label="freeSolo" />}
      /> */}
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
            // onChange={(event) => setQuery(event.target.value)}
          />
        )}
      />
    </Stack>
  );
};

export default SearchPlaceAutoComplete;
