import { Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import DestinationImage from "./DestinationImage";

type Props = {};

const destinations = [
  { place: "Cancun", imageName: "cancun" },
  { place: "Dubai", imageName: "dubai" },
  { place: "Istanbul", imageName: "istanbul" },
  { place: "Las Vegas", imageName: "lasvegas" },
  { place: "Honolulu", imageName: "honolulu" },
  { place: "Cabo San Lucas", imageName: "cabosanlucas" },
];

const PopularDestinations = (props: Props) => {
  const theme = useTheme();

  return (
    <Grid container xs={12} lg={8}>
      <Typography
        sx={{
          width: "100%",
        }}
        mt={3}
        variant="h4"
        color="primary"
        px={1}
      >
        Popular Destinations
      </Typography>
      <Grid
        container
        xs={12}
        sx={{
          width: "100%",

          // alignItems: "center",
        }}
      >
        {destinations.map((destination) => {
          return (
            <DestinationImage
              place={destination.place}
              imageName={destination.imageName}
            />
          );
        })}
      </Grid>
    </Grid>
  );
};

export default PopularDestinations;
