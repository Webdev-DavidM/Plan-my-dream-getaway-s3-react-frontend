import { Grid, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { useAppSelector } from "../hooks/hooks";

type Props = {
  children: React.ReactNode;
};

function PageContainer({ children }: Props) {
  const theme = useTheme();
  const smallerThanDesktop = useMediaQuery(theme.breakpoints.down("lg"));
  let step = useAppSelector((state) => state.tripDetails.searchStep);

  return (
    <Grid
      container
      xs={12}
      sx={{
        minHeight: smallerThanDesktop ? "110vh" : "100vh",
        justifyContent: "center",
        alignItems: step === 4 ? null : "center",
        width: "100%",
        backgroundColor: "white",
      }}
    >
      {children}
    </Grid>
  );
}

export default PageContainer;
