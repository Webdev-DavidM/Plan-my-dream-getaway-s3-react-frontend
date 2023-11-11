import { Grid } from "@mui/material";
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
      sx={{
        width: "180px",
        height: "180px",
        justifyContent: "space-between",
        mt: 1,
        borderRadius: "10px",
        overflow: "hidden",
        p: 1,
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
          // objectFit: "fill",
        }}
      />
    </Grid>
    // </Grid>
  );
};

export default DestinationImage;
