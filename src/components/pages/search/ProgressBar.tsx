import * as React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

export default function ProgressBar() {
  return (
    <Box sx={{ width: "80%", margin: "auto", mt: 3 }}>
      <LinearProgress variant="determinate" value={25} />
    </Box>
  );
}
