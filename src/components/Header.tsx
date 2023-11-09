import { Grid, Typography } from "@mui/material";

// type Props = {};

export default function Header() {
  return (
    <Grid
      container
      sx={{
        height: "10vh",
        width: "100vw",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: "#8e8e8e",
        }}
      >
        Plan my dream getaway
      </Typography>
    </Grid>
  );
}
