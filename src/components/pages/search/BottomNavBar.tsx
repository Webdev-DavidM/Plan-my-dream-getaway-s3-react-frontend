import { Grid } from "@mui/material";
import React from "react";

type Props = {};

const BottomNavBar = (props: Props) => {
  return (
    <Grid
      container
      sx={{
        height: "10vh",
        backgroundColor: "red",
      }}
    >
      BottomNavBar
    </Grid>
  );
};

export default BottomNavBar;
