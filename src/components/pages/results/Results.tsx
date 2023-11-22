import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import InteractiveMap from "./InteractiveMap";
import useStreamPlaceSummary from "../../../hooks/useStreamPlaceSummary ";
import {
  getTopFivePlaceImages,
  getTopFivePlaces,
} from "../../../redux/tripDetailsSlice";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

type Props = {};

const Results = (props: Props) => {
  const { placeSummary } = useStreamPlaceSummary();
  const dispatch = useDispatch();
  const topFivePlaces = useSelector(
    (state: any) => state.tripDetails.topFivePlaces
  );

  useEffect(() => {
    // also request the place summary here and add to the overall topFivePlacesAllData
    dispatch(getTopFivePlaces());
  }, [dispatch]);

  useEffect(() => {
    if (topFivePlaces.length) {
      // if the five places are back from and can go to the backend to get the images,
      // these hops mean I have something to show the user as I wait for the images to come back

      dispatch(getTopFivePlaceImages(topFivePlaces));
    }
  }, [topFivePlaces, dispatch]);

  const theme = useTheme();
  const notLarge = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <Grid
      container
      justifyContent={"center"}
      sx={{
        paddingTop: notLarge ? "40vh" : "20vh",
        paddingBottom: notLarge ? "20vh" : "null",
      }}
    >
      <Grid item>
        <InteractiveMap />
      </Grid>
      <Typography
        sx={{
          height: "auto",
          width: "100%",
        }}
      >
        {placeSummary}
      </Typography>
    </Grid>
  );
};

export default Results;
