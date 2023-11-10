import { Grid, Typography } from "@mui/material";
import React from "react";
import DestinationImage from "./DestinationImage";

type Props = {};

const PopularDestinations = (props: Props) => {
  return (
    <Grid
      container
      mt={5}
      sx={{
        width: "50%",

        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          width: "100%",
        }}
      >
        PopularDestinations
      </Typography>
      <Grid
        container
        xs={12}
        py={2}
        sx={{
          width: "100%",
          border: "1px solid red",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <DestinationImage place={"Cancun"} imageName={"cancun"} />
        <DestinationImage place={"Dubai"} imageName={"dubai"} />
        <DestinationImage place={"Istanbul"} imageName={"istanbul"} />
        <DestinationImage place={"LasVegas"} imageName={"lasvegas"} />
        <DestinationImage place={"Miami"} imageName={"miami"} />
        <DestinationImage
          place={"Sharm-El-Sheikh"}
          imageName={"sharm-el-sheikh"}
        />
      </Grid>
    </Grid>
  );
};

export default PopularDestinations;
