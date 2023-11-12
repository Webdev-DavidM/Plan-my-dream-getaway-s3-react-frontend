import { Grid, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

type Props = {
  children: React.ReactNode;
};

function PageContainer({ children }: Props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  console.log(isMobile);

  return (
    <Grid
      container
      xs={12}
      sx={{
        minHeight: "100vh",
        justifyContent: "center",
        alignItems: isMobile ? "normal" : "center",
        mt: isMobile ? 10 : 0,
        width: "100%",
        backgroundColor: "white",
      }}
    >
      {children}
    </Grid>
  );
}

export default PageContainer;
