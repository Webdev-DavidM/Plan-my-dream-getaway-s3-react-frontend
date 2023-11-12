import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { FunctionComponent } from "react";

interface IPropsDestinationImage {
  place: string;
  imageName: string;
}

const DestinationImage: FunctionComponent<IPropsDestinationImage> = ({
  place,
  imageName,
}) => {
  const theme = useTheme();
  const largeDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <Grid
      item
      xs={6}
      md={4}
      lg={2}
      sx={{
        maxWidth: largeDesktop ? "180px" : "100%",
        // maxHeight: largeDesktop ? "180px" : "100%",
        justifyContent: "space-between",
        position: "relative",
        overflow: "hidden",
        borderRadius: 2,
        p: 1,

        // p: 3,
      }}
    >
      {/* <Grid
        item
        sx={{
       
        }}
      > */}
      <img
        src={`/assets/${imageName}.jpeg`}
        alt="cancun"
        style={{
          height: "100%",
          width: "100%",
          objectFit: "cover",
        }}
      />

      <Typography
        sx={{
          position: "absolute",
          color: "white",
          bottom: 0,
          left: 0,
          p: 2,
        }}
        variant="h5"
      >
        {place}
      </Typography>
    </Grid>
    // </Grid>
  );
};

export default DestinationImage;
