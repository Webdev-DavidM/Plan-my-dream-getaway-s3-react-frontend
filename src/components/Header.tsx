import { Grid, Typography } from "@mui/material";
import ProgressBar from "./pages/search/ProgressBar";

// type Props = {};

export default function Header() {
  return (
    <Grid
      container
      sx={{
        // minHeight: "10vh",
        position: "fixed",
        top: "0",
        left: "0",
        backgroundColor: "white",
        right: "0",
        maxWidth: "100%",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 100,
        overflowY: "hidden" /* Hide vertical scrollbar */,
        overflowX: "hidden" /* Hide horizontal scrollbar */,
        // p: 3,
      }}
    >
      <Typography
        variant="h3"
        color="primary"
        sx={{
          width: "100%",
          textAlign: "center",
          mt: 3,
        }}
      >
        Plan your dream getaway
      </Typography>
      <Typography
        variant="body1"
        sx={{
          width: "100%",
          textAlign: "center",
          mb: 1,
        }}
      >
        {" "}
        Powered by AI
      </Typography>
      <ProgressBar />
    </Grid>
  );
}
