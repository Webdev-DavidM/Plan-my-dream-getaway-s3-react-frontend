import { Grid, Typography } from "@mui/material";

// type Props = {};

export default function Header() {
  return (
    <Grid
      container
      sx={{
        minHeight: "10vh",
        position: "fixed",
        top: "0",
        left: "0",
        backgroundColor: "white",
        right: "0",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 100,
        p: 3,
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
