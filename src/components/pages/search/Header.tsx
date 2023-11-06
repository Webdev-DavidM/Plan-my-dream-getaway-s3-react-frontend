import { Grid } from "@mui/material";
import React from "react";

type Props = {};

export default function Header({}: Props) {
  return (
    <Grid
      container
      sx={{
        height: "10vh",
        width: "100vw",
        backgroundColor: "green",
      }}
    >
      Header
    </Grid>
  );
}
