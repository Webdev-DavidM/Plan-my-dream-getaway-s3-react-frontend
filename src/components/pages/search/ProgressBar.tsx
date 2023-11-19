import * as React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

export default function ProgressBar() {
  return (
    <Box sx={{ width: "100%", margin: "auto", borderTop: "1px solid #e0e0e0" }}>
      <LinearProgress variant="determinate" value={25} />
    </Box>
  );
}
