import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { FunctionComponent } from "react";

// Store
import { useAppDispatch } from "../../../hooks/hooks";
import { setPlace, setSearchStep } from "../../../redux/tripDetailsSlice";

interface IPropsDestinationImage {
  place: string;
  imageName: string;
}

const DestinationImage: FunctionComponent<IPropsDestinationImage> = ({
  place,
  imageName,
}) => {
  const theme = useTheme();
  const dispatch = useAppDispatch();

  const selectRecommendedDestination = (place: string) => {
    dispatch(setPlace(place));
    dispatch(setSearchStep(2));
  };
  const largeDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <Grid
      item
      xs={6}
      md={4}
      lg={2}
      onClick={() => selectRecommendedDestination(place)}
      sx={{
        maxWidth: largeDesktop ? "180px" : "100%",
        justifyContent: "space-between",
        position: "relative",
        overflow: "hidden",
        borderRadius: 2,
        p: 1,
        "& :hover": {
          cursor: "pointer",
        },
      }}
    >
      <img
        src={`/assets/${imageName}.jpeg`}
        alt="cancun"
        style={{
          height: "100%",
          width: "100%",
          objectFit: "cover",
          borderRadius: 10,
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
  );
};

export default DestinationImage;
