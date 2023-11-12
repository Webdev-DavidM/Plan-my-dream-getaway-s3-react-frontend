import { Grid, Typography } from "@mui/material";
import { FunctionComponent } from "react";

interface IPropsDestinationImage {
  place: string;
  imageName: string;
}

const DestinationImage: FunctionComponent<IPropsDestinationImage> = ({
  place,
  imageName,
}) => {
  return (
    <Grid
      item
      xs={6}
      md={4}
      lg={2}
      sx={{
        // width: "180px",
        // height: "180px",
        justifyContent: "space-between",
        position: "relative",
        overflow: "hidden",

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
          objectFit: "fill",
        }}
      />

      <Typography
        sx={{
          position: "absolute",
          color: "white",
          bottom: 0,
          left: 0,
          p: 1,
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
