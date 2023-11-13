import { Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import DestinationImage from "./DestinationImage";

type Props = {};

const PopularDestinations = (props: Props) => {
  const theme = useTheme();
  console.log(theme);
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
        <DestinationImage place={"Cancun"} imageName={"cancun"} />
        <DestinationImage place={"Dubai"} imageName={"dubai"} />
        <DestinationImage place={"Istanbul"} imageName={"istanbul"} />
        <DestinationImage place={"LasVegas"} imageName={"lasvegas"} />
        <DestinationImage place={"Honolulu"} imageName={"honolulu"} />
        <DestinationImage place={"Cabo San Lucas"} imageName={"cabosanlucas"} />
      </Grid>
    </Grid>
  );
};

export default PopularDestinations;
